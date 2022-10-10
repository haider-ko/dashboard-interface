import { Card, Col, Space, Divider, Row, Typography, Badge } from "antd";
import styled, { css } from "styled-components";
import { useState } from "react";
import "../Main Content/Cards.css";
import React from "react";
import { WalletOutlined } from "@ant-design/icons";
const style = {
  padding: "8px 0",
};

const Cards = styled(Card)`
position: relative;
display: flex;
flex-direction: column;
min-width: 0;

background-color: #fff;
background-clip: border-box;
border: 1px solid #e9ebec;
border-radius: 0.25rem;


padding: 2px;
margin: 0 10px;

}
`;

const StyledSpace = styled(Space)`
  display: flex;

  padding: 10px;
  gap: 2px;
`;

const InsideSpace = styled(Space)`
  padding: 2px;
`;

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;
// `;

const Grids = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <StyledSpace>
        <Cards>
          <InsideSpace>
            <Row gutter={20}>
              <Col className="gutter-row" span={16}>
                <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                  TOTAL REVENUE
                </Typography>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <WalletOutlined style={{ fontSize: "30px" }} />
                </div>
              </Col>
              <Col className="gutter-row" span={14}>
                <Typography style={{ fontWeight: 500, fontSize: "24px" }}>
                  $58425
                </Typography>
                <Badge
                  className="site-badge-count-109"
                  count={show ? "2.65 %" : 0}
                  style={{ backgroundColor: "#52c41a" }}
                />
              </Col>
              <Col className="gutter-row" span={14}></Col>
            </Row>
          </InsideSpace>
        </Cards>
        <Cards>
          <InsideSpace>
            <Row gutter={20}>
              <Col className="gutter-row" span={16}>
                <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                  TOTAL REFUNDS
                </Typography>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <WalletOutlined style={{ fontSize: "30px" }} />
                </div>
              </Col>
              <Col className="gutter-row" span={14}>
                <Typography style={{ fontWeight: 500, fontSize: "24px" }}>
                  $58425
                </Typography>
                <Badge
                  className="site-badge-count-109"
                  count={show ? "2.65 %" : 0}
                  style={{ backgroundColor: "#52c41a" }}
                />
              </Col>
            </Row>
          </InsideSpace>
        </Cards>
        <Cards>
          <InsideSpace>
            <Row gutter={20}>
              <Col className="gutter-row" span={16}>
                <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                  ACTIVE USERS
                </Typography>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <WalletOutlined style={{ fontSize: "30px" }} />
                </div>
              </Col>
              <Col className="gutter-row" span={14}>
                <Typography style={{ fontWeight: 500, fontSize: "24px" }}>
                  $58425
                </Typography>
                <Badge
                  className="site-badge-count-109"
                  count={show ? "2.65 %" : 0}
                  style={{ backgroundColor: "#52c41a" }}
                />
              </Col>
            </Row>
          </InsideSpace>
        </Cards>
        <Cards>
          <InsideSpace>
            <Row gutter={20}>
              <Col className="gutter-row" span={16}>
                <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                  ALL TIME ORDERS
                </Typography>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}>
                  <WalletOutlined style={{ fontSize: "30px" }} />
                </div>
              </Col>
              <Col className="gutter-row" span={14}>
                <Typography style={{ fontWeight: 500, fontSize: "24px" }}>
                  $58425
                </Typography>
                <Badge
                  className="site-badge-count-109"
                  count={show ? "2.65 %" : 0}
                  style={{ backgroundColor: "#52c41a" }}
                />
              </Col>
            </Row>
          </InsideSpace>
        </Cards>
      </StyledSpace>
    </>
  );
};

export default Grids;
