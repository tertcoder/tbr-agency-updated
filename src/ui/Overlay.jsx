import { twMerge } from "tailwind-merge";

function Overlay({ className }) {
  return <div className={twMerge(`absolute inset-0`, `${className}`)}></div>;
}

export default Overlay;
