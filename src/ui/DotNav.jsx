import { twMerge } from "tailwind-merge";

function DotNav({ imgsize, setImgIndex, currentImgIndex }) {
  return (
    <div className="flex gap-4 absolute bottom-4 left-1/2 -translate-x-1/2">
      {imgsize.map((_, i) => (
        <button
          className={twMerge(
            `w-3 h-3 rounded-full border-2 border-mainWhite`,
            `${i === currentImgIndex && "border-main bg-main"}`
          )}
          key={i}
          onClick={() => setImgIndex(i)}
        ></button>
      ))}
    </div>
  );
}

export default DotNav;
