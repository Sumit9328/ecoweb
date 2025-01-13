import React from "react";

const WordSlider = () => {
  const items = ["DIGITAL PRODUCTS", "HANDMADE GOODS", "VINTAGE ITEMS"];

  return (
    <div className="relative overflow-hidden bg-transparent pb-5">
      <div className="w-full overflow-hidden">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {items.concat(items).map((item, index) => (
            <span
              key={index}
              className="mx-8 py-2 text-[100px] font-[700] tracking-widest text-white bg-white rounded-lg relative"
              style={{
                WebkitTextStroke: "1.5px black",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordSlider;
