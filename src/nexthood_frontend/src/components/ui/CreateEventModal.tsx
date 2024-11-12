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
                <CreateEventForm setIsModalActive={setIsModalActive} handleSubmitEvent={handleSubmitEvent} />
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEventModal;
