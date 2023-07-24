import type { IData } from "@/types";

export async function getItems(): Promise<IData[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=1", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
