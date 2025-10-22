import React from "react";
import LightBgText from "./subComponents/LightBgText";
import { GiCheckMark } from "react-icons/gi";

const Plans = () => {
  const plans_cards_array = [
    {
      btn_lable: "Standard",
      desription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus maecenas.",
      price: "$15",
      month: "/month",
      chackBox_1: "For 1- 10 people in",
      chackBox_2: "For 2- 10 people in a",
      chackBox_3: "For 3- 10 people in a team",
      btn_2_lable: "Choose",
    },
    {
      btn_lable: "premium",
      desription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus maecenas.",
      price: "$20",
      month: "/month",
      chackBox_1: "For 1- 10 people in",
      chackBox_2: "For 2- 10 people in a",
      chackBox_3: "For 3- 10 people in a team",
      btn_2_lable: "Choose",
    },
    {
      btn_lable: "EnterPrise",
      desription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus maecenas.",
      price: "$15",
      month: "/month",
      chackBox_1: "For 1- 10 people in",
      chackBox_2: "For 2- 10 people in a",
      chackBox_3: "For 3- 10 people in a team",
      btn_2_lable: "Choose",
    },
  ];

  return (
    <div className=" container bg-white flex flex-col mt-20 mb-5 ">
      {/* first child */}
      <div className="h-[20%] w-full flex flex-col justify-center items-center ">
        <p className="text-[45px] text-[#006ed4] font-semibold ">
          Pick up the best plan
        </p>
        <p className=" text-center text-[22px] text-[gray] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus odio
          pellentesque pellentesque a. Amet <br /> ut lobortis pellentesque a, luctus
          maecenas.
        </p>
      </div>
      {/* second child */}
      {/* plans--cards--parent */}
      <div className=" w-full flex justify-center items-end gap-5 mt-10 ">
        {plans_cards_array.map((data, ind) => (
          <div
            key={ind}
            className={`inner-box basis-1/3 rounded-[10px] px-10 py-14
               ${ind === 1 ? `bg-[#0B0641] mb-15 ` : ``} 
            `}
          >
            {/* <div className=""> */}
            {/* first child */}
            <div className=" gap-3 ">
              {/* text */}
              <LightBgText
                lable={`${data.btn_lable}`}
                className={`capitalize text-[25px] rounded-[5px] font-semibold
                     ${
                       ind === 1 ? `bg-white` : `!bg-[#e7e7e7]`
                     } !text-[#1777F7] `}
              />
              {/* pera */}
              <p
                className={`mt-4 ${
                  ind === 1 ? `text-white` : `!text-[#7a7979]`
                }  text-[17px] w-8/10 `}
              >
                {data.desription}
              </p>
              {/* price */}
              <p
                className={`text-[50px] ${ind === 1 ? `text-white` : `text-[#292828]`}  mt-4 font-semibold `}
              >
                {data.price}
                <span
                  className={`text-[20px] ${
                    ind === 1 ? `text-white` : `text-[#667085]`
                  } font-semibold`}
                >
                  {data.month}
                </span>
              </p>
            </div>
            {/* second child */}
            <div className=" mt-15 py-5 ">
              <div className={`flex `}>
                {/* checkbox */}
                <div
                  className={`h-7 w-7 px-1 py-1 mt-1 rounded-[8px] border-[2px] 
                    ${ind === 1 ? `text-white` : `text-[#1777f7] `}`}
                >
                  <GiCheckMark className="text-[17px] " />
                </div>
                {/* text-line */}
                <p
                  className={`${
                    ind === 1 ? `text-white` : `text-slate-600 `
                  } text-[22px] mt-1 ml-2 `}
                >
                  {data.chackBox_1}
                </p>
              </div>
              <div className={`flex `}>
                {/* checkbox */}
                <div
                  className={`h-7 w-7 px-1 py-1 mt-1 rounded-[8px] border-[2px] 
                    ${ind === 1 ? `text-white` : `text-[#1777f7] `}`}
                >
                  <GiCheckMark className="text-[17px] " />
                </div>
                {/* text-line */}
                <p
                  className={`${
                    ind === 1 ? `text-white` : `text-slate-600 `
                  } text-[22px] mt-1 ml-2 `}
                >
                  {data.chackBox_2}
                </p>
              </div>
              <div className={`flex `}>
                {/* checkbox */}
                <div
                  className={`h-7 w-7 px-1 py-1 mt-1 rounded-[8px] border-[2px] 
                    ${ind === 1 ? `text-white` : `text-[#1777f7] `}`}
                >
                  <GiCheckMark className="text-[17px] " />
                </div>
                {/* text-line */}
                <p
                  className={`${
                    ind === 1 ? `text-white` : `text-slate-600 `
                  } text-[22px] mt-1 ml-2 `}
                >
                  {data.chackBox_3}
                </p>
              </div>
              <LightBgText
                lable={`${data.btn_2_lable}`}
                className=" text-white !bg-[#1777F7] text-[22px] mt-10  rounded-[10px] "
              />
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
