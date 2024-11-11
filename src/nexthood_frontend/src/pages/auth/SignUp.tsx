import { useNavigate } from "react-router-dom";
import group from "/assets/group.png";
import person from "/assets/person.png";
import { authenticateUser } from "./auth";
import { useState, useEffect } from "react";

const SignUp = () => {
  const [ userPrincipal, setUserPrincipal ] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    navigate("/auth/step-2")

  }

  // This USEEffect is causing issues 
  // I don't know why or I'm tired 
  // Help me fix it
  useEffect(() => {
    async function authFlow() {
      const authClient = await authenticateUser();
      if (authClient) {
        const identity = authClient.getIdentity();
        setUserPrincipal(identity.getPrincipal().toText());
      }
    }
    authFlow();
  }, [])
  
  
  return (
    <div className="mt-8 md:mt-14 px-[5%] lg:px-[8%] md:px-8">
      {/* This is how you check if they are authenticated */}
      {userPrincipal ? (
        <div>
          <h1>Welcome</h1>
          <p>Your principal ID: {userPrincipal}</p>
        </div>
      ) : ""}
      <h2 className="text-[#2C3E50] font-bold text-center w-full text-xl md:text-4xl">
        How are you planning on using NEXTHOOD?
      </h2>
      <p className="text-[#2C3E50] text-center mt-4">
        We’ll fit the experience to your focus. Don’t Worry, you can change it
        later
      </p>
      <div className="flex justify-between gap-8 placeholder mt-8 w-full mx-auto">
        <button className="authCards border-primary bg-primary bg-opacity-5">
          <img src={group} alt="" />
          <p>With my Community</p>
        </button>
        <button className="authCards border-[#D9D9D9]">
          <img src={person} alt="" />
          <p>For myself</p>
        </button>
      </div>
      <form action="" onSubmit={handleSubmit} className="mt-6 mx-auto w-full">
        <input
          type="text"
          placeholder="The name of your community"
          className="authInput"
        />
        <button className="authInput text-white font-semibold text-center bg-primary mt-4">
          Create a Profle
        </button>
      </form>
    </div>
  );
};

export default SignUp;
