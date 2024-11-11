import EventSearch from "../../components/ui/EventSearch";

const Home = () => {
  return (
    <div className="mt-8 px-[5%] md:px-[8%]">
      <h2 className="text-xl md:text-4xl text-center font-bold">
        Welcome to Your Dashboard
      </h2>
      <p className="text-sm text-center mt-3 md:mt-6 ">
        Stay updated on the latest events and discussions
      </p>
      <div className="flex flex-col gap-3 items-center">
        <EventSearch placeholder="Search for events, comments, individuals" />
        <button className="py-3 md:py-5 px-4 w-full md:w-[400px] text-white bg-primary rounded-lg">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default Home;
