import { Event } from "../../data";

const EventCards = ({ community, date, name }: Event) => {
  return (
    <div className="p-6 rounded-lg border border-black border-opacity-5 hover:shadow-lg">
      <div className="rounded-lg lg:w-[300px] h-[180px] bg-primary bg-opacity-5 mb-3"></div>
      <h2>{name}</h2>
      <p>Hosted by: {community}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default EventCards;
