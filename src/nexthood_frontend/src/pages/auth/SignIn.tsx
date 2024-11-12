import { useNavigate } from "react-router-dom";
import clientPromise from "../../auth_client";

const SignIn = ({ client }: { client: any }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const client = await clientPromise;

    client.login({
      identityProvider: `http://localhost:4943?canisterId=${process.env.CANISTER_ID_INTERNET_IDENTITY}#authorize`,
      onSuccess: () => {
        console.log("Successfully logged in");
        navigate("/dashboard");
      },
      onError: (err) => {
        console.log("\n\n!Authentication Error! \n", err);
      },
    });
  };
  return (
    <div className="mt-[100px] px-[5%]">
      <h2 className="text-[#2C3E50] font-bold text-center w-full text-xl md:text-4xl">
        Welcome back
      </h2>
      <form action="" className="mt-6" onSubmit={handleSubmit}>
        <input type="text" className="authInput w-full" placeholder="Username" />
        <button
          className="authInput text-white font-semibold text-center bg-primary mt-4 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
