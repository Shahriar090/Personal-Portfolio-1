import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <h1 className=" font-serif  uppercase font-bold text-2xl lg:text-4xl  text-center text-slate-300">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
