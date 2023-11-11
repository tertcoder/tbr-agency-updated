import place from "../../assets/images/place.jpg";
import DotNav from "../../ui/DotNav";
import Overlay from "../../ui/Overlay";

function ServiceSection() {
  return (
    <section id="services" className="container mx-auto pb-24 pt-32">
      <h2 className="text-4xl font-semibold mb-10 text-mainBlack text-center">
        What TBR-Agency has for you
      </h2>
      <div className="grid grid-cols-[500px_1fr] h-full rounded-xl space-x-4">
        <div className="bg-mainBlack text-mainWhite text-4xl relative rounded-xl overflow-hidden ">
          <Overlay className="bg-mainBlack/20" />
          <img
            src={place}
            alt="TBR Places"
            className="object-cover h-full w-full"
          />
          <DotNav imgsize={[1, 2, 3]} />
        </div>
        <div className="bg-mainWhite shadow-sm text-mainBlack grid grid-cols-2 rounded-xl p-10">
          <div className="bg-white m-2 p-6 rounded-lg shadow-sm">
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

          <div className="bg-white m-2 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-5 font-medium text-main">
              Explore available Hotels
            </h3>
            <p className="text-lg">
              Experience comfort and convenience hotels with comfortable rooms,
              on-site amenities and friendly staff. Book your stay now and enjoy
              our hospitality.
            </p>
          </div>
          <div className="bg-white m-2 p-6 rounded-lg shadow-sm col-span-2">
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
