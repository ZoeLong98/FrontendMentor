"use client";
import OverviewItem from "@/components/OverviewItem";
import React, { useEffect, useState } from "react";
import { fetchEarphonesData } from "@/api";
import ThreeCategory from "@/components/ThreeCategory";
import End from "@/components/End";
import { Product } from "@/types";

export default function Earphones() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      const earphonessData = await fetchEarphonesData();
      setData(earphonessData);
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center mt-32 max-w-componentMax px-6 md:mx-auto">
      <div className="bg-secondary  text-white w-screen mt-[-2rem] h-[90px] sm:h-[12rem flex items-center justify-center text-[1.5rem] sm:text-[2rem] mb-8">
        EARPHONES
      </div>
      {data &&
        data
          .sort((a: Product, b: Product) =>
            b.new === a.new ? 0 : b.new ? 1 : -1
          )
          .map((earphones: Product, index: number) => (
            <OverviewItem
              key={index}
              id={earphones.id}
              slug={earphones.slug}
              order={index % 2 === 0 ? "left" : "right"}
              picture={earphones.categoryImage}
              title={earphones.name}
              description={earphones.description}
              new={earphones.new}
            />
          ))}
      <div className="w-full mt-24">
        <ThreeCategory />
      </div>

      <End />
    </div>
  );
}
