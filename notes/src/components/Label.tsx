import IconComponent from "@/components/IconComponent";
import { useState, useEffect } from "react";
export default function Label({
  label,
  content,
  icon,
  placeholder,
}: {
  label: string;
  content: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
}) {
  const [input, setInput] = useState(content);
  useEffect(() => {
    setInput(content);
  }, [content]);
  return (
    <section className="flex flex-row gap-2  items-center mb-2">
      <label
        htmlFor="label"
        className="flex flex-row gap-[0.375rem] w-fit items-center"
      >
        <div className="h-7 w-7">
          <IconComponent Icon={icon} size="100%" />
        </div>
        <h5>{label}</h5>
      </label>
      <input
        type="text"
        className="!p-0 !w-full !text-[14px] !border-none dark:bg-neutral_800 overflow-x-scroll"
        name={label}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      ></input>
    </section>
  );
}
