import Button from "../../ui/Button";
import tbrsvg from "../../assets/images/tbr.svg";

function HeroSection() {
  return (
    <section
      id="home"
      className="pt-28 py-10 md:py-10 md:pt-32 flex-col flex bg-mainLight"
    >
      <div className="max-w-4xl px-2 md:px-5 lg:px-2 mx-auto flex flex-col items-center ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-mainBlack text-center font-bold mb-5">
          Best platform for Traveling, Booking, Renting and moving your business
          fast
        </h1>
        <p className="text-lg text-center mb-8 md:mb-12">
          Travel by taking a ride, Book a room from any hotel you desire and
          Rent a house from anywhere you want with TBR Agency the all-in-one
          platform.
        </p>
        <div>
          <Button type="prime">Get Started</Button>
        </div>
      </div>
      <div className=" hidden md:block self-center">
        <img src={tbrsvg} alt="tbr city" />
      </div>
    </section>
  );
}

export default HeroSection;
