import SmiliLogo from "../../assets/smiliLogo.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="px-16 pt-5 md:px-20 md:pt-8 lg:px-24 lg:pt-11">
      <div className="flex items-center justify-between">
        <img src={SmiliLogo} alt="smili food logo" />
        <div>
          <ul className="flex items-center text-2xl lg:text-3xl font-medium">
            <li className="hidden md:block text-black">Solutions</li>
            <li className="hidden md:block text-black ml-5 lg:ml-10">Contact</li>
            <li className="hidden md:block text-black ml-5 lg:ml-10">Blog</li>
            <li className="ml-5 lg:ml-10">
              <button className="bg-[#3B3E3A] rounded-lg text-white px-5 md:px-6 py-2 md:py-3 lg:px-12 lg:py-5">
                Connexion
              </button>
            </li>
            <li className="md:hidden ml-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <GrMenu
                      className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Solutions
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Contact
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Blog
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;