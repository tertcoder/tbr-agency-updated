import { twMerge } from "tailwind-merge";

function Button({ type, children }) {
  const base = "font-semibold bg-main text-mainWhite rounded-xl text-lg";
  const prime = "py-3 px-6";
  const primary = "py-2 px-3";

  return (
    <>
      {type === "prime" && (
        <button className={twMerge(base, prime)}>{children}</button>
      )}
      {type === "primary" && (
        <button className={twMerge(base, primary)}>{children}</button>
      )}
    </>
  );
}

export default Button;
