import React from "react";
import "./App.css";
import { Hello } from "./components/index";

import { Card, Layout, Link, Space } from "@arco-design/web-react";
import { useEffect } from "react";
import { useState } from "react";
import { IconPlus } from "@arco-design/web-react/icon";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function List() {
  const [state, setState] = useState({} as any);
  useEffect(() => {
    fetch("/api/apps").then(async (res) => {
      setState(await res.json());
    });
  }, []);
  return (
    <Space
      style={{
        width: "100%",
      }}
    >
      <Card
        style={{
          width: 360,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // title="App 1"
        hoverable
        // extra={<Link>More</Link>}
      >
        <IconPlus />
      </Card>
      {state.data?.map((item: any) => {
        return (
          <Card
            style={{ width: 360 }}
            title={item.name}
            hoverable
            extra={<Link>More</Link>}
          >
            {item.desc}
          </Card>
        );
      })}
    </Space>
  );
}

function App() {
  return (
    <div className="App layout-basic-demo">
      <Layout style={{ height: "100vh" }}>
        {/* <Hello /> */}
        <Header>K8Stack</Header>
        <Content>
          <List />
        </Content>
        <Footer>Copyright @ github.com/ImHype</Footer>
      </Layout>
    </div>
  );
}

export default App;
