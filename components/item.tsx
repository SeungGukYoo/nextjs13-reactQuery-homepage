import { IData } from "@/app/items/page";
import Image from "next/image";
import React from "react";

type Props = {
  data: IData;
};
function Item({ data }: Props) {
  return (
    <div className="w-[200px] h-[250px] flex flex-col justify-center items-center relative group bg-white p-2 m-2">
      <div className="relative w-[150px] h-[190px] mb-2">
        <Image src={data.image} alt="image" quality={50} fill={true} className="object-contain	group-hover:blur-sm" />
      </div>

      <h1 className="text-center group-hover:blur-sm text-black">{data.title}</h1>
      <div className="absolute w-full h-full opacity-0  group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-center flex flex-col items-center justify-center px-1">
        <p>{data.title}</p>
        <p className="">{data.rating.rate}/5</p>
        <p className="">$ {data.price}</p>
      </div>
    </div>
  );
}

export default Item;
