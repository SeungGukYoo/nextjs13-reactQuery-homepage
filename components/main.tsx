"use client";
import ItemList from "@/app/items/page";
import UserContext from "@/context/userInfo";
import React, { useContext } from "react";

import Login from "./login";
import Profile from "./profile";
import Side from "./side";

function Main() {
  return (
    <main className="grid grid-cols-5">
      <section className="col-span-1">
        <Side />
      </section>
      <section className="col-span-4 mt-5">
        <ItemList />
      </section>
    </main>
  );
}
export default Main;
