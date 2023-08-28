import React from 'react';
import PropTypes from 'prop-types';

export default function RadioGroup(props) {
  const { label, onChange, selectedValue, options } = props;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.click();
    }
  };
  return (
    <div className="mt-12">
      <p className="capitalize mb-4 text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-md">
        {label}
      </p>
      <div className="flex  justify-between gap-5">
        {options.map((option) => (
          <div className="w-[50%]" key={option.id}>
            <input
              type="radio"
              name={option.name}
              id={`${option.value}-button`}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              hidden
              className="peer/checked-label"
            />
            <label
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="tracking-2 dark::peer-checked/checked-label:to-hover dark:peer-checked/checked-label:bg-primary dark:peer-checked/checked-label:from-red-600 bg-gradient-to-t peer-checked/checked-label:from-gray-900 peer-checked/checked-label:to-gray-700 peer-checked/checked-label:text-white bg-gray-50 capitalize border border-gray-400 justify-center items-center w-full flex hover:bg-gray-900 hover:text-white button-label bg-efefef py-3 px-6 cursor-pointer rounded-md peer-checked/checked-label:shadow-none hover:shadow-none shadow-elements transition-all duration-300 ease-in-out hover:text-101010"
              id={`${option.value}-label`}
              htmlFor={`${option.value}-button`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired // Added label prop
    })
  ).isRequired
};
