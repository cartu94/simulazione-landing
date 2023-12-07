import { NavLink} from "react-router-dom";

const Footer = () => (
  <footer className="fixed bottom-0 left-0 bg-transparent w-full h-[50px] flex items-center justify-center backdrop-blur-md ">
    <div className="flex justify-center items-center container py-4 gap-4 mx-auto">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 pointer-events-none cursor-default"
            : "hover:text-white transition-all"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 pointer-events-none cursor-default"
            : "hover:text-white transition-all"
        }
      >
        About
      </NavLink>
      <h1>&copy; 2023</h1>
    </div>
  </footer>
);

export default Footer;
