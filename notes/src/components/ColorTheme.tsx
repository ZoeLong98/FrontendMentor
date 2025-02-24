"use client"; // Only run on the client-side
import React from "react";
import IconComponent from "./IconComponent";
import Sun from "@/assets/svgs/icon-sun.svg";
import Moon from "@/assets/svgs/icon-moon.svg";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ColorTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const handleSelect = (theme: string) => {
    themeContext.setTheme(theme);
  };

  return (
    <section className="flex flex-col gap-6 col-start-4 col-end-13 p-6">
      <div>
        <h3>Color Theme</h3>
        <h5>Choose your color theme:</h5>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className={`flex flex-row gap-4 p-4 max-w-[528px] border rounded-lg items-center ${
            themeContext.theme === "light" ? "bg-neutral-100" : ""
          }`}
        >
          <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center">
            <IconComponent Icon={Sun} size="24px" />
          </div>
          <div className="flex-grow">
            <h4>Light Mode</h4>
            <h6>Pick a clean and classic light theme</h6>
          </div>
          <div
            className={`w-4 h-4 rounded-full border cursor-pointer ${
              themeContext.theme === "light" ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleSelect("light")}
          ></div>
        </div>
        <div
          className={`flex flex-row gap-4 p-4 max-w-[528px] border rounded-lg items-center ${
            themeContext.theme === "dark" ? "bg-neutral-700" : ""
          }`}
        >
          <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center">
            <IconComponent Icon={Moon} size="24px" />
          </div>
          <div className="flex-grow">
            <h4>Dark Mode</h4>
            <h6>Select a sleek and modern dark theme</h6>
          </div>
          <div
            className={`w-4 h-4 rounded-full border cursor-pointer ${
              themeContext.theme === "dark" ? "bg-blue-500" : "bg-gray-300 "
            }`}
            onClick={() => handleSelect("dark")}
          ></div>
        </div>
        {/* Add more themes here */}
      </div>
    </section>
  );
}
