import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='HooBank logo' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((link, id) => (
          <li
            key={link.id}
            className={`font-poppins font-normal text-[16px] ${
              id === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-secondary cursor-pointer duration-300`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={navMenu ? close : menu}
          onClick={() => setNavMenu((prev) => !prev)}
          alt='menu'
          className='cursor-pointer w-[28px] h-[28px] object-contain'
        />
        <div
          className={`${
            navMenu ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((link, id) => (
              <li
                key={link.id}
                className={`font-poppins font-normal text-[16px] ${
                  id === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
