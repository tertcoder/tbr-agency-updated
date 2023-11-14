import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
function NavigationHeader() {
  return (
    <div className="md:max-w-3xl px-5 lg:px-2 xl:px-0 lg:max-w-5xl xl:max-w-7xl  mx-auto flex w-full justify-between items-center py-5">
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
      <Button type="primary" className="hidden md:flex ">
        Get Started
      </Button>
      <MenuMobile />
    </div>
  );
}

function MenuMobile() {
  return <div className="md:hidden">Ola Maniga</div>;
}

export default NavigationHeader;
