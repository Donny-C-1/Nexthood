import { Outlet, useNavigate } from 'react-router-dom';
import authbg from "/assets/authbg.png"


const AuthLayout = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between w-full">
      <main className="w-full lg:w-1/2   pt-8"> 
        <h1 className="pl-[5%] lg:pl-[8%] text-2xl md:text-5xl font-logo text-primary font-black">NEXTHOOD</h1>
        <Outlet />
      </main>
      <div className='w-1/2 h-screen hidden lg:block'>
        <img src={authbg} alt="auth bg" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AuthLayout;
