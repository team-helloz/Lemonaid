import { iconName, IconSet } from "./constants"

interface PartIconProps {
  icon: iconName;
  size: number;
  color?: string;
}

const PartIcon = ({ icon, size, color }: PartIconProps) => {
  return (
    <svg
      height={size}
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
