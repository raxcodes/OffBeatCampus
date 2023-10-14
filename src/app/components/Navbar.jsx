import Link from 'next/link';
import Image from 'next/image';
import { SearchBar } from './components';

const Navbar = () => {
  return (
    <header>
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="https://flowbite.com">
            <div className="flex items-center">
              <Image src="/assets/logo.png" alt="Flowbite Logo" width={40} height={40} />
              <span className="self-center text-xl whitespace-nowrap font-extrabold ml-4 text-white">Off Beat Campus</span>
            </div>
          </Link>
         
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0 text-white font-bold">
             <li className=' cursor-pointer hover: border-red-50'>Home</li>
             <li className=' cursor-pointer hover: border-red-50'>Explore</li>
             <li className=' cursor-pointer hover: border-red-50'>Marketplace</li>
             <li className=' cursor-pointer hover: border-red-50'>About</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
