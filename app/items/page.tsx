import Item from "@/components/item";
import React from "react";
export interface IData {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

async function getItems(): Promise<IData[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=1");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

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
