import React from "react";
import Skill from "../common/Tag";
import { Bid } from "../../store/reducers/bidsReducer/Bid";

function BidItem({ bid }: { bid: Bid }) {
  return (
    <div className="rounded md:w-2/3 w-full p-4 shadow-sm shadow-white">
      <div className="p-4 pl-0">
        <div className="text-black text-lg md:block mt-4">
          {bid.skillSets.map((skill) => (
            <Skill name={skill.name} key={skill._id} color="success" />
          ))}
        </div>
        <p className="text-white-700 mt-2">
          {bid.content.split("\\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

export default BidItem;
