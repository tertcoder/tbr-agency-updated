import Button from "../../ui/Button";
import taxi from "../../assets/images/taxi.jpeg";
import Overlay from "../../ui/Overlay";

function CTASection() {
  return (
    <section id="ctaSection" className="py-24 bg-mainWhite">
      <div className="container mx-auto bg-mainBlack shadow-md rounded-xl flex overflow-hidden">
        <div className="flex-1 px-10 py-24">
          <h1 className="text-6xl text-mainLight max-w-lg font-bold mb-5">
            Start business with TBR Agency
          </h1>
          <p className="text-lg  max-w-2xl text-mainLight/60 mb-10">
            Need to work with us. Such as be our driver, posting your hotel and
            house to rent. Click the button below to start a business with us
          </p>
          <div className="flex space-x-8">
            <Button type="prime">Work With Us</Button>
            <Button type="primeLight">Get Started</Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <Overlay className="bg-mainBlack/20" />
          <img
            src={taxi}
            alt="TBR taxi"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
