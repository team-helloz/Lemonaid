import { iconName, IconSet } from "./constants"

interface PartIconProps {
  icon: iconName;
  h: number;
  w: number;
  color?: string;
}

const PartIcon = ({ icon, h, w, color }: PartIconProps) => {
  return (
    <svg
      height={h}
      width={w}
      viewBox={IconSet[icon].viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={IconSet[icon].path}
      />
    </svg>
  );
};

export default PartIcon;
