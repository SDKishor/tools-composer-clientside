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
    <div className="flex flex-col md:flex-row py-24 text-white ">
      <div className="md:w-1/4 h-72 bg-primary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl " icon={faFlag} />
        <div className="text-4xl text-center font-bold ">
          100+ <br /> <span className="text-3xl font-normal">Country</span>
        </div>
      </div>
      <div className="md:w-1/4 h-72 bg-secondary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl" icon={faHandshake} />
        <div className="text-4xl text-center font-bold ">
          30+ <br />
          <span className="text-3xl font-normal">Years of Trust</span>
        </div>
      </div>
      <div className="md:w-1/4 h-72 bg-primary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl " icon={faPeopleRoof} />
        <div className="text-4xl text-center font-bold pt-2 ">
          347+ <br />
          <span className="text-3xl font-normal">Happy Clients</span>
        </div>
      </div>
      <div className="md:w-1/4 h-72 bg-secondary flex flex-col justify-center items-center">
        <FontAwesomeIcon className="text-5xl " icon={faRectangleList} />
        <div className="text-4xl text-center font-bold ">
          500+ <br />
          <span className="text-3xl font-normal">Complete project</span>
        </div>
      </div>
    </div>
  );
}
