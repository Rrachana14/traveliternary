import React, { useEffect } from "react";
import HeaderName from "../Components/HeaderName";
import tokyoImg from "../assets/images/tokyo.png";
import planeImg from "../assets/images/plane.png";
import AccommodationSection from "../Components/AccommodationSection";
import ActivityCard from "../Components/ActivityCard";

const MainDashboard = () => {

  
  const dates = [
    { day: "MON", date: 27, month: "JAN", highlight: true },
    { day: "TUE", date: 28 },
    { day: "WED", date: 29 },
    { day: "THU", date: 30 },
    { day: "FRI", date: 31, disabled: true },
    { monthSwitch: "FEB" },
    { day: "SAT", date: 1 },
  ];

  const statusStyles = {
    Confirmed: "text-green-500 bg-green-100",
    Pending: "text-orange-500 bg-orange-100",
  };

  return (
    <div className="bg-[#16151E] p-4 min-h-screen justify-center items-center text-white">
      <HeaderName />
      <h3 className="font-mont text-lg my-1.5 ">Your Upcoming Trip</h3>
      <div className="max-w-lg w-full  space-y-8">
        {/* Upcoming Trip Card */}
        <div className=" rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={tokyoImg}
              alt="Tokyo"
              className="w-full h-[250px] object-cover transform  -scale-x-100 "
            />
            <div className="absolute bottom-0  w-full z-20">
              <div className="flex justify-around py-4 ">
                <div className="text-left">
                  <p className="font-semibold text-[14px]">8 Days</p>
                  <p className="text-[10px]">Duration</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[14px]">4 (2M, 2F)</p>
                  <p className="text-[10px]">Group Size</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[14px]">14</p>
                  <p className="text-[10px]">Activities</p>
                </div>
              </div>
            </div>
            <div className="absolute top-3 left-6 text-white">
              <h2 className="text-4xl  font-mont font-bold">TOKYO</h2>
              <p className="text-md">27.01.2025 - 02.02.2025</p>
            </div>
            <div className="w-full h-[168px] absolute top-[60%] bg-black/10 backdrop-blur-[1px] rounded-xl shadow-lg z-10"></div>
          </div>
        </div>

        {/* Flight Details */}
        <div className="bg-[#3643FB] p-4  rounded-2xl w-full text-white relative overflow-hidden shadow-md">
          <div className="absolute m-2 p-4  inset-0 bg-[#313DDF] z-0 rounded-2xl" />
          <div className="relative z-10 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-start flex-wrap">
              <div>
                <h3 className=" font-Mont text-white text-xl sm:text-base md:text-[16px]">
                  Flight Details
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  26.01.2025, 10:50 am
                </p>
              </div>
              <a
                href="#"
                className="text-xs sm:text-sm text-[#D1F462] font-semibold hover:underline mt-2 sm:mt-0"
              >
                See all
              </a>
            </div>

            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
              <div>
                <p className="text-lg sm:text-xl font-bold">DEL</p>
                <p className="text-xs text-white/70">Delhi, India</p>
              </div>
              <span className="text-white text-xl">→</span>
              <div>
                <p className="text-lg sm:text-xl font-bold">NRT</p>
                <p className="text-xs text-white/70">Narita, Tokyo</p>
              </div>
            </div>
          </div>
          
          <img
            src={planeImg}
            alt="Plane"
            className="absolute w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto bottom-[-60px] sm:bottom-[-90px] right-[-100px] sm:right-[-130px] transform rotate-[240deg]"
          />
        </div>

        {/* accomodation */}
        <AccommodationSection />

        {/* activities */}
        <div className="flex justify-between items-center mb-4 font-Mont">
          <h2 className="text-xl font-semibold">Activities</h2>
          <a href="#" className="text-sm text-[#D1F462] underline">
            See all
          </a>
        </div>
        <div className="bg-[#2C2C2E] rounded-xl p-4 text-white w-full max-w-xl">
          <div className="flex items-center gap-4 ">
            <span className="bg-[#D3F462] text-black px-3 py-1 rounded-full text-sm font-semibold">
              Day Plan
            </span>
            <span className="border border-[#D3F462] text-[#D3F462] px-3 py-1 rounded-full text-sm font-semibold">
              14 Activities
            </span>
          </div>

          <div className="overflow-x-auto whitespace-nowrap px-1 py-2 scrollbar-hide">
            <div className="inline-flex space-x-2">
              {dates.map((item, index) => {
                if (item.monthSwitch) {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center w-10 h-[72px] rounded-lg bg-[#555] text-sm text-gray-300 shrink-0"
                    >
                      {item.monthSwitch}
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className={`flex flex-col  w-14 rounded-lg py-2 shrink-0 relative overflow-hidden ${
                      item.highlight
                        ? "border-2 border-[#D3F462] bg-[#1e1e1e] w-[100px] items-end pr-3 "
                        : "bg-[#333] items-center"
                    } ${item.disabled ? "opacity-40" : "text-gray-300"}`}
                  >
                    {item.month && (
                      <div className="h-full bg-[#D3F462]">
                        <span className="text-md text-black bg-[#D3F462] h-fit  w-fit px-5 py-1 rounded-lg  rotate-[-90deg]  writing-vertical uppercase absolute left-[-20px] top-[26%] font-bold">
                          {item.month}
                        </span>
                      </div>
                    )}
                    <span className="text-sm font-semibold">{item.day}</span>
                    <span className="text-xl font-bold mt-1">{item.date}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="bg-[#D3F462] text-black px-3 py-1 rounded-full text-sm font-semibold">
            Day1 27.01.2025
          </span>
          <span className="text-[#D3F462] flex items-center gap-1 text-sm font-semibold">
            🚶 3 Activities
          </span>
        </div>

        <ActivityCard/>

        <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      </div>
    </div>
  );
};

export default MainDashboard;
