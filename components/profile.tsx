"use client";
import UserContext from "@/context/userInfo";
import React, { useContext } from "react";

function Profile() {
  const context = useContext(UserContext);
  const onLogout = () => {
    context?.dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div>
      this is Profile
      <div>
        <p>{context?.state.user.name}</p>
        <button onClick={onLogout}>Logout</button>
        <p>{context?.state.cart.count}</p>
      </div>
    </div>
  );
}

export default Profile;
