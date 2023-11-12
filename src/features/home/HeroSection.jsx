import Button from "../../ui/Button";
import tbrsvg from "../../assets/images/tbr.svg";

function HeroSection() {
  return (
    <section id="home" className="pt-32 flex-col  flex  bg-mainLight">
      <div className="max-w-4xl mx-auto flex flex-col items-center ">
        <h1 className="text-6xl text-mainBlack text-center font-bold mb-5">
          Best platform for Traveling, Booking, Renting and moving your business
          fast
        </h1>
        <p className="text-lg mb-12">
          Travel by taking a ride, Book a room from any hotel you desire and
          Rent a house from anywhere you want with TBR Agency the all-in-one
          platform.
        </p>
        <div>
          <Button type="prime">Get Started</Button>
        </div>
      </div>
      <div className="self-center">
        <img src={tbrsvg} alt="tbr city" />
      </div>
    </section>
  );
}

export default HeroSection;
