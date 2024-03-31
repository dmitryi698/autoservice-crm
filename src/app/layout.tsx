import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import PageLayout from "@/components/page-layout/PageLayout";

import "../lib/styles/main.css";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <PageLayout>{children}</PageLayout>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
