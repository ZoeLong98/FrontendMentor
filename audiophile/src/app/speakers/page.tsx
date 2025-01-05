"use client";
import OverviewItem from "@/components/OverviewItem";
import React, { useEffect, useState } from "react";
import { fetchSpeakersData } from "@/api";
import ThreeCategory from "@/components/ThreeCategory";
import End from "@/components/End";
import { Product } from "@/types";

export default function Speakers() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      const speakersData = await fetchSpeakersData();
      setData(speakersData);
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center mt-32 max-w-componentMax px-6 md:mx-auto">
      <div className="bg-secondary  text-white w-screen mt-[-32px] h-[90px] sm:h-[132px] flex items-center justify-center text-[24px] sm:text-[32px] mb-8">
        SPEAKERS
      </div>
      {data &&
        data
          .sort((a: Product, b: Product) =>
            b.new === a.new ? 0 : b.new ? 1 : -1
          )
          .map((speaker: Product, index: number) => (
            <OverviewItem
              key={index}
              id={speaker.id}
              slug={speaker.slug}
              order={index % 2 === 0 ? "left" : "right"}
              picture={speaker.categoryImage}
              title={speaker.name}
              description={speaker.description}
              new={speaker.new}
            />
          ))}
      <div className="w-full mt-24">
        <ThreeCategory />
      </div>

      <End />
    </div>
  );
}
