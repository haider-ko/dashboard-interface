import {
  DesktopOutlined,
  DollarOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Card, Layout, Menu, Row, Col, Typography, Button, Affix } from "antd";
import Grids from "./Main Content/Cards";
// import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import "../Layout/layout-sider.css";
import BarChart from "./Charts/Chart";
import FirstTable from "./Tables/FirstTable";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          backgroundColor: "#001529",
          width: "100vw",
          position: "fixed",
          zIndex: "9",
          marginBottom: "200px",
          height: "48px",
        }}
      />
      <Affix offsetTop={64} style={{ backgroundColor: "#001529" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          {/* <div className="logo" /> */}
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
      </Affix>
      <Layout className="site-layout">
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
                <BarChart />
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
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Homepage;
