import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown } from 'react-icons/fa';
import { dropdownOptions, dropdownLabel } from '../const';
import { handleKeyDown } from '../utils/keydownDropdown';

export default function Dropdown(props) {
  const { defaultOption } = props;
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const listRef = useRef(null);

  useEffect(() => {
    // Effect to focus on the selected list item when the dropdown becomes active
    if (isActive) {
      const selectedListItem = listRef.current?.querySelector(`li[data-value="${selectedOption}"]`);
      selectedListItem?.focus();
      document.addEventListener('mousedown', handleClickOutside);
    }

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

  const onKeyDown = (e) => {
    handleKeyDown(e, isActive, setIsActive, selectedOption, onChange, listRef, dropdownOptions);
  };

  const onChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <label
        className="capitalize sm:mb-5 mb-2 sm:mt-0 mt-6 block text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-md"
        htmlFor="frequency">
        {dropdownLabel}
      </label>
      <input name="dropdown" hidden readOnly value={selectedOption} />
      <div
        onKeyDown={onKeyDown}
        className="relative inline-block w-full text-gray-900 text-md rounded-lg">
        <div
          tabIndex={0}
          role="button"
          aria-expanded={isActive}
          aria-label={`dropdown-label-${dropdownLabel} ${selectedOption}`}
          aria-haspopup="true"
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="tracking-2 capitalize shadow-elements bg-gray-50 border border-gray-400 p-3 rounded-lg cursor-pointer flex justify-between items-center h-10">
          {selectedOption}
          <span className={isActive ? 'fas fa-caret-up' : 'fas fa-caret-down'} />
          <FaArrowDown
            className={` transition-all duration-300 ease-in-out ml-2 text-sm ${
              isActive ? 'transform rotate-180' : 'transform-none'
            }`}
          />
        </div>
        <ul
          ref={listRef}
          tabIndex={0}
          className={`dropdown-content ${
            isActive ? 'block' : 'hidden'
          } absolute top-10 left-0 w-full  bg-gray-900 border-b rounded-b-lg dark:bg-white focus:bg-pink-500 rounded-lg z-10 tracking-2 border-l border-r`}>
          {dropdownOptions.map((value, index) => (
            <li
              tabIndex={0}
              key={value.id}
              data-value={value.value}
              onClick={() => {
                onChange(value.value);
                setIsActive(false);
              }}
              className={`focus:outline-none dark:focus:text-white transition-all duration-300 ease-in-out item px-4 py-4 cursor-pointer hover:bg-white text-white hover:text-gray-900 focus:text-gray-900 focus:bg-white  dark:focus:bg-primary dark:focus:from-red-600 dark:focus:to-hover capitalize bg-gradient-to-t dark:hover:bg-primary   dark:hover:from-red-600 dark:hover:to-hover dark:text-gray-900 dark:hover:text-white ${
                index === 0 ? 'rounded-tl-lg rounded-tr-lg' : ''
              } ${index === dropdownOptions.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}>
              {value.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  defaultOption: PropTypes.string.isRequired
};
