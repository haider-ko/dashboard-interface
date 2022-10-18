import { Card, Col, Space, Divider, Row, Typography, Badge } from "antd";
import styled, { css } from "styled-components";
import { useState } from "react";
import "../Main Content/Cards.css";
import React from "react";
import { WalletOutlined } from "@ant-design/icons";
import BarChart from "../Charts/Chart";
const style = {
  padding: "8px 0",
};

export const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
  margin-bottom: 10px;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e9ebec;
  border-radius: 0.25rem;
  padding: 2px;
`;

const StyledSpace = styled(Space)`
  display: flex;
  justify-content: space-between;
`;

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;
// `;

const salesdata = [
  {
    id: 1,
    title: "TOTAL REVENUE",
    sales: "$58425",
    percentage: "2.65%",
    color: "#52c41a",
  },
  {
    id: 2,
    title: "TOTAL REFUNDS",
    sales: "$2568",
    percentage: "4.68%",
    color: "#f56e50",
  },
  {
    id: 3,
    title: "ACTIVE USERS",
    sales: "258410",
    percentage: "14.33%",
    color: "#52c41a",
  },
  {
    id: 4,
    title: "ALL TIME ORDERS",
    sales: "9582",
    percentage: "0.55%",
    color: "#f5bd58",
  },
];

const Grids = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Row gutter={16}>
        {salesdata.map((data) => {
          return (
            <Col span={6}>
              <StyledCard>
                <StyledSpace>
                  <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                    {data.title}
                  </Typography>

                  <WalletOutlined style={{ fontSize: "30px" }} />
                </StyledSpace>
                <Typography style={{ fontWeight: 500, fontSize: "24px" }}>
                  {data.sales}
                </Typography>
                <Badge
                  className="site-badge-count-109"
                  count={show ? data.percentage : 0}
                  style={{ backgroundColor: data.color }}
                />
              </StyledCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Grids;
