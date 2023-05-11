import VersatileImg from "../../assets/varsatileImg.svg";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const Versatile = () => {
  return (
    <div className="flex items-center justify-between lg:px-24 pt-44">
      <img src={VersatileImg} alt="versatile image" />
      <div className="ml-24">
        <h1 className="text-5xl text-black font-semibold">
          Smili food le logiciel polyvalant{" "}
        </h1>
        <p className="text-2xl font-light mt-5 mb-14">
          Offrez une expérience de commande exceptionnelle pour vous et vos
          clients.
        </p>
        <div>
          <div className="w-full px-4 border-l-4 border-[#FFCA7A]">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-3xl font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className={`${open ? "text-black" : "text-[#93A093]"}`}>Menu connecté.</span>
                      <IoIosArrowDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-[#FFCA7A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      <p>
                        Créez votre menu en ligne en quelques cliques, et
                        partagez le sur vos tables avec de code QR. Modifiez le
                        en temp réel !
                      </p>
                      <button className="bg-[#FFCA7A] py-1 px-4 mt-2 rounded-xl text-white text-2xl font-medium">
                        Découvrir
                      </button>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-3xl font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className={`${open ? "text-black" : "text-[#93A093]"}`}>Commande en ligne.</span>
                      <IoIosArrowDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-[#FFCA7A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-3xl font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className={`${open ? "text-black" : "text-[#93A093]"}`}>Réservation table en ligne.</span>
                      <IoIosArrowDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-[#FFCA7A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-3xl font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className={`${open ? "text-black" : "text-[#93A093]"}`}>Carte connecté +.</span>
                      <IoIosArrowDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-[#FFCA7A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versatile;
