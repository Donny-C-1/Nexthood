
const CreateEventForm = () => {
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
    </form>
  )
}

export default CreateEventForm