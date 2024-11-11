import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleClickedHamburger = () => {
    setIsHamburgerClicked((preValue) => !preValue);
  };

  return (
    <nav>
      <div
        className={`transition-all duration-500 flex-col lg:flex-col gap-6 lg:flex lg:bg-transparent lg:static lg:text-[16px]  ${
          isHamburgerClicked
            ? "z-10 flex  bg-primary top-0 overflow-y-auto h-full px-8 pt-[100px] fixed right-[0%] "
            : "hidden right-[-100%]"
        } `}
      >

        {/* pages navigation */}
        <ul className="flex-col lg:flex-row flex gap-[40px] lg:text-[16px] md:text-lg">
          <li>
            <NavLink
              to={"/"}
              onClick={() => setIsHamburgerClicked(false)}
              className={`${isHamburgerClicked ? "text-white" : ""}`}
            >
              My Feed
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              onClick={() => setIsHamburgerClicked(false)}
              className={`${isHamburgerClicked ? "text-white" : ""}`}
            >
             Followed Communities
            </NavLink>
          </li>
          <li>
            <p
              onClick={() => setIsHamburgerClicked(false)}
              className={`${isHamburgerClicked ? "text-white" : ""}`}
            >
              Events
            </p>
          </li>
          <li>
            <p
              onClick={() => setIsHamburgerClicked(false)}
              className={`${isHamburgerClicked ? "text-white" : ""}`}
            >
              Discussions/Messages
            </p>
          </li>
        </ul>
      </div>

      {/* hamburger menu icon */}
      <div
        onClick={handleClickedHamburger}
        className={`mt-8 -ml-5 cursor-pointer top-0 lg:hidden ${
          isHamburgerClicked ? "z-20 fixed" : "absolute"
        }`}
      >
        <div
          className={`h-1 w-[27px] bg-primary  duration-500 ${
            isHamburgerClicked
              ? "translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] bg-white"
              : ""
          } `}
        ></div>
        <div
          className={`h-1 w-[27px] bg-primary mt-2 duration-500 ${
            isHamburgerClicked
              ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg] bg-white"
              : ""
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
