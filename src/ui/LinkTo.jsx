import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function LinkTo({ type, className, to, children }) {
  const base = twMerge(
    `font-semibold bg-main text-mainWhite rounded-xl text-center hover:opacity-90 duration-150 text-lg`,
    `${className && className}`
  );
  const prime = "py-3 px-6";
  const primeLight =
    "py-3 px-6 bg-transparent border-2 border-mainLight text-mainLight hover:border-main hover:text-main ";
  const primary = "py-2 px-3";

  return (
    <>
      {type === "prime" && (
        <Link to={to} className={twMerge(base, prime)}>
          {children}
        </Link>
      )}
      {type === "primeLight" && (
        <Link to={to} className={twMerge(base, primeLight)}>
          {children}
        </Link>
      )}
      {type === "primary" && (
        <Link to={to} className={twMerge(base, primary)}>
          {children}
        </Link>
      )}
    </>
  );
}

export default LinkTo;
