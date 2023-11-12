import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
function NavigationHeader() {
  return (
    <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl  mx-auto flex w-full justify-between items-center py-5">
      <Logo type="headerLogo" />
      <div className="hidden md:flex text-lg font-medium divide-x-2 ">
        <a href="#home" className="px-2">
          Home
        </a>
        <a href="#about" className="px-2">
          About
        </a>
        <a href="#services" className="px-2">
          Services
        </a>
      </div>
      <Button type="primary">Get Started</Button>
    </div>
  );
}

export default NavigationHeader;
