import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function Input({ className, label, type }) {
  return (
    <label className={twMerge("flex flex-col", className)}>
      <span>{label}:</span>
      <input
        type={`${type}`}
        placeholder={`Enter your ${label.toLowerCase()} ${
          label.toLowerCase() === "confirm password" ? "again" : ""
        }`}
        className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
      />
    </label>
  );
}

Input.propTypes = {
  className: { type: PropTypes.string },
  label: { type: PropTypes.string, require: true },
  type: { type: PropTypes.string, require: true },
};

export default Input;
