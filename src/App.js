import React from "react";
import { Layout } from "antd";
import Headers from "./components/Headers/headers";
// import "./components/Headers/node_modules/antd/dist/antd.css";
import "./App.css";
import DonationForm from "./components/Form/donationForm";
const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Headers />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <DonationForm />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Made with love from NavGurukul
      </Footer>
    </Layout>
  );
}

export default App;
