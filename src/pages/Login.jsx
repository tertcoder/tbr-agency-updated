import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full font-regular font-roboto text-mainBlackLight h-screen flex justify-center items-center">
      <div className="text-center w-full">
        <h1 className="text-4xl font-medium text-mainBlack">
          TBR-Agency WebApp is in development
        </h1>
        <p className="text-sm mt-4">coming soon...</p>
        <Link
          to="/"
          className="border-2 mt-8 inline-block text-mainBlack font-medium border-main rounded-full px-4 py-2"
        >
          Return
        </Link>
      </div>
    </div>
  );
}

export default Login;
