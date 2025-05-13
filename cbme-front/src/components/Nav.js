import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nav } from '../data';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <ul className="flex gap-x-10">
      {nav.map((item, index) => (
        <li 
          key={index}
          className="relative"
          onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
          onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
        >
          <Link 
            to={item.href} 
            className="flex items-center hover:text-redapi transition"
          >
            {item.name}
            {item.dropdown && (
              activeDropdown === index ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
            )}
          </Link>
          
          {item.dropdown && activeDropdown === index && (
            <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 min-w-[200px] z-10">
              {item.dropdown.map((dropdownItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={dropdownItem.href}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-redapi"
                >
                  {dropdownItem.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;