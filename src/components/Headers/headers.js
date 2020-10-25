import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./headers.css";
import Logo from "../Logo/logo";
const { Header } = Layout;

function Headers() {
  return (
    <Header style={{ background: "white" }}>
      {/* <Logo /> */}
      <Menu className="nav-menu" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="3">About Us</Menu.Item>
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Headers;
