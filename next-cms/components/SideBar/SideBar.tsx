import React, { useState } from "react";
import Link from "next/link";
import { routes } from "../../routes/admin.routes";
import { useRouter } from "next/dist/client/router";

const SideBar = () => {
  const [collapseShow, setCollapseShow] = useState<string>("hidden");
  const { pathname } = useRouter();

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 ">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-4 md:px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* toggle */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars text-gray-800"></i>
          </button>
          {/* toggle */}

          <div className="py-4 px-6">
            {/* brand */}
            <Link href="/">
              <a className="md:block text-left md:pb-2 text-gray-800 mr-0 inline-block whitespace-no-wrap text-lg uppercase font-bold p-4 px-0">
                NextJs CMS
              </a>
            </Link>
            {/* brand */}
          </div>

          {/* user  */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">{/* <UserDropdown /> */}</li>
          </ul>
          {/* user  */}

          {/* collapse  */}
          <div
            className={` md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
          >
            {/* collapse header  */}
            <div className=" md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
                      NextJs CMS
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* collapse header  */}

            {/* search form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0 pb-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-0 h-10 border border-solid  border-gray-600 placeholder-gray-400 text-gray-100 bg-gray-700 rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* search form */}

            {/* navigation  */}
            <div>
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                {routes &&
                  routes.map((route, index) => {
                    return (
                      <li key={index} className="items-center  ">
                        <Link href={route.route}>
                          <a
                            className={`transition px-5 hover:bg-gray-50 ease-linear duration-150  text-sm
                          ${
                            route.route === pathname
                              ? "text-blue-500 hover:text-blue-400 bg-blue-50"
                              : "text-gray-700 hover:text-gray-500"
                          }
                         text-xs uppercase py-4  block`}
                          >
                            <i className={`${route.icon}`}></i> {route.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}

                {/* <li className="items-center">
                <Link href="/blog">
                <a className="text-gray-100 hover:text-gray-500 text-xs uppercase py-4 font-bold block">
                <i className="fas fa-newspaper text-gray-500 mr-2 text-sm"></i>{" "}
                Blog
                  </a>
                </Link>
                </li>
              <li className="items-center">
              <Link href="/">
              <a className="text-gray-100 hover:text-gray-500 text-xs uppercase py-4 font-bold block">
              <i className="fas fa-newspaper text-gray-500 mr-2 text-sm"></i>{" "}
              Landing Page
                  </a>
                </Link>
                </li>

              <li className="items-center">
              <Link href="/">
              <a className="text-gray-100 hover:text-gray-500 text-xs uppercase py-4 font-bold block">
              <i className="fas fa-user-circle text-gray-500 mr-2 text-sm"></i>{" "}
              Profile Page
                  </a>
                  </Link>
              </li>

              <li className="items-center">
              <Link href="/">
                  <a className="text-gray-100 hover:text-gray-500 text-xs uppercase py-4 font-bold block">
                  <i className="fas fa-fingerprint text-gray-500 mr-2 text-sm"></i>{" "}
                    Login
                    </a>
                </Link>
                </li>
                
                <li className="items-center">
                <a
                className="text-gray-400 text-xs uppercase py-3 font-bold block"
                href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                <i className="fas fa-clipboard-list text-gray-400 mr-2 text-sm"></i>{" "}
                Register (soon)
                </a>
                </li>

                <li className="items-center">
                <a
                className="text-gray-400 text-xs uppercase py-3 font-bold block"
                href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  >
                  <i className="fas fa-tools text-gray-400 mr-2 text-sm"></i>{" "}
                  Settings (soon)
                </a>
            </li> */}
              </ul>
            </div>
            {/* navigation  */}
          </div>
          {/* collapse  */}
        </div>
      </nav>
    </>
  );
};

export default SideBar;
