import * as React from "react";
import { useState } from "react";
import { TypographyDropdownProps } from "./types";
import Image from "next/image";
import { useFont } from "./ThemeContent";

const fontOptions = [
  { label: "Sans Serif", fontFamily: "font-sans" },
  { label: "Serif", fontFamily: "font-serif" },
  { label: "Mono", fontFamily: "font-mono" },
];

const TypographyDropdown: React.FC<TypographyDropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { fontFamily, setFontFamily } = useFont();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFontChange = (fontOption: (typeof fontOptions)[0]) => {
    setIsOpen(false);
    setFontFamily(fontOption.fontFamily);
    console.log(fontFamily);
  };

  return (
    <div className="relative flex flex-col text-lg font-bold leading-none rounded-none max-w-[183px] text-zinc-800">
      <div
        className="flex gap-4 self-end cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyPress={(e) => {
          if (e.key === "Enter") toggleDropdown();
        }}
      >
        <div className={`${fontFamily} dark:text-custom-light`}>
          {
            fontOptions.find((option) => option.fontFamily === fontFamily)
              ?.label
          }
        </div>
        <Image
          src="/icon-arrow-down.svg"
          width={16}
          height={16}
          alt="chevron-down"
        />
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white dark:bg-custom-darker dark:shadow-[0px_5px_20px_2px_rgba(0.5,0.5,0.5,0.5)]  dark:shadow-primary light:shadow-grey rounded-2xl shadow-lg z-10">
          <div className="flex flex-col items-start p-6 whitespace-nowrap">
            {fontOptions.map((fontOption, index) => (
              <div
                key={fontOption.label}
                className={`cursor-pointer  ${index > 0 ? "mt-4" : ""} ${
                  fontOption.label ===
                  fontOptions.find((option) => option.fontFamily === fontFamily)
                    ?.label
                    ? "text-purple-600"
                    : "dark:text-white"
                } ${fontOption.fontFamily} text-lg mx-2`}
                onClick={() => handleFontChange(fontOption)}
              >
                {fontOption.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypographyDropdown;
