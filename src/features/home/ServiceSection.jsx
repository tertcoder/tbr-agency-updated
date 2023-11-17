import place from "../../assets/images/place.jpg";
import hotels from "../../assets/images/hotels.jpg";
import traveling from "../../assets/images/traveling.jpg";

import Slider from "../../ui/Slider";

const images = [
  { url: place, alt: "TBR Places" },
  { url: hotels, alt: "TBR Hotels" },
  { url: traveling, alt: "TBR Traveling" },
];

function ServiceSection() {
  return (
    <section
      id="services"
      className="max-w-3xl lg:max-w-5xl xl:max-w-7xl px-2 md:px-5 lg:px-2  mx-auto pb-24 pt-32"
    >
      <h2 className="text-3xl lg:text-4xl font-semibold mb-10 text-mainBlack text-center">
        What TBR-Agency has for you
      </h2>
      <div className="grid grid-rows-[500px_auto] lg:grid-rows-none lg:grid-cols-[350px_1fr]   xl:grid-cols-[500px_1fr] h-full rounded-xl lg:space-x-4">
        <Slider images={images} />
        <div className="bg-mainWhite shadow-sm text-mainBlack grid grid-cols-1 gap-4 xl:grid-cols-2 rounded-b-xl lg:rounded-xl p-4 md:px-8 md:py-10 lg:px-10 lg:py-10">
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-5 font-medium text-main">
              Rent a house for your vacations
            </h3>
            <p className="text-lg">
              Our rental service offers houses and apartments for short or long
              term stays, in various locations. Our website makes it easy to
              find and book the perfect rental. Our team is always available to
              help.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-5 font-medium text-main">
              Explore available Hotels
            </h3>
            <p className="text-lg">
              Experience comfort and convenience hotels with comfortable rooms,
              on-site amenities and friendly staff. Book your stay now and enjoy
              our hospitality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm xl:col-span-2">
            <h3 className="text-2xl mb-5 font-medium text-main">
              Book a ride in easy and convenient way
            </h3>
            <p className="text-lg">
              You can use our website or mobile app to make a reservation, track
              your driver. In our transportation services, we also offer a range
              of travel-related information, including local events and
              attractions, to help you make the most of your trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
