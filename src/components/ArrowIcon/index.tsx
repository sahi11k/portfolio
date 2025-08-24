import React, { SVGProps } from "react";
import ArrowUpright from "public/icons/arrow-up-right.svg";

type ArrowDirection =
  | "up-right"
  | "up"
  | "right"
  | "down-right"
  | "down"
  | "left"
  | "up-left"
  | "down-left";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  direction?: ArrowDirection;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  direction = "up-right",
  className,
  ...rest
}) => {
  const rotationClassMap: Record<ArrowDirection, string> = {
    "up-right": "rotate-0",
    up: "-rotate-45",
    right: "rotate-45",
    "down-right": "rotate-90",
    down: "rotate-[135deg]",
    left: "rotate-[-135deg]",
    "up-left": "-rotate-90",
    "down-left": "rotate-180",
  };

  const rotationClass = rotationClassMap[direction] ?? "rotate-0";
  const mergedClassName = `${rotationClass} [stroke-width:1.2] ${
    className ?? ""
  }`.trim();

  return <ArrowUpright {...rest} className={mergedClassName} />;
};

export default ArrowIcon;
