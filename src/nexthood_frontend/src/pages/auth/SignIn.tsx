import { useNavigate } from "react-router-dom"

const SignIn = ({client} : {client: any}) => {
  const navigate = useNavigate()
  return (
    <div className="mt-[100px] px-[5%]">
     <h2 className="text-[#2C3E50] font-bold text-center w-full text-xl md:text-4xl">
        Welcome back
      </h2>
      <button onClick={() => {
        // client.login()
        navigate("/dashboard")
      }} className="authInput text-white font-semibold text-center bg-primary mt-4 w-full">
          Login
        </button>
    </div>
  )
}

export default SignIn