import React from "react";
import templeImg from "../assets/images/sensoji.png";
import img from "../assets/images/img.png";
import kimono from "../assets/images/kimono.png";


const ActivityCard = () => {
  return (
    <div className="flex flex-col w-full gap-5 border-[1px] border-[#D3F462] rounded-xl p-2">
      <div className="flex w-full m-h-[165px] bg-[#4D4D4D] rounded-xl overflow-hidden  ">

        <div className="w-1/2  ">
          <img
            src={templeImg}
            alt="Senso-ji Temple"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="m-2 w-1/2 text-white  flex flex-col justify-between">
          <h3 className=" font-Mont text-lg  leading-snug mb-1">
            Senso-ji Temple &
            Nakamise Shopping Street Senso-ji
          </h3>

          <div>
            <p className="text-[#F5F5F5] text-sm">
              <span className="text-white font-medium">Timing:</span> 8:15 am
              Morning
            </p>
            <p>
              <span className="text-white font-medium">Duration:</span> 3 hours
            </p>
            <p>
              <span className="text-white font-medium">Pick up:</span> From
              Hotel
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full m-h-[165px] bg-[#4D4D4D] rounded-xl overflow-hidden  ">

        <div className="w-1/2  ">
          <img
            src={img}
            alt="Senso-ji Temple"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="m-2 w-1/2 text-white  flex flex-col justify-between">
          <h3 className=" font-Mont text-lg  leading-snug mb-1">
            Tokyo Sky Tree
          </h3>

          <div>
            <p className="text-[#F5F5F5] text-sm">
              <span className="text-white font-medium">Timing:</span> 8:15 am
              Morning
            </p>
            <p>
              <span className="text-white font-medium">Duration:</span> 3 hours
            </p>
            <p>
              <span className="text-white font-medium">Pick up:</span> From
              Hotel
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full m-h-[165px] bg-[#4D4D4D] rounded-xl overflow-hidden  ">

        <div className="w-1/2  ">
          <img
            src={kimono}
            alt="Senso-ji Temple"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="m-2 w-1/2 text-white  flex flex-col justify-between">
          <h3 className=" font-Mont text-lg  leading-snug mb-1">
            Kimono Wearing
          </h3>

          <div>
            <p className="text-[#F5F5F5] text-sm">
              <span className="text-white font-medium">Timing:</span> 8:15 am
              Morning
            </p>
            <p>
              <span className="text-white font-medium">Duration:</span> 3 hours
            </p>
            <p>
              <span className="text-white font-medium">Pick up:</span> From
              Hotel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
