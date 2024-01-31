import React from "react";
import Skill from "./Skill";

function BidItem() {
  return (
    <div className="rounded w-[98%] md:w-1/2 lg:w-1/3 p-4">
      <div className="p-4 pl-0">
        <div className="text-black text-lg md:block mt-4">
          <Skill name={"Javascript"} color="success" />
          <Skill name={"PHP"} color="success" />
        </div>
        <h2 className="font-bold text-2xl text-gray-800">
          Put all speaking her delicate recurred possible.
        </h2>
        <p className="text-white-700 mt-2">
          Set indulgence inquietude discretion insensible bed why announcing.
          Middleton fat two satisfied additions. So continued he or commanded
          household smallness delivered. Door poor on do walk in half. Roof his
          head the what.
        </p>

        <a
          href="#"
          className="inline-block py-2 rounded text-white-900 mt-2 ml-auto">
          {" "}
          Read more{" "}
        </a>
      </div>
    </div>
  );
}

export default BidItem;
