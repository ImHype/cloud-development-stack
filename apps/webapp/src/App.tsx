import React from "react";
import "./App.css";
import { Hello } from "./components/index";

import { Layout } from "@arco-design/web-react";
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function App() {
  return (
    <div className="App layout-basic-demo">
      <Layout style={{ height: "100vh" }}>
        {/* <Hello /> */}
        <Header>K8Stack</Header>
        <Content></Content>
        <Footer>Copyright @ github.com/ImHype</Footer>
      </Layout>
    </div>
  );
}

export default App;
