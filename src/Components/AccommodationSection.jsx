import React from "react";
import accImg from "../assets/images/shinagawa.png";

const AccommodationSection = () => {
  return (
    <div className="font-Mont  pb-6 text-white ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold ">Accomodation</h2>
        <a href="#" className="text-sm text-[#D1F462] underline">
          See all
        </a>
      </div>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {/* Card 1 */}
        <div className="min-w-[250px] h-[239x] bg-[#4D4D4D] rounded-[20px] shadow-md overflow-hidden">
          <img
            src={accImg}
            alt="Shinagawa Prince Hotel"
            className="h-40 w-full object-cover rounded-t-xl"
          />
          <div className="p-3">
            <h3 className="font-semibold font-Mont text-[18px] mb-1">
              Shinagawa Prince Hotel
            </h3>
            <p className="text-sm">
              <span className="font-semibold font-Montserrat">Check in:</span>{" "}
              26.01.2025, 11:15 pm
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold font-Montserrat  ">
                Check out:
              </span>{" "}
              28.01.2025, 11:15 am
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm font-Montserrat">2 Nights</p>
              <span className="flex items-center gap-1 text-xs text-[#90EB61] px-2 py-1 rounded-full font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-[#90EB61] "
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <path
                    d="M9 12l2 2l4 -4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Confirmed
              </span>
            </div>
          </div>
        </div>


        <div className="min-w-[250px] h-[239x] bg-[#4D4D4D] rounded-[20px] shadow-md overflow-hidden">
          <img
            src={accImg}
            alt="Shinagawa Prince Hotel"
            className="h-40 w-full object-cover rounded-t-xl"
          />
          <div className="p-3">
            <h3 className="font-semibold font-Mont text-[18px] mb-1">
            Mercure Tokyo Hotel
            </h3>
            <p className="text-sm">
              <span className="font-semibold font-Montserrat">Check in:</span>{" "}
              28.01.2025, 6:00 pm
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold font-Montserrat  ">
                Check out:
              </span>{" "}
              30.01.2025, 11:15 am
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm font-Montserrat">2 Nights</p>
              <span className="flex items-center gap-1 text-xs text-[#FF6525] px-2 py-1 rounded-full font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-spin -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSection;
