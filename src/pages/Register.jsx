// import { Link } from "react-router-dom";

import image from "../assets/images/traveling.jpg";
import google from "../assets/images/google.svg";
import { Link } from "react-router-dom";
// import logo from "../assets/images/tbr-logo.png";

function Register() {
  return (
    <div className="w-full font-regular font-roboto text-mainBlack min-h-screen grid grid-cols-2 ">
      <div className="py-16 flex items-center justify-center">
        <div className="max-w-xl w-full flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl font-bold text-center">
            Join the Adventure!
          </h1>
          <p className="mt-1 text-gray-500  text-center">
            Create your account to start exploring and booking amazing travel
            experiences.
          </p>
          <form className="mt-8 space-y-4 w-full">
            <div className="flex w-full gap-4">
              <label className="flex flex-1 flex-col">
                <span className="">Firstname:</span>
                <input
                  type="text"
                  placeholder="Enter your firstname"
                  className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
                />
              </label>
              <label className="flex flex-1 flex-col">
                <span className="">Lastname:</span>
                <input
                  type="text"
                  placeholder="Enter your lastname"
                  className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="">Email address:</span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
              />
            </label>

            <label className="flex flex-col">
              <span className="">Password:</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
              />
            </label>
            <label className="flex flex-col">
              <span className="">Confirm Password:</span>
              <input
                type="password"
                placeholder="Enter your password again"
                className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
              />
            </label>

            <button className="bg-main  text-mainWhite w-full py-3 rounded-lg font-semibold shadow-sm text-lg">
              Sign up
            </button>
            <button className="border-2 border-mainBlackLight/10 text-mainBlack w-full py-3 rounded-lg font-semibold shadow-sm text-lg flex items-center justify-center gap-2">
              <img src={google} />
              <span>Sign up with Google</span>
            </button>
          </form>
          <p className="text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-mainBlack font-semibold ">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div>
        <img src={image} className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default Register;
