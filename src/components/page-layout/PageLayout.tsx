"use client";
import React, { useState } from "react";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "../sider/Sider";

const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout
      style={{
        height: "100vh",
      }}>
      <Sider />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#f5f5f5",
            borderBottom: "1px solid #ddd",
            boxShadow: "1px 5px 15px rgba(0, 0, 0, 0.25)",
          }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()}</Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
