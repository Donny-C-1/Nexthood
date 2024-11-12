import { useNavigate } from "react-router-dom";
import FocusCards from "../../components/ui/FocusCards";
import { focusAreas } from "../../data";
import clientPromise from "../../auth_client";

import { useState } from "react";

const Step2 = () => {
  const [focus, setFocus] = useState("")
  const handleChangeFocus = (name: string) => {
    setFocus(name)
  }
  // const client = await clientPromise;
  const navigate = useNavigate() 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const client = await clientPromise;

    client.login({
      identityProvider: `http://localhost:4943?canisterId=${process.env.CANISTER_ID_INTERNET_IDENTITY}#authorize`,
      onSuccess: () => {
        console.log("Successfully logged in");
        navigate("/dashboard");
      },onError: (err) => {
        console.log("\n\n!Authentication Error! \n",err);
      }
    })
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
          {focusAreas.map((f, index) => (
            <FocusCards
              key={index}
              display={{ ...f }}
              select={{ focus: focus, setFocus: handleChangeFocus }}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Step2;
