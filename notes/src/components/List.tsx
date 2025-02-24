import Arrow from "@/assets/svgs/icon-chevron-right.svg";
import IconComponent from "@/components/IconComponent";

export default function Tag({
  icon,
  tagName,
  setFilter,
  setCurrentRange,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tagName: string;
  setCurrentRange: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const handleClick = () => {
    if (tagName === "All Notes" || tagName === "Archive Notes") {
      setFilter(null);
    } else {
      setFilter(tagName);
    }
    setCurrentRange(tagName);
  };
  return (
    <div
      className="tag flex flex-row gap-2 px-3 py-[10px] justify-between rounded-lg items-center "
      onClick={handleClick}
    >
      <div className="w-6 h-6">
        <IconComponent Icon={icon} size="100%" />
      </div>

      <p className="flex-1">{tagName}</p>
      <div className="w-4 h-4">
        <IconComponent Icon={Arrow} />
      </div>
    </div>
  );
}
