import IconComponent from "./IconComponent";
import Sun from "@/assets/svgs/icon-sun.svg";
import Font from "@/assets/svgs/icon-font.svg";
import Logout from "@/assets/svgs/icon-logout.svg";
import { logout } from "@/actions/auth-actions";

export default function Settingbar({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <section className="flex flex-col gap-2 pr-4 py-5 col-start-1 col-end-4 h-full">
      <div
        className="flex flex-row items-center gap-2 p-2 cursor-pointer"
        onClick={() => setMode("color")}
      >
        <div className="w-6 h-6">
          <IconComponent Icon={Sun} />
        </div>
        <h4>Color Theme</h4>
      </div>
      <div
        className="flex flex-row items-center gap-2 p-2 cursor-pointer"
        onClick={() => setMode("font")}
      >
        <div className="w-6 h-6">
          <IconComponent Icon={Font} />
        </div>
        <h4>Font Theme</h4>
      </div>
      <div
        className="flex flex-row items-center gap-2 p-2 cursor-pointer"
        onClick={logout}
      >
        <div className="w-6 h-6">
          <IconComponent Icon={Logout} />
        </div>
        <h4>Logout</h4>
      </div>
    </section>
  );
}
