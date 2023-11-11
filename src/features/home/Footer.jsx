import Logo from "../../ui/Logo";
import LinkedIn from "../../assets/images/LinkedIn.svg";
import Facebook from "../../assets/images/Facebook.svg";
import Twitter from "../../assets/images/Twitter.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="grid grid-cols-[2fr_3fr]">
      <div className="text-base">
        <Logo type="" />
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
        <p className="text-sm">
          Copyright ©{currentYear} by <b>TBR Agency</b>, Inc. All rights
          reserved
        </p>
      </div>
      <div className="grid grid-cols-3">
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
