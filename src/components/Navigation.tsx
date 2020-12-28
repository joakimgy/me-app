import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./Navigation/MobileMenu";
import TechnologiesDropdown from "./Navigation/TechnologiesDropdown";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setShowTechnologies(false);
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Home</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {showMobileMenu && (
              <MobileMenu closeMenu={() => setShowMobileMenu(false)} />
            )}
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About me
            </Link>
            <Link
              to="/projects"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Projects
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowTechnologies(!showTechnologies)}
                type="button"
                className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Technologies</span>

                <svg
                  className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showTechnologies && <TechnologiesDropdown />}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
