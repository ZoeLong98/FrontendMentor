import { FC } from "react";

interface IconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number | string;
}

const IconComponent: FC<IconProps> = ({ Icon, size = "100%" }) => (
  <Icon width={size} height={size} />
);

export default IconComponent;
