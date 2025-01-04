"use client";
import OverviewItem from "@/components/OverviewItem";
import React, { useEffect, useState } from "react";
import { fetchHeadphonesData } from "@/api";
import ThreeCategory from "@/components/ThreeCategory";
import End from "@/components/End";

export default function Headphones() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const headphonesData = await fetchHeadphonesData();
      setData(headphonesData);
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center mt-32 max-w-componentMax px-6 md:mx-auto">
      {data &&
        data
          .sort((a: any, b: any) => (b.new === a.new ? 0 : b.new ? 1 : -1))
          .map((headphone: any, index: number) => (
            <OverviewItem
              key={index}
              id={headphone.id}
              slug={headphone.slug}
              order={index % 2 === 0 ? "left" : "right"}
              picture={headphone.categoryImage}
              title={headphone.name}
              description={headphone.description}
              new={headphone.new}
            />
          ))}
      <div className="w-full mt-24">
        <ThreeCategory />
      </div>

      <End />
    </div>
  );
}
