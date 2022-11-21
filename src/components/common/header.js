import React from "react";
import { Menu } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

export default function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          {/* <i class="fas fa-bolt"></i> */}
          <AntDesignOutlined />
          <a href="https://ant.design/components/icon">Ant Design</a>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`
            };
          })}
        />
      </div>
    </div>
  );
}
