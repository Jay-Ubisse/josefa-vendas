import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import logotipo from "../assets/img/logo.jpg";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header
      className="h-32"
      id="mainHeader"
    >
      <section className="relative h-full flex justify-between items-center laptop:flex-row w-[95%] mx-auto">
        <div>
          <Link to="/" className="flex flex-row laptop:gap-1">
            <img
              src={logotipo}
              alt="logo"
              className="laptop:w-60 mobile:w-40"
            />
          </Link>
        </div>
        <div
          className={`${
            menuState ? "mobile:flex bg-gradient-to-tr from-red-800 to-app-blue-200" : "mobile:hidden bg-transparent"
          } laptop:gap-2 mobile:gap-16 items-center laptop:flex laptop:flex-row-reverse mobile:flex-col mobile:w-screen laptop:w-fit mobile:h-screen laptop:h-fit laptop:overflow-hidden mobile:fixed laptop:relative top-0 left-0 mobile:pt-10 laptop:pt-0 z-30`}
        >
          <div className="flex flex-row justify-end mobile:w-full laptop:w-fit mobile:pb-12 laptop:pb-0">
            <X
              size={32}
              color="white"
              className="mr-5 laptop:hidden"
              onClick={() => setMenuState(false)}
            />
          </div>
          <nav 
            className="flex gap-6 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-lg text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit pr-2"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              Our Projects
            </NavLink>
            <NavLink
              to="/websites"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              Our Websites
            </NavLink>
          </nav>
        </div>
        <List
          size={32}
          color="white"
          className="mr-5 laptop:hidden"
          onClick={() => setMenuState(true)}
        />
      </section>
    </header>
  );
};
