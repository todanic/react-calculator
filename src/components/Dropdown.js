import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown } from 'react-icons/fa';

export default function Dropdown(props) {
  const { options, label, selectedOption, onChange } = props;
  const [isActive, setIsActive] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    // Effect to focus on the selected list item when the dropdown becomes active
    if (isActive) {
      listRef.current?.querySelector(`li[data-value="${selectedOption}"]`).focus();
    }

    isActive
      ? document.addEventListener('mousedown', handleClickOutside)
      : document.removeEventListener('mousedown', handleClickOutside);

    //Removing the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  const handleClickOutside = (e) => {
    if (!listRef.current.parentNode?.contains(e.target)) {
      setIsActive(false);
    }
  };
  const handleKeyDown = (e) => {
    // Toggle dropdown visibility on Enter or Space key press
    if (e.key === 'Enter' || e.key === ' ') {
      setIsActive(!isActive);
    }
    // Handle arrow key navigation within the dropdown
    if (isActive && ['ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      const currentIndex = options.findIndex((option) => option.value === selectedOption);

      const newIndex =
        (currentIndex + (e.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;

      const newSelectedValue = options[newIndex].value;
      onChange(newSelectedValue);

      // Focus on the newly selected list item
      const newSelectedItem = listRef.current?.querySelector(
        `li[data-value="${newSelectedValue}"]`
      );
      if (newSelectedItem) {
        newSelectedItem.focus();
      }
    }
    if (e.key === 'Tab' && isActive) {
      e.preventDefault();
      setIsActive(false);
    }
  };
  return (
    <div>
      <label
        className="capitalize mb-5 block text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-md"
        htmlFor="frequency">
        {label}
      </label>
      <div
        className="relative inline-block w-full text-gray-900 text-md rounded-lg"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-expanded={isActive}
        aria-labelledby={`dropdown-label-${label}`}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="capitalize shadow-elements bg-gray-50 border border-gray-400 p-3 rounded-lg cursor-pointer flex justify-between items-center h-10">
          {selectedOption}
          <span className={isActive ? 'fas fa-caret-up' : 'fas fa-caret-down'} />
          <FaArrowDown
            className={`transition-all duration-300 ease-in-out ml-2 text-sm ${
              isActive ? 'transform rotate-180' : 'transform-none'
            }`}
          />{' '}
          {/* Add the icon here */}
        </div>
        <ul
          ref={listRef}
          tabIndex={0}
          className={`dropdown-content ${
            isActive ? 'block' : 'hidden'
          } absolute top-10 left-0 w-full  bg-gray-900 border-b rounded-b-lg dark:bg-white focus:bg-pink-500`}>
          {options.map((value) => (
            <li
              tabIndex={0}
              key={value.id}
              data-value={value.value}
              onClick={() => {
                onChange(value.value); // Call the onChange prop with the selected value
                setIsActive(false); // Close the dropdown
              }}
              className="focus:outline-none dark:focus:text-white transition-all duration-300 ease-in-out item px-4 py-3 cursor-pointer hover:bg-white text-white hover:text-gray-900 focus:text-gray-900 focus:bg-white dark:focus:bg-primary capitalize dark:hover:bg-primary dark:text-gray-900 dark:hover:text-white">
              {value.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired, // Pass the selected value as a prop
  onChange: PropTypes.func.isRequired // Pass the onChange event handler as a prop
};
