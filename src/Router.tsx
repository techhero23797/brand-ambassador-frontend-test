import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./screens/Feed/Feed";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
