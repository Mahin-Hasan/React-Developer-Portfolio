import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, favicon } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 glass backdrop-blur-md`}
        >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-1"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={favicon} alt="logo" className="w-9 h-9 object-contain" />
              <p className="text-white text-[18px] font-bold cursor-pointer flex">
                ahin&nbsp;
                <span className="md:block hidden">
                  <span className="text-[#8a50ae]">|</span>&nbsp;Web Developer
                </span>
              </p>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="list-none hidden sm:flex flex-row gap-1 md:gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-purple-500 border-b-2 border-purple-600 rounded-full"
                      : "text-secondary"
                  } hover:text-white sm:text-sm lg:text-[20px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <h4 className="px-2 py-2">
                    <a href={`#${link.id}`}>{link.title}</a>
                  </h4>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-gradient-to-r from-violet-900 to-fuchsia-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
