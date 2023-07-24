import Item from "@/components/item";
import type { IData } from "@/types";
import React from "react";
import { getItems } from "./getItem";

async function ItemList() {
  const result: IData[] = await getItems();

  return (
    <div className="flex flex-wrap">
      {result.map((el) => (
        <Item data={el} key={el.id} />
      ))}
    </div>
  );
}

export default ItemList;
