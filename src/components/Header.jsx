import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="fixed top-0 left-0 bg-transparent w-full h-[70px] flex items-center justify-center backdrop-blur-md">
    <div className="flex justify-evenly items-center container py-4 text-xl">
      <h1 className="text-4xl font-bold text-white uppercase">titolo</h1>
      <div className="flex gap-4 items-center">
        <NavLink
          to="/"
          className={({isActive}) =>
              isActive ? "text-red-500 pointer-events-none cursor-default " : "hover:text-white hover:scale-150 transition-all"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) =>
              isActive ? "text-red-500 pointer-events-none cursor-default" : "hover:text-white hover:scale-125 transition-all"
          }
        >
          About
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;
