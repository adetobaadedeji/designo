import { DarkLogo } from "assets";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routeData } from "utils";

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setNavbar(false);
  }, [location]);

  return (
    <>
      <header className="block fixed w-full h-24 md:h-[9.688rem] bg-white z-50">
        <section className="w-[86.7%] h-[100%] md:w-[89.6%] md:max-w-[740px] lg:w-[92.2%] lg:max-w-[944px] xl:w-[86.72%] xl:max-w-[1110px]  mx-auto flex justify-between items-center">
          <Link to="/">
            <img
              src={DarkLogo}
              alt="designo dark logo"
              className="h-[1.688rem] "
            />
          </Link>

          {/* <section
        className="md:hidden w-6 h-auto flex justify-center items-center cursor-pointer ease-in-out duration-500"
        onClick={() => setNavbar(!navbar)}
      >
        <section
          className={`relative w-[100%] h-1 rounded-[1px] bg-black ease-in-out duration-500 after:absolute after:w-[100%] 
          after:h-1 after:rounded-[1px] after:bg-black after:ease-in-out after:duration-500 after:translate-y-[-7px] before:absolute 
          before:w-[100%] before:h-1 before:rounded-[1px] before:bg-black before:ease-in-out before:duration-500 before:translate-y-[7px]
         ${
           navbar &&
           "bg-transparent after:rotate-45 after:-translate-x-[5px] after:translate-y-[-5px] before:-rotate-45 before:-translate-x-[5px] before:-translate-y-[5px] "
         }
         `}
        ></section>
      </section> */}
          <section className="md:hidden">
            <button onClick={() => setNavbar((prev) => !prev)}>
              {navbar ? (
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
                    fill="#1D1C1E"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#1D1C1E" fill-rule="evenodd">
                    <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"></path>
                  </g>
                </svg>
              )}
            </button>
          </section>

          <nav className="hidden md:flex">
            <ul className="flex gap-10">
              {routeData.map(({ path, text }) => (
                <li
                  key={path.split("/")[1]}
                  className="uppercase tracking-[0.125rem] text-[0.875rem] relative 
                  after:block after:absolute after:bottom-0 after:w-full after:h-[1.5px] after:bg-gray-900 after:ease-in-out after:duration-300
                  after:scale-0 hover:after:scale-100"
                >
                  <Link to={path}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </header>

      {/* mobile navigation */}
      <section className="block md:hidden">
        <div
          className={`${
            navbar
              ? "z-10 pointer-events-auto bg-overlay"
              : "-z-10 pointer-events-none"
          } fixed inset-0 ease-in-out duration-500`}
        ></div>
        <nav
          className={`${
            navbar ? "translate-y-0" : "-translate-y-[100vw]"
          } bg-[#1D1C1E] h-[14.75rem] px-6 py-10 fixed inset-0 top-[6rem] ease-in-out duration-500 z-20 `}
        >
          <ul className="h-[100%] flex flex-col justify-between">
            {routeData.map(({ path, text }) => (
              <li
                key={path.split("/")[1]}
                className="text-white text-[1.5rem] uppercase tracking-widest"
                // onClick={() => setNavbar(false)}
              >
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};
