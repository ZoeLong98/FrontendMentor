"use client"; // Only run on the client-side
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ColorTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const handleSelect = (theme: string) => {
    themeContext.setFont(theme);
    console.log(themeContext.font);
  };

  return (
    <section className="flex flex-col gap-6 col-start-4 col-end-13 p-6">
      <div>
        <h3>Font Theme</h3>
        <h5>Choose your font theme:</h5>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className={`flex flex-row gap-4 p-4 max-w-[528px] border rounded-lg items-center ${
            themeContext.font === "font-sans"
              ? "bg-neutral-100  dark:bg-neutral-700"
              : ""
          }`}
        >
          <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center">
            <p className="text-2x font-sans">Aa</p>
          </div>
          <div className="flex-grow">
            <h4>Sans-serif</h4>
            <h6>Clean and modern, easy to read.</h6>
          </div>
          <div
            className={`w-4 h-4 rounded-full border cursor-pointer ${
              themeContext.font === "font-sans" ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleSelect("font-sans")}
          ></div>
        </div>

        <div
          className={`flex flex-row gap-4 p-4 max-w-[528px] border rounded-lg items-center ${
            themeContext.font === "font-serif"
              ? "bg-neutral-100  dark:bg-neutral-700"
              : ""
          }`}
        >
          <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center">
            <p className="text-2x font-serif">Aa</p>
          </div>
          <div className="flex-grow">
            <h4>Serif</h4>
            <h6>Classic and elegant for a timeless feel.</h6>
          </div>
          <div
            className={`w-4 h-4 rounded-full border cursor-pointer ${
              themeContext.font === "font-serif"
                ? "bg-blue-500"
                : "bg-gray-300 "
            }`}
            onClick={() => handleSelect("font-serif")}
          ></div>
        </div>
        <div
          className={`flex flex-row gap-4 p-4 max-w-[528px] border rounded-lg items-center ${
            themeContext.font === "font-mono"
              ? "bg-neutral-100 dark:bg-neutral-700"
              : ""
          }`}
        >
          <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center">
            <p className="text-2x font-mono">Aa</p>
          </div>
          <div className="flex-grow">
            <h4>Monospace</h4>
            <h6>Code-like, great for a technical vibe.</h6>
          </div>
          <div
            className={`w-4 h-4 rounded-full border cursor-pointer ${
              themeContext.font === "font-mono" ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleSelect("font-mono")}
          ></div>
        </div>
      </div>
    </section>
  );
}
