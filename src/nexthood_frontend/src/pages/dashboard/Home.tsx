import { useState } from "react";
import CreateEventModal from "../../components/ui/CreateEventModal";
import EventSearch from "../../components/ui/EventSearch";

const Home = () => {
  const [active, setActive] = useState(false)
  const handleSubmitEvent = () => {}
  const setIsModalActive = () => {
    setActive(active => {
      return !active
    })
  }
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
        <button onClick={() => setActive(true)} className="py-3 md:py-5 px-4 w-full md:w-[400px] text-white bg-primary rounded-lg">
          Create Event
        </button>
      </div>

      <CreateEventModal setIsModalActive={setIsModalActive} handleSubmitEvent={handleSubmitEvent} isModalActive={active} />
    </div>
  );
};

export default Home;
