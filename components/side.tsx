"use client";
import UserContext from "@/context/userInfo";
import React, { useContext } from "react";
import Login from "./login";
import Profile from "./profile";

function Side() {
  const context = useContext(UserContext);
  return <div>{context?.state.user.isLoggedIn ? <Profile /> : <Login />}</div>;
}

export default Side;
