import { twMerge } from "tailwind-merge";

function Button({ type, className, children }) {
  const base = twMerge(
    `font-semibold bg-main text-mainWhite rounded-xl hover:opacity-90 duration-150 text-lg`,
    `${className && className}`
  );
  const prime = "py-3 px-6";
  const primeLight =
    "py-3 px-6 bg-transparent border-2 border-mainLight text-mainLight hover:border-main hover:text-main ";
  const primary = "py-2 px-3";

  return (
    <>
      {type === "prime" && (
        <button className={twMerge(base, prime)}>{children}</button>
      )}
      {type === "primeLight" && (
        <button className={twMerge(base, primeLight)}>{children}</button>
      )}
      {type === "primary" && (
        <button className={twMerge(base, primary)}>{children}</button>
      )}
    </>
  );
}

export default Button;
