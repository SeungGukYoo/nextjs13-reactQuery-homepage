"use client";

import ItemList from "@/app/items/page";
import React from "react";
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
