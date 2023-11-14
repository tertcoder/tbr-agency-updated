import { twMerge } from "tailwind-merge";
import logo from "../assets/images/tbr-logo.png";
function Logo({ type }) {
  return (
    <div
      className={twMerge(
        `block`,
        `${type === "headerLogo" ? "w-[7.95rem]" : "w-36"}`
      )}
    >
      <img src={logo} alt="TBR Logo" />
    </div>
  );
}

export default Logo;
