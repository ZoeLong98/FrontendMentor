"use client";
import React, { useState } from "react";
import { useTheme } from "@/components/ThemeContent";

interface SliderButtonWithIconProps {
  onToggle?: (isOn: boolean) => void; // 可选回调函数，触发切换时调用
}

const SliderButtonWithIcon: React.FC<SliderButtonWithIconProps> = ({
  onToggle,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    toggleTheme();
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <div
        className={`relative w-9 h-5 flex items-center rounded-full cursor-pointer 
          ${theme === "dark" ? "bg-primary" : "bg-custom-mediumDark"}`}
        onClick={handleToggle}
      >
        {/* 滑块 */}
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
        ></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`w-6 h-6 transition-colors duration-300 
        ${theme === "dark" ? "text-primary" : "fill-custom-mediumDark"}`}
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
};

export default SliderButtonWithIcon;
