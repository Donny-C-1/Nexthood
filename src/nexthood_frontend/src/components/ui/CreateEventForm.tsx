import { events } from "../../../../declarations/events"

// Availabel function 
// eventManager.createEvent(id, name, description, date as text, time as text) ;
// getEvent(id);
// getAllEvents();

const CreateEventForm = () => {
    // await events.createEvent("1593a13e-3d52-4225-9078-70dc24f4ea40", "Very First Event", "This is my first event. It is used to test this functionality. I hope it works.", "Tomorrow", "13:00");
    // let evet = await events.displayAllEvents();
  return (
    <form className="">
        <label htmlFor="">
            <input type="text" className="createEvent w-full" placeholder="Event Name" />
        </label>
        <label htmlFor="">
            <input type="text" className="createEvent w-full" placeholder="Event Description" />
        </label>
        <label htmlFor="">
            <input type="date" className="createEvent w-full" placeholder="Event Date" />
        </label>
        <label htmlFor="">
            <input type="time" className="createEvent w-full" placeholder="Event Time" />
        </label>
        {/* <p>{JSON.stringify(evet)}</p> */}
    </form>
  )
}

export default CreateEventForm