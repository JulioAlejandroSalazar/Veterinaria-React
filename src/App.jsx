import React from 'react';
import AppRouter from "./router/AppRouter";
import { HashRouter } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </HashRouter>
  );
}
