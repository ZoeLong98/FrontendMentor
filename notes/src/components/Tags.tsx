import Tag from "@/components/List";
import { use } from "react";
import tagIcon from "@/assets/svgs/icon-tag.svg";

export default function Tags({
  tags,
  setFilter,
  setCurrentrange,
}: {
  tags: Promise<string[]>;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentrange: React.Dispatch<React.SetStateAction<string>>;
}) {
  const alltags = use(tags);

  // 过滤掉空标签
  const filteredTags = alltags.filter((tag) => tag.trim() !== "");

  return (
    <>
      {filteredTags.map((tag) => (
        <Tag
          key={tag}
          icon={tagIcon}
          tagName={tag}
          setFilter={setFilter}
          setCurrentRange={setCurrentrange}
        />
      ))}
    </>
  );
}
