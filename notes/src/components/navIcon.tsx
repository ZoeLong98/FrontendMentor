import IconComponent from "./IconComponent";

export default function NavIcon({
  icon,
  text,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center w-20 py-1">
      <div className="w-6 h-6">
        <IconComponent Icon={icon} />
      </div>
      <span className="text-xs">{text}</span>
    </div>
  );
}
