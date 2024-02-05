import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";

interface Props {
  name: string;
  color: string;
  flagUrl?: string;
  icon?: IconProp;
}

enum Colors {
  info = "bg-blue-200 hover:bg-blue-300 text-blue-600",
  success = "bg-green-200 hover:bg-green-300 text-green-600",
  warning = "bg-yellow-200 hover:bg-yellow-300 text-yellow-600",
  danger = " bg-red-200 hover:bg-red-300 text-red-600",
}

function Skill(props: Props) {
  const { name, color, flagUrl, icon } = props;
  return (
    <span
      className={
        "inline-flex items-center rounded-full text-sm font-semibold m-2 px-3 py-1 " +
        Colors[color as keyof typeof Colors]
      }>
      {icon && <FontAwesomeIcon icon={icon} />}
      {flagUrl && <img src={"https://www.freelancer.com/" + flagUrl} />}
      <span className="ml-1">{name}</span>
    </span>
  );
}

export default Skill;
