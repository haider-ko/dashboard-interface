import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Card,
  Spin,
  Space,
  Avatar,
  Image,
  Badge,
} from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteUser,
  getUsersFetch,
} from "../../../store/sagas/slice/usersSlice";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border-radius: 10px;
`;

const StyledSpace = styled(Space)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const FirstTable = ({
  dataSource,
  setDataSource,
  titleofTable,
  last_name,
  image,
}) => {
  const [count, setCount] = useState(11);
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleAdd = () => {
    const newData = {
      id: count,
      name: `Type your name `,
      email: "Type your email ",
      phone: `Type your phone number`,
      username: `Type your username`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id == item.id);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const defaultColumns = [
    {
      title: "No",
      dataIndex: "id",
      editable: true,
    },
    {
      title: " ",
      dataIndex: "image",

      render: (_, record, dataIndex) =>
        users.length >= 1
          ? users.map((m) => (
              <> {m.id === record.id && <Avatar src={m.image} width={200} />}</>
            ))
          : 0,
    },

    {
      title: "Name",
      dataIndex: "first_name",
      editable: true,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      editable: true,
      hidden: last_name ? false : true,
    },

    {
      title: "Sales",
      dataIndex: "sales",
      editable: true,
    },
    {
      title: "Status",
      dataIndex: "boolean",
      align: "center",

      render: (_, record, dataIndex) =>
        users.length
          ? users.map((m) => (
              <>
                {" "}
                {m.boolean == true && m.id === record.id && (
                  <Badge
                    className="site-badge-count-109"
                    count={show ? "Active" : 0}
                    style={{ backgroundColor: "#52c41a" }}
                  />
                )}{" "}
                {m.boolean == false && m.id === record.id && (
                  <Badge
                    className="site-badge-count-109"
                    count={show ? "Blocked" : 0}
                    style={{ backgroundColor: "red" }}
                  />
                )}
              </>
            ))
          : 0,
    },
    {
      title: "Date",
      dataIndex: "date",
      editable: true,
    },

    {
      title: " ",
      dataIndex: "operation",
      align: "center",
      width: 30,
      render: (_, record) =>
        users.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteTwoTone />
          </Popconfirm>
        ) : null,
    },
  ].filter((item) => !item.hidden);
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  console.log(users);
  return (
    <>
      <StyledSpace></StyledSpace>
      <StyledCard title={titleofTable}>
        <Table
          components={components}
          bordered={false}
          dataSource={users}
          pagination={{
            defaultPageSize: 5,
          }}
          columns={columns}
        />
      </StyledCard>
    </>
  );
};

export default FirstTable;
