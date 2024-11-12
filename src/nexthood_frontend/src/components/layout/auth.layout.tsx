import { Outlet, useLocation, useNavigate } from "react-router-dom";
import authbg from "/assets/authbg.png";
import authIntroBg from "/assets/authIntrobg.png";
import loginBg from "/assets/Group31.png";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-full">
      <main className="w-full lg:w-1/2 pt-8">
        <h1 className="pl-[5%] lg:pl-[8%] text-2xl md:text-5xl font-logo text-primary font-black">
          NEXTHOOD
        </h1>
        <Outlet />
      </main>
      <div
        className={`w-1/2 h-screen hidden lg:block ${
          location.pathname.includes("login") ? "lg:p-8" : ""
        }`}
      >
        <img
          src={
            location.pathname.includes("step-2")
              ? authbg
              : location.pathname.includes("login")
              ? loginBg
              : authIntroBg
          }
          alt="auth bg"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
