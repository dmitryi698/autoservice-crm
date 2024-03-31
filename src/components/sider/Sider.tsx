import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import PageMenu from "../menu/Menu";

const PageSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider breakpoint="lg" collapsedWidth="0" collapsed={collapsed}>
      <PageMenu />
    </Sider>
  );
};

export default PageSider;
