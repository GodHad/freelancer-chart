import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import axios from "axios";
import { AddBid } from "../../store/reducers/bidsReducer/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Skill {
  value: string;
  label: string;
}

interface Props {
  onCloseBtnClick: () => void;
  create: boolean;
}

export default function BidForm({ create, onCloseBtnClick }: Props) {
  const skills = useSelector((state: RootState) => state.skillReducer);
  console.log(skills)
  const [selectedSkills, setSelectedSkills] = useState<Array<Skill>>([]);
  const [bidContent, setBidContent] = useState<string>("");

  const handleCreate = () => {
    AddBid({
      _id: '1',
      content: bidContent.replace(/\n/g, "\\n"),
      skillSets: selectedSkills.map((skill) => ({
        _id: skill.value,
        name: skill.label,
      })),
    });
  };

  return (
    <>
      <div className="fixed flex flex-col min-w-0 break-words w-full md:w-1/3 mb-6 shadow-sm shadow-yellow-200 rounded-lg bg-gray-800 border-0 md:top-20 right-2 top-96">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Write bid here.
            </h6>
            {create && (
              <button
                className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleCreate}>
                Create Sample
              </button>
            )}
            <button
              type="button"
              className="cursor-pointer opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              onClick={onCloseBtnClick}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        {create && (
          <div className="container mx-auto flex justify-center items-center">
            <Select
              isMulti
              value={selectedSkills}
              name="colors"
              options={skills}
              className="w-96 bg-gray-800 text-black"
              onChange={(tempskills) =>
                setSelectedSkills(tempskills as Array<Skill>)
              }
            />
          </div>
        )}
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"></label>
                  <textarea
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-lg"
                    value={bidContent}
                    placeholder="Write bid here."
                    rows={20}
                    onChange={(e) => setBidContent(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
