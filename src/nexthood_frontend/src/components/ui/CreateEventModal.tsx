import { Dispatch, SetStateAction } from "react";
import CreateEventForm from "./CreateEventForm";

type CreateEventProps = {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  handleSubmitEvent: () => void;
};

const CreateEventModal = ({
  isModalActive,
  setIsModalActive,
  handleSubmitEvent,
}: CreateEventProps) => {
  return (
    <>
      {isModalActive && (
        <div className="w-full h-full bg-white bg-opacity-10 shadow-lg backdrop-blur-sm absolute flex justify-center items-center top-0 right-0">
          <div className="bg-white p-8 z-10  rounded-md shadow-md ">
            <p className="text-xl">Host your Next Event</p>
            <div className="mt-4">
                <CreateEventForm />
            </div>
            <div className="mt-4 flex justify-center items-center w-full gap-4">
              <button
                onClick={() => setIsModalActive(false)}
                className="border border-red-500 text-red-500 w-1/2 rounded-md py-3 md:py-5 px-4"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitEvent}
                className="bg-primary text-white rounded-md w-1/2 py-3 md:py-5 px-4"
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEventModal;
