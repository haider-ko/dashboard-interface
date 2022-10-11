import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import "../Layout/Layout.css";
import { Cards, StyledSpace } from "./Main Content/Cards";

import { Card, Layout, Menu, Row, Col, Typography } from "antd";
import React, { useState } from "react";
import Grids from "./Main Content/Cards";
import BarChart from "./Charts/Chart";
import FirstTable from "./Tables/FirstTable";
const { Header, Sider, Content } = Layout;
const style = {
  background: "#0092ff",
  margin: "10px 0",
};

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh", backgroundColor: "#121e2d" }}
      >
        <div className="logo" />
        <Menu
          style={{ backgroundColor: "#121e2d", color: "#8fa6bf" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor: "#f8f8f8",
          }}
        >
          <Grids></Grids>

          <Row gutter={[16, 20]}>
            <Col gutter={4} span={16}>
              <Card>
                <BarChart />
              </Card>
            </Col>

            <Col span={8}>
              <Row vgutter={20} style={{ style }}>
                <Col style={{ backgroundColor: "green" }}>
                  <Card>
                    <Typography>
                      Enhance your Campaign for better outreach{" "}
                    </Typography>
                  </Card>
                </Col>
              </Row>
              <Row vgutter={20} style={{ style }}>
                <Col gutter={16}>
                  <Card>
                    Hello Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quidem, natus.
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ margin: "20px 0" }}>
            <Col span={12}>
              <FirstTable />
            </Col>
            <Col offset={1} span={11}>
              <FirstTable />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
