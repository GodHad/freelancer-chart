import React from "react";
import Skill from "./Skill";

function MainBlog() {
  return (
    <div className="mb-4 lg:mb-0 p-4 w-full md:w-2/4 relative rounded block border">
      <div className="text-white text-lg hidden md:block mt-4">
        <Skill name={"Javascript"} color="success" />
        <Skill name={"PHP"} color="success" />
      </div>
      <h1 className="text-white-100 text-4xl font-bold mt-2 mb-2 leading-tight">
        Ignorant branched humanity led now marianne too.
      </h1>
      <p className="text-white-100 mb-4">
        Necessary ye contented newspaper zealously breakfast he prevailed.
        Melancholy middletons yet understood decisively boy law she. Answer him
        easily are its barton little. Oh no though mother be things simple
        itself. Oh be me, sure wise sons, no. Piqued ye of am spirit regret.
        Stimulated discretion impossible admiration in particular conviction up.
      </p>
      <div className="text-black text-lg hidden md:block mt-4">
        <Skill name={"name"} color="info" />
        <Skill name={"country"} color="info" />
        <Skill name={"31 Jan, 2024"} color="info" />
      </div>
      <button
        className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
            Bid on this project
      </button>
    </div>
  );
}

export default MainBlog;
