import React, { useState } from "react";
import IconComponent from "./IconComponent";
import Search from "@/assets/svgs/icon-search.svg";

export default function SearchBar({
  setCurrentRange,
  setIsSetting,
}: {
  setCurrentRange: React.Dispatch<React.SetStateAction<string>>;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setNotes(searchNotes({ searchWord: searchTerm, userid }));
    setCurrentRange(searchTerm);
    setIsSetting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-row border border-gray-300 rounded-md items-center px-4 py-1 dark:bg-neutral_600"
    >
      <div className="w-6 h-6 mr-2">
        <IconComponent Icon={Search} />
      </div>
      <input
        className="border-none w-full h-full dark:bg-neutral_600"
        type="text"
        placeholder="Search by title, content, or tags…"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}
