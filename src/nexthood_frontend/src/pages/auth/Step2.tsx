import { useNavigate } from "react-router-dom";
import FocusCards from "../../components/ui/FocusCards";
import { focusAreas } from "../../data";

const Step2 = () => {
  const navigate = useNavigate() 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate("/dashboard")
  }
  return (
    <div className="mt-8 px-[5%] lg:px-[8%] md:px-8 pb-4">
      <h2 className="text-[#2C3E50] font-bold  w-full text-xl md:text-4xl">
        Sign Up
      </h2>

      <form action="" onSubmit={handleSubmit} className="mt-5">
        <p>Focus Description</p>
        <input
          type="text"
          className="authInput mt-4 w-full"
          placeholder="Briefly Discuss your community's focus "
        />
        <button className="authInput text-white font-semibold text-center bg-primary mt-4 w-full">
          Submit
        </button>

        <p className="mt-6">Select focus area</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {focusAreas.map((f, key) => (
            <FocusCards key={key} {...f} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Step2;
