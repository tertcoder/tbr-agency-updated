import Logo from "../../ui/Logo";
import LinkedIn from "../../assets/images/LinkedIn.svg";
import Facebook from "../../assets/images/Facebook.svg";
import Twitter from "../../assets/images/Twitter.svg";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl  mx-auto  md:grid-cols-[2fr_3fr]">
      <div className="text-base flex flex-col items-center md:block mb-4 md:mb-0">
        <Logo />
        <a href="#">info@tbragency.com</a>
        <div className="flex gap-5 my-4">
          <a className="w-6 h-6">
            <img src={LinkedIn} className="w-full h-full" />
          </a>
          <a className="w-6 h-6">
            <img src={Facebook} className="w-full h-full" />
          </a>
          <a className="w-6 h-6">
            <img src={Twitter} className="w-full h-full" />
          </a>
        </div>
      </div>
      <div className="flex justify-between sm:justify-evenly  md:justify-between items-center">
        <div>
          <h2 className="font-medium text-mainBlack mb-4">Support</h2>
          <ul>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-mainBlack mb-4">Business</h2>
          <ul>
            <li>Booking</li>
            <li>Rental</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-mainBlack mb-4">Company</h2>
          <ul>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
