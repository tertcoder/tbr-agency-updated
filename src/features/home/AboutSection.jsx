import Overlay from "../../ui/Overlay";

function AboutSection() {
  return (
    <section id="about" className="flex flex-col pt-32  pb-0 container mx-auto">
      <div className="pt-5 pb-10 flex">
        <h2 className="text-4xl flex-1 font-semibold text-mainBlack">
          Why TBR Agency?
        </h2>
        <p className="text-lg flex-1">
          TBR Agency comes as a solution to provide people with greater access
          to transportation, booking hotel and renting house wherever you want
          without moving.
        </p>
      </div>
      <div className="flex-1 bg-travel bg-cover bg-[0_80%] rounded-xl relative flex items-end p-8">
        <Overlay className=" bg-mainLight/20" />
        <div className="flex  space-x-4 ">
          <div className=" text-mainWhite rounded-lg p-8 bg-mainBlack  shadow-sm shadow-mainBlack font-medium">
            <p className="text-xl">
              For traveling, We are the people you can rely on when you need to
              move with confidence, whether you are going places for yourself,
              for your business, as a traveller.
            </p>
          </div>
          <div className="rounded-lg p-8 bg-mainBlack shadow-sm shadow-mainBlack text-mainWhite font-medium">
            <p className="text-xl">
              Book your next hotel stay with ease on TBR Agency App. Choose from
              a variety of hotels in top destinations in Burundi. Compare prices
              and amenities before reserving your room. Enjoy discounted rates
              and great deals.
            </p>
          </div>
          <div className="  rounded-lg p-8  bg-mainBlack  shadow-sm shadow-mainBlack text-mainWhite font-medium">
            <p className="text-xl">
              Need a place to stay on your next trip? Look no further! Our
              rental properties offer a comfortable and convenient home away
              from home. Browse our selection and book your stay today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
