import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Slider({ content }) {
  const [contentIndex, setContentIndex] = useState(0);
  function showPrevContent() {
    setContentIndex(index => {
      if (index == 0) return content.length - 1;
      return index - 1;
    });
  }
  function showNextContent() {
    setContentIndex(index => {
      if (index === content.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <>
      <div className="relative h-full flex-1">
        <img src={content[contentIndex].bgImage} alt="travel" />
        <div className="absolute rounded-lg p-8 bottom-4 right-4 w-[525px] bg-mainWhite/80">
          <p className="text-xl">{content[contentIndex].text}</p>
        </div>
        <button
          className="absolute top-1/2 text-rose-400 bg-gray-600 p-4 rounded-full w-14 flex items-center justify-center h-14 left-4"
          onClick={showPrevContent}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 text-rose-400 bg-gray-600 p-4 rounded-full w-14 flex items-center justify-center h-14 right-4"
          onClick={showNextContent}
        >
          Next
        </button>
      </div>

      {/* {content.map(a => (
        <div key={a.name} className="relative h-full flex-1">
          <img src={a.bgImage} alt="travel" />
          <div className="absolute rounded-lg p-8 bottom-4 right-4 w-[525px] bg-mainWhite/80">
            <p className="text-xl">{a.text}</p>
          </div>
        </div>
      ))} */}
    </>
  );
}

export default Slider;
