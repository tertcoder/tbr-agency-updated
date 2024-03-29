import image from "../assets/images/traveling.jpg";
import google from "../assets/images/google.svg";
import { Link } from "react-router-dom";
import Input from "../ui/Input";

function Login() {
  return (
    <div className="w-full font-regular font-roboto text-mainBlack min-h-screen grid md:grid-cols-2 ">
      <Link
        to="/"
        className="m-6 absolute py-1 px-2 text-mainWhite font-semibold rounded-[0.625rem] bg-main"
      >
        Go back
      </Link>
      <div className="py-16 flex items-center justify-center">
        <div className="max-xl:px-6 max-w-xl w-full flex flex-col justify-center items-center h-full ">
          <h1 className="text-3xl font-bold text-center">Welcome back </h1>
          <p className="mt-1 text-gray-500  text-center">
            Enter your email and password to continue your journey with us.
          </p>
          <form className="mt-8 space-y-4 w-full">
            <Input type="email" label="Email address" />

            <div className="flex flex-col  space-y-2">
              <Input type="password" label="Password" />

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
            <button className="border-2 border-mainBlackLight/10 text-mainBlack w-full py-3 rounded-lg font-semibold shadow-sm flex items-center justify-center gap-2">
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
      <div className="max-md:hidden">
        <img src={image} className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default Login;
