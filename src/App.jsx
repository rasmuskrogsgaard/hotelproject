import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Frontpage from "./pages/Frontpage/Frontpage";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Frontpage />} />
    </Route>
    </Routes>

  );
}

export default App;
