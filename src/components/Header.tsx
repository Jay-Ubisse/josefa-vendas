import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X, ShoppingBag } from "@phosphor-icons/react";
import { HashLink } from "react-router-hash-link";
import { cart } from "../data/products"

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header
      className="h-32 bg-slate-100"
    >
      <section className="relative h-full flex justify-between items-center laptop:flex-row w-[95%] mx-auto">
        <div>
          <Link to="/" className="flex border-2 border-green-700 p-2 text-green-700">
            <h1 className="font-bold mobile:text-2xl">
              LOGOTIPO
            </h1>
          </Link>
        </div>
        <div
          className={`${menuState ? "mobile:flex bg-slate-100" : "mobile:hidden bg-transparent"
            } laptop:gap-2 mobile:gap-16 items-center laptop:flex laptop:flex-row-reverse mobile:flex-col mobile:w-screen laptop:w-fit mobile:h-screen laptop:h-fit laptop:overflow-hidden mobile:fixed laptop:relative top-0 left-0 mobile:pt-10 laptop:pt-0 z-30`}
        >
          <div className="flex flex-row justify-end mobile:w-full laptop:w-fit mobile:pb-12 laptop:pb-0">
            <X
              size={32}
              className="mr-5 laptop:hidden text-green-700"
              onClick={() => setMenuState(false)}
            />
          </div>
          <nav
            className="flex gap-6 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-lg text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit pr-2 text-green-700"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:border-b border-green-700 pb-2 ${isActive ? "border-b border-green-700 pb-2 font-semibold" : "border-none"
                }`
              }
            >
              Página inicial
            </NavLink>
            <NavLink
              to="/loja"
              className={({ isActive }) =>
                `hover:border-b border-green-700 pb-2 ${isActive ? "border-b border-green-700 pb-2 font-semibold" : "border-none"
                }`
              }
            >
              Loja
            </NavLink>
            <HashLink
              to="/#about"
              className="hover:border-b border-green-700 pb-2"
              onClick={() => setMenuState(false)}
            >
              Sobre nós
            </HashLink>
            <HashLink
              to="/#contact"
              className="hover:border-b border-green-700 pb-2"
              onClick={() => setMenuState(false)}
            >
              Contacto
            </HashLink>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <ShoppingBag
              size={32}
              className="laptop:hidden text-green-700"
            />
            <span className="text-white bg-green-700 w-5 h-5 text-sm rounded-[50%] flex items-center justify-center">
              {cart.length}
            </span>
          </div>
          <List
            size={32}
            className="laptop:hidden text-green-700"
            onClick={() => setMenuState(true)}
          />
        </div>
      </section>
    </header>
  );
};
