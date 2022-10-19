import {
  DollarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import "../Layout/Layout.css";
import { Cards, StyledSpace } from "./Main Content/Cards";

import { Card, Layout, Menu, Row, Col, Typography, Button } from "antd";
import React, { useState } from "react";
import Grids from "./Main Content/Cards";
import BarChart from "./Charts/Chart";
import FirstTable from "./Tables/FirstTable";
const { Header, Sider, Content } = Layout;
const style = {
  background: "#0092ff",
  margin: "10px 0",
};

const Home = ({ users }) => {
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
          <Grids />

          <Row gutter={[16, 20]}>
            <Col span={16}>
              <Card>
                <BarChart style={{ height: "100%" }} />
              </Card>
            </Col>

            <Col span={8}>
              <Card style={{ display: "flex" }} className="cards">
                <Col span={16}>
                  <DollarOutlined
                    style={{ fontSize: "30px", padding: "5px 0" }}
                  />
                  <Typography
                    style={{ fontSize: "20px", marginBottom: "30px" }}
                  >
                    Enhance your <b>Campaign</b> for better outreach{" "}
                  </Typography>
                  <Button
                    style={{ marginBottom: "10px" }}
                    type="primary"
                    shape="round"
                  >
                    Upgrade Account
                  </Button>
                </Col>
                <Col span={8} style={{ alignSelf: "center" }}>
                  <img
                    className="img"
                    src="https://samply.react-v-light.pichforest.com/static/media/widget-img.cc77a9b7.png"
                    width={80}
                    height={50}
                    style={{ display: "flex", flexDirection: "center" }}
                  />
                </Col>
              </Card>
              <Card
                style={{ display: "flex", marginTop: "8px" }}
                className="cards"
              >
                <Col span={16}>
                  <DollarOutlined
                    style={{ fontSize: "30px", padding: "5px 0" }}
                  />
                  <Typography
                    style={{ fontSize: "20px", marginBottom: "30px" }}
                  >
                    Enhance your <b>Campaign</b> for better outreach{" "}
                  </Typography>
                  <Button
                    style={{ marginBottom: "10px" }}
                    type="primary"
                    shape="round"
                  >
                    Upgrade Account
                  </Button>
                </Col>
                <Col span={8} style={{ alignSelf: "center" }}>
                  <img
                    className="img"
                    src="https://samply.react-v-light.pichforest.com/static/media/widget-img.cc77a9b7.png"
                    width={80}
                    height={50}
                    style={{ display: "flex", flexDirection: "center" }}
                  />
                </Col>
              </Card>
            </Col>
          </Row>

          <Row style={{ margin: "20px 0" }}>
            <Col span={12}>
              <FirstTable titleofTable={"Latest Transaction"} />
            </Col>
            <Col offset={1} span={11}>
              <FirstTable titleofTable={"Latest Orders"} />
            </Col>
          </Row>

          <Row style={{ margin: "20px 0" }}>
            <Col span={24}>
              <FirstTable
                titleofTable={"Recent users"}
                last_name={"last_name"}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
