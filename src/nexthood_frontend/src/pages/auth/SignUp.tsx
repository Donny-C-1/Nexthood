import { useNavigate } from "react-router-dom";
import group from "/assets/group.png";
import person from "/assets/person.png";
import { useState } from "react";

type UserType = "user" | "community";

const SignUp = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>("community");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/auth/step-2");
  };

  return (
    <div className="mt-8 md:mt-14 px-[5%] lg:px-[8%] md:px-8">
      <h2 className="text-[#2C3E50] font-bold text-center w-full text-xl md:text-4xl">
        How are you planning on using NEXTHOOD?
      </h2>
      <p className="text-[#2C3E50] text-center mt-4">
        We’ll fit the experience to your focus. Don’t Worry, you can change it
        later
      </p>
      <div className="flex justify-between gap-8 placeholder mt-8 w-full mx-auto">
        <button
        onClick={() => setUserType("community")}
          className={`authCards ${
            userType === "community" ? "border-primary bg-primary" : ""
          } bg-opacity-5`}
        >
          <img src={group} alt="" />
          <p>With my Community</p>
        </button>
        <button
        onClick={() => setUserType("user")}
          className={`authCards bg-opacity-5 border-[#D9D9D9]  ${
            userType === "user" ? "border-primary bg-primary" : ""
          }`}
        >
          <img src={person} alt="" />
          <p>For myself</p>
        </button>
      </div>
      <form action="" onSubmit={handleSubmit} className="mt-6 mx-auto w-full">
        <input
          type="text"
          placeholder="The name of your community"
          className="authInput w-full"
        />
        {/* <br /> */}
        <button className="authInput text-white font-semibold text-center bg-primary mt-4 w-full">
          Create a Profle
        </button>
      </form>
    </div>
  );
};

export default SignUp;
