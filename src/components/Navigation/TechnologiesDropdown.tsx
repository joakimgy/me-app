import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";

const TechnologiesDropdown: React.FC = () => {
  return (
    <>
      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <Link
              to="/technologies"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <MenuIcon />
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">React</p>
              </div>
            </Link>

            <Link
              to="/technologies"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <MenuIcon />
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">Java</p>
              </div>
            </Link>

            <Link
              to="/technologies"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <MenuIcon />
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">Kotlin</p>
              </div>
            </Link>

            <Link
              to="/technologies"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <MenuIcon />
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">Tailwind</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologiesDropdown;
