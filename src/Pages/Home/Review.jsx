import React from "react";

export default function Review() {
  return (
    <div className="w-full flex justify-center  h-80 ">
      <div class="card card-side  bg-base-100 h-48  w-4/5 shadow-md  my-auto">
        <div className="relative flex justify-center align-middle w-96  ">
          <div className="h-28 w-28 rounded-full overflow-hidden">
            <img
              className="mx-auto "
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="Movie"
            />
          </div>
          <div className="bg-primary absolute w-full h-10 bottom-0 text-center p-2 font-bold">
            Kishor
          </div>
        </div>
        <div class="card-body flex flex-row relative ">
          <div className="w-10 text-7xl">"</div>
          <div className=" text-lg ">
            great manufacturer with professional that create amazing tool. they
            meet my requirement with given time.
          </div>
          <div className="w-10 text-7xl">"</div>
        </div>
      </div>
    </div>
  );
}
