import React from "react";

interface Props {
  name: string;
  color: string;
}

enum Colors {
  info = "bg-blue-200 hover:bg-blue-300 text-blue-600",
  success = "bg-green-200 hover:bg-green-300 text-green-600",
}

function Skill(props: Props) {
  const { name, color } = props;
  return (
    <span
      className={
        "inline-flex items-center rounded-full text-sm font-semibold m-2 px-3 py-1 " +
        Colors[color as keyof typeof Colors]
      }>
      <span className="ml-1">{name}</span>
    </span>
  );
}

export default Skill;
