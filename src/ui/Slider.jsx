import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Overlay from "./Overlay";
import DotNav from "./DotNav";

function Slider({ images }) {
  const [imgIndex, setImgIndex] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setImgIndex(index => {
  //       if (index === images.length - 1) return 0;
  //       return index + 1;
  //     });
  //   }, 3000);
  // }, []);
  // const timeoutRef = useRef(null);
  // useEffect(() => {
  //   (timeoutRef.current = setTimeout(() =>
  //     setImgIndex(index => (index === images.length - 1 ? 0 : index + 1))
  //   )),
  //     2500;

  //   return () => {};
  // }, [images.length]);

  function showPrevImg() {
    setImgIndex(index => {
      if (index == 0) return images.length - 1;
      return index - 1;
    });
  }
  function showNextImg() {
    setImgIndex(index => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <div className="bg-mainBlack text-mainWhite text-4xl relative rounded-t-xl lg:rounded-xl overflow-hidden ">
      <Overlay className="bg-mainBlack/20" />
      <div className="w-full h-full flex">
        {images.map((image, i) => (
          <img
            src={image.url}
            key={i}
            alt={image.alt}
            className="object-cover object-center flex-shrink-0 flex-grow-0 h-full w-full "
            style={{
              translate: `${-100 * imgIndex}%`,
              transition: "translate 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <DotNav
        currentImgIndex={imgIndex}
        setImgIndex={setImgIndex}
        imgsize={[1, 2, 3]}
      />
    </div>
  );
}

export default Slider;
