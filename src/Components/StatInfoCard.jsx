import React from "react";

const StatInfoCard = ({ count, label }) => {
  return (
    <div className="flex-1 flex gap-3 md:gap-5 sm:bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] rounded-[14px] p-5 bg-[#fcf4ec]">
      <h4 className="text-4xl md:text-5xl font-medium text-[#ac573f]">
        {count}
      </h4>
      <p className="text-sm md:text-[16px] font-normal text-black leading-6">
        {label.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default StatInfoCard;
