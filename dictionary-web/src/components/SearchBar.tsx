"use client";
import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="flex overflow-hidden flex-row text-xl font-bold w-full max-w-[736px] max-h-16 rounded-2xl bg-custom-lighter dark:bg-custom-darker border border-transparent hover:border-primary ">
      <form
        className="flex flex-nowrap gap-5 px-6 py-5 w-full  max-md:px-5 max-md:max-w-full"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.(e.currentTarget.search.value);
        }}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          autoComplete="off"
          type="search"
          id="search"
          name="search"
          className="bg-transparent border-none outline-none w-full text-black dark:text-custom-lightest font-Inter_Bold"
          placeholder="Search for any word…"
          aria-label="Search for any word"
        />
        <button type="submit" aria-label="Submit search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db5654bd1f8d5ff5ac890654a88dda2860a6af12ab9a17fd8c24a9fdd88859ee?placeholderIfAbsent=true&apiKey=8b37e39a71bd4bd3b190d9d326dd5d75"
            alt=""
            className="object-contain shrink-0 my-auto w-4 aspect-square"
          />
        </button>
      </form>
    </div>
  );
};
