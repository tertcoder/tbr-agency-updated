// import { Link } from "react-router-dom";

import image from "../assets/images/traveling.jpg";
import google from "../assets/images/google.svg";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
// import logo from "../assets/images/tbr-logo.png";

function Register() {
  return (
    <div className="w-full font-regular font-roboto text-mainBlack min-h-screen grid md:grid-cols-2 ">
      <Link
        to="/"
        className="m-6 absolute py-1 px-2 text-mainWhite font-semibold rounded-[0.625rem] bg-main"
      >
        Go back
      </Link>
      <div className="py-16 flex items-center justify-center">
        <div className="max-xl:px-6 max-w-xl w-full flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl font-bold text-center">
            Join the Adventure!
          </h1>
          <p className="mt-1 text-gray-500  text-center">
            Create your account to start exploring and booking amazing travel
            experiences.
          </p>
          <form className="mt-8 space-y-4 w-full">
            <div className="flex w-full max-lg:flex-col gap-4">
              <Input type="text" label="Firstname" className="flex-1" />
              <Input type="text" label="Lastname" className="flex-1" />
            </div>
            <Input type="email" label="Email address" />
            <Input type="password" label="Password" />
            <Input type="password" label="Confirm Password" />

            <button className="bg-main  text-mainWhite w-full py-3 rounded-lg font-semibold shadow-sm text-lg">
              Sign up
            </button>
            <button className="border-2 border-mainBlackLight/10 text-mainBlack w-full py-3 rounded-lg font-semibold shadow-sm flex items-center justify-center gap-2">
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
      <div className="max-md:hidden">
        <img src={image} className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default Register;
