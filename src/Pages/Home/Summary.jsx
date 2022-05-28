import {
  faFlag,
  faHandshake,
  faPeopleRoof,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Summary() {
  return (
    <div className="flex py-24 ">
      <div className="w-1/4 h-72 bg-primary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl pb-5" icon={faFlag} />
        <div className="text-4xl text-center font-bold ">
          100+ <br /> Country
        </div>
      </div>
      <div className="w-1/4 h-72 bg-secondary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl pb-5" icon={faHandshake} />
        <div className="text-4xl text-center font-bold ">
          30+ <br />
          Years of Trust
        </div>
      </div>
      <div className="w-1/4 h-72 bg-primary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl pb-5" icon={faPeopleRoof} />
        <div className="text-4xl text-center font-bold ">
          347+ <br /> Happy Clients
        </div>
      </div>
      <div className="w-1/4 h-72 bg-secondary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl pb-5" icon={faRectangleList} />
        <div className="text-4xl text-center font-bold ">
          500+ <br /> Complete project
        </div>
      </div>
    </div>
  );
}
