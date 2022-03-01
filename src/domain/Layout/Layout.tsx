import React, { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import "./Layout.scss";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/logoblack1.jpg";
import { Link } from "react-router-dom";
import { ROUTE } from "../routing/routing";
// import { Breadcrumb } from "antd";
import BreadCrumb from "../../components/BreadCrumb";

export const MainLayout = (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    // <div className="layout-container">
    //     <div className='layout-main'>
    //         <Header />
    //     </div>
    //     <div className="layout-main" >
    //         {props.children}
    //     </div>
    //     <div className="layout-footer">
    //         <Footer />
    //     </div>
    // </div>
    <Layout className="page-layout-content">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-content">
          <img src={logo} alt="logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={ROUTE.HOME}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to={ROUTE.CARDS}>Cards</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to={ROUTE.TRANSACTIONS}>Transactions</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="icon-white" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="icon-white" onClick={toggle} />
          )}
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <BreadCrumb />
          <div className="layout-main">{props.children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};
