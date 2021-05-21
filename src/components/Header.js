import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* top nav */}

      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            className="cursor-pointer"
            src="https://links.papareact.com/f90"
            width={140}
            height={40}
            objectFit="contain"
          />
        </div>
        <div className="hidden sm:flex items-center rounded-md flex-grow cursor-pointer h-10 bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs mx-6 space-x-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Dipesh Gupta</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              4
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Best Sellers</p>
        <p className="link">Mobiles</p>
        <p className="link">Prime</p>
        <p className="link">Fashion</p>
        <p className="link hidden md:inline-flex">New Releases</p>
        <p className="link hidden md:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Amazon Business</p>
      </div>
    </header>
  );
}

export default Header;
