import NavIcon from "@/components/navIcon";
import home from "@/assets/svgs/icon-home.svg";
import archive from "@/assets/svgs/icon-archive.svg";
import tag from "@/assets/svgs/icon-tag.svg";
import search from "@/assets/svgs/icon-search.svg";
import setting from "@/assets/svgs/icon-settings.svg";

export default function NavBar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <nav className="lg:hidden w-full flex justify-between py-3 fixed bottom-0 border-t border-gray-200 bg-white dark:bg-neutral_800 z-20">
      <div
        onClick={() => setActiveSection("home")}
        className={`cursor-pointer hover:text-blue-500${
          activeSection === "home" ? "bg-blue-50  text-blue-500" : ""
        }`}
      >
        <NavIcon icon={home} text="Home" />
      </div>

      <div className="vertical" />
      <div
        onClick={() => setActiveSection("search")}
        className={`cursor-pointer hover:text-blue-500 ${
          activeSection === "search" ? " text-blue-500" : ""
        }`}
      >
        <NavIcon icon={search} text="Search" />
      </div>

      <div className="vertical" />
      <div
        onClick={() => {
          setActiveSection("archive");
        }}
        className={`cursor-pointer hover:text-blue-500${
          activeSection === "archive" ? "bg-blue-50 text-blue-500" : ""
        }`}
      >
        <NavIcon icon={archive} text="Archive" />
      </div>

      <div className="vertical" />
      <div
        onClick={() => setActiveSection("tags")}
        className={`cursor-pointer hover:text-blue-500${
          activeSection === "tags" ? "bg-blue-50 text-blue-500" : ""
        }`}
      >
        <NavIcon icon={tag} text="Tags" />
      </div>

      <div className="vertical" />
      <div
        onClick={() => setActiveSection("settings")}
        className={`cursor-pointer hover:text-blue-500${
          activeSection === "settings" ? "bg-blue-50 text-blue-500" : ""
        }`}
      >
        <NavIcon icon={setting} text="Settings" />
      </div>
    </nav>
  );
}
