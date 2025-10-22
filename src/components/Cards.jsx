import React from "react";
import "./Cards.css";
import { MdOutlineDateRange } from "react-icons/md";
import LightBgText from "./subComponents/LightBgText";
import Images from "./subComponents/Images";

const Cards = () => {
  const cards_array = [{}, {}, {}, {}];

  return (
    <div className=" container py-1 mt-5 px-10 lg:px-0 flex flex-col lg:flex-row justify-center items-center ">
      {/* -----------------------------------------{2nd Child}---------------------------------------- */}
      {/* cards parent div */}
      <div className="h-full py-2 w-1/1 lg:w-50/100 lg:ml-5 grid grid-cols-2 gap-5 ">
        {cards_array.map((data, ind) => (
          <div
            key={ind}
            className=" flex justify-center items-center "
          >
            <div
              className={`inner-box px-1 w-9/10 lg:w-full bg-white flex flex-col gap-1 rounded-[5px] ${
                ind === 1 ? ` lg:rotate-[-4deg]` : ``
              } `}
            >
              {/* title or pera child */}
              <div className="py-1 mt-2 w-full ">
                {/* title */}
                <div className="h-2/10 w-full flex justify-between items-center px-4 ">
                  {/* title */}
                  <div className="text-black text-[20px] lg:text-[25px] font-semibold ">
                    Slack integration
                  </div>
                  {/* menu icon */}
                  <div className="text-black flex justify-center items-center ">
                    ***
                  </div>
                </div>
                {/* pera */}
                <div className="h-6/10 w-full flex justify-between items-center px-4 ">
                  <p className=" text-[15px] lg:text-[18px] text-[#a09c9c] ">
                    Statisdaa is a school management solution that offers a
                    personalized portal to each type of user,
                  </p>
                </div>
                {/* light bg or images */}
                <div className="h-2/10 w-full flex justify-between items-center py-1 px-4 ">
                  <LightBgText />
                  <Images />
                </div>
              </div>
              {/* hr child */}
              <div className=" py-1 w-full flex justify-center items-center ">
                <hr className="h-[2px] w-full bg-black " />
              </div>
              {/* date child */}
              <div className=" w-full flex justify-between py-1 px-5  ">
                {/* number */}
                <div className="text-[18px] py-2 text-[#9c9898]  ">14</div>
                {/* icon */}

                {/* date */}
                <div className="h-full text-[18px] flex items-center gap-1 py-2 text-[#727272]  ">
                  <MdOutlineDateRange className=" text-[#999999] text-[25px] " />
                  <p className=" text-[18px] text-[#999999]  ">7 feb 2022</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* -----------------------------------------{2nd Child}---------------------------------------- */}

      <div className="h-full w-1/1 lg:w-50/100 mt-10 flex items-center pl-30 ">
        <div className="h-19/20 w-9/10 inner-box rounded-[10px] px-5 py-2 ">
          <div className="h-10/10 w-10/10 bg-white ">
          {/* title */}
          <p className="text-[40px] font-semibold text-black ">
            Create your task
          </p>
          {/* pera */}
          <p className="w-20/20 text-[18px] text-[#a09c9c] mt-5 ">
             Statisdaa is a  school management solution that offers a personalized portal to each type of user, ensuring that your institution is always engaged with teachers, students, and their parents
          </p>
          {/* inputs */}
            {/* input--1 */}
            <input type="text" placeholder="Create Your Task" className="h-[60px] w-full mt-2 text-[22px] border-[#a4a3a3] border-[2px] rounded-[8px] outline-none text-black py-1 px-2 " />
            {/* input--2 */}
            <input type="text" placeholder="Create Your Task" className="h-[60px] w-full mt-5 text-[22px] border-[#9d9c9c] border-[2px] rounded-[8px] outline-none text-black py-1 px-2 " />
          {/* blue-box */}
          <div className=" py-2 px-2 mt-7 mb-2 rounded-[10px] bg-[#5555ff] ">
            {/* heading */}
            <p className="text-[22px] py-1 font-semibold text-white ">Manage the task easily and clearly</p>
            {/* pera */}
            <p className="text-[16px] text-[#ece9e9] ">Statisdaa increases communication between all stakeholders: students, teachers, parents and administrative staff, with a dedicated web portal for any type of end-user. Keeping your students and parents engaged with the academic process is a crucial factor in each student's success.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
