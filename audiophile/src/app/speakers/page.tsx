"use client";
import OverviewItem from "@/components/OverviewItem";
import React, { useEffect, useState } from "react";
import { fetchSpeakersData } from "@/api";
import ThreeCategory from "@/components/ThreeCategory";
import End from "@/components/End";

export default function speakers() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const speakersData = await fetchSpeakersData();
      setData(speakersData);
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center mt-32 max-w-componentMax px-6 md:mx-auto">
      {data &&
        data
          .sort((a: any, b: any) => (b.new === a.new ? 0 : b.new ? 1 : -1))
          .map((speaker: any, index: number) => (
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
