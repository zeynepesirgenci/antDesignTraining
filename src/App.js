import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/common/header.js";
import AppHome from "./views/home.js";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}
