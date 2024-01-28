// import { Link } from "react-router-dom";

import image from "../assets/images/traveling.jpg";
import google from "../assets/images/google.svg";
import { Link } from "react-router-dom";
// import logo from "../assets/images/tbr-logo.png";

function Login() {
  return (
    <div className="w-full font-regular font-roboto text-mainBlack min-h-screen grid grid-cols-2 ">
      <div className="py-16 flex items-center justify-center">
        <div className="max-w-xl w-full flex flex-col justify-center items-center h-full ">
          {/* <img src={logo} className="w-40" /> */}

          <h1 className="text-3xl font-bold text-center">Welcome back </h1>
          <p className="mt-1 text-gray-500  text-center">
            Enter your email and password to continue your journey with us.
          </p>
          <form className="mt-8 space-y-4 w-full">
            <label className="flex flex-col">
              <span className="">Email:</span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
              />
            </label>
            <div className="flex flex-col space-y-2">
              <label className="flex flex-col">
                <span className="">Password:</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="py-3 px-3 placeholder:text-sm rounded-lg bg-mainWhite shadow-sm outline-none border border-transparent duration-150 focus:border-mainLight"
                />
              </label>
              <p className="ml-auto text-gray-500 text-sm">
                Forgot password?{" "}
                <a href="#" className="text-mainBlack font-semibold">
                  Reset
                </a>
              </p>
            </div>
            <button className="bg-main  text-mainWhite w-full py-3 rounded-lg font-semibold shadow-sm text-lg">
              Sign in
            </button>
            <button className="border-2 border-mainBlackLight/10 text-mainBlack w-full py-3 rounded-lg font-semibold shadow-sm text-lg flex items-center justify-center gap-2">
              <img src={google} />
              <span>Sign in with Google</span>
            </button>
          </form>
          <p className="text-gray-500 mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-mainBlack font-semibold ">
              Sign up
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

export default Login;
