"use client";
import OverviewItem from "@/components/OverviewItem";
import React, { useEffect, useState } from "react";
import { fetchEarphonesData } from "@/api";
import ThreeCategory from "@/components/ThreeCategory";
import End from "@/components/End";

export default function earphoness() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const earphonessData = await fetchEarphonesData();
      setData(earphonessData);
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center mt-32 max-w-componentMax px-6 md:mx-auto">
      {data &&
        data
          .sort((a: any, b: any) => (b.new === a.new ? 0 : b.new ? 1 : -1))
          .map((earphones: any, index: number) => (
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
