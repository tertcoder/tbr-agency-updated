import travel from "../../assets/images/traveling.jpg";
import place from "../../assets/images/place.jpg";
import hotel from "../../assets/images/hotels.jpg";
import Slider from "../../ui/Slider";

const content = [
  {
    name: "travel",
    bgImage: travel,
    text: "For traveling, We are the people you can rely on when you need to move with confidence, whether you are going places for yourself, for your business, as a traveller.",
  },
  {
    name: "hotel",
    bgImage: hotel,
    text: "Book your next hotel stay with ease on TBR Agency App. Choose from a variety of hotels in top destinations in Burundi. Compare prices and amenities before reserving your room. Enjoy discounted rates and great deals.",
  },
  {
    name: "place",
    bgImage: place,
    text: "Need a place to stay on your next trip? Look no further! Our rental properties offer a comfortable and convenient home away from home. Browse our selection and book your stay today.",
  },
];
function AboutSection() {
  return (
    <section
      id="about"
      className="border-t py-24 container mx-auto grid grid-cols-2 grid-rows-[auto_1fr] gap-10"
    >
      <div className="py-5">
        <h2 className="text-4xl font-semibold text-mainBlack">
          Why TBR Agency?
        </h2>
      </div>
      <div className="py-5">
        <p className="text-lg">
          TBR Agency comes as a solution to provide people with greater access
          to transportation, booking hotel and renting house wherever you want
          without moving.
        </p>
      </div>
      <div className="rounded-xl col-span-full overflow-hidden ">
        <Slider content={content} />
      </div>
    </section>
  );
}

export default AboutSection;
