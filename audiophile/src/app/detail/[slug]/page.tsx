"use client";
import DetailPage from "@/components/DetailPage";
import { DetailPageProps } from "@/types";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchDataBySlug } from "@/api";
import ThreeCategory from "@/components/ThreeCategory";
import End from "@/components/End";

export default function Detail() {
  const { slug } = useParams();
  const [item, setItem] = useState<DetailPageProps["item"] | null>(null);

  useEffect(() => {
    if (slug) {
      async function getData() {
        const data = await fetchDataBySlug(slug as string);
        console.log(data);
        setItem(data[0]);
      }
      getData();
    }
  }, [slug]);

  return (
    <div className="flex flex-col items-center mt-24 max-w-componentMax px-6 md:mx-auto">
      {item && <DetailPage item={item} />}

      <div className="w-full mt-24">
        <ThreeCategory />
      </div>

      <End />
    </div>
  );
}
