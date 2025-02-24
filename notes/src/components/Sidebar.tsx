import "../styles/Sidebar.css";
import IconComponent from "@/components/IconComponent";
import logo from "@/assets/svgs/logo.svg";
import home from "@/assets/svgs/icon-home.svg";
import archive from "@/assets/svgs/icon-archive.svg";
import Tag from "./List";
import Tags from "@/components/Tags";

export default function Sidebar({
  tags,
  setFilter,
  setCurrentrange,
  setIsSetting,
}: {
  tags: Promise<string[]>;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentrange: React.Dispatch<React.SetStateAction<string>>;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section className="flex flex-row  items-start border-r border-gray-200 h-screen">
      <div
        className="sidebar-container gap-4"
        onClick={() => {
          setIsSetting(false);
        }}
      >
        <div className="h-7 my-3">
          <IconComponent Icon={logo} size="100%" />
        </div>
        <div>
          <Tag
            icon={home}
            tagName="All Notes"
            setFilter={setFilter}
            setCurrentRange={setCurrentrange}
          />
          <Tag
            icon={archive}
            tagName="Archive Notes"
            setFilter={setFilter}
            setCurrentRange={setCurrentrange}
          />
          <hr />
          <div className="gap-1">
            <h4 className="text-neutral_500 px-2">Tags</h4>
            <Tags
              tags={tags}
              setFilter={setFilter}
              setCurrentrange={setCurrentrange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
