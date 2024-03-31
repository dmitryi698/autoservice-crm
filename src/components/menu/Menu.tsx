import React from "react";
import { Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import styles from "./Menu.module.css";

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const PageMenu = (props) => {
  return <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />;
};
export default PageMenu;
