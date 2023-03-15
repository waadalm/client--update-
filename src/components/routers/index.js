import React from "react";
import { Routes, Route } from "react-router-dom";
import Login2 from "../auth/Login2";
import Register3 from "../auth/Register3";
import Dashboard from "../dashboard/Dashboard";
import Landing from "../layouts/Landing";
import { CreatProfile } from "../profile-forms/CreateProfile";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login2></Login2>}></Route>
        <Route path="/register" element={<Register3></Register3>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/create-profile"
          element={<CreatProfile></CreatProfile>}
        ></Route>
      </Routes>
    </>
  );
};

export default Routers;
