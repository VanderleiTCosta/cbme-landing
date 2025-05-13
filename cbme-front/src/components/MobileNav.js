import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nav } from '../data';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const MobileNav = ({ setMobileNav }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <ul className="h-full flex flex-col items-start gap-y-4 px-6 py-8">
      {nav.map((item, index) => (
        <li key={index} className="w-full">
          {item.dropdown ? (
            <div className="flex flex-col w-full">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium py-2">{item.name}</span>
                {activeDropdown === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {activeDropdown === index && (
                <div className="pl-4 w-full">
                  {item.dropdown.map((dropdownItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={dropdownItem.href}
                      onClick={() => setMobileNav(false)}
                      className="block py-2 text-gray-600 hover:text-redapi"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={item.href}
              onClick={() => setMobileNav(false)}
              className="text-lg font-medium py-2 hover:text-redapi block"
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;