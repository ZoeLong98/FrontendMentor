"use client";
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import SliderButtonWithIcon from "@/components/SlideButton";
import Word from "@/components/word";
import Image from "next/image";
import FontSelector from "@/components/TypographyDropdown";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("hello");
  const word = "hello";
  return (
    <div className="flex flex-col justify-center w-full py-6 dark:bg-custom-darkest">
      <div className="p-3 w-full flex flex-row justify-between max-w-[736px] mx-auto">
        <Image src="/logo.svg" width={32} height={36} alt="logo" />
        <div className="flex flex-row gap-5 items-center">
          <FontSelector />
          <div className="w-[1px] h-6 bg-gray-300"></div>
          <SliderButtonWithIcon />
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <Word word={searchQuery} />
    </div>
  );
}
