import React from 'react';
import PropTypes from 'prop-types';

export default function RadioGroup(props) {
  const { label, onChange, selectedValue, options } = props;

  return (
    <div>
      <p className="text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-lg mb-4 mt-6">
        {label}
      </p>
      {options.map((option) => (
        <label
          className="text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-sm"
          key={option.id}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />{' '}
          {option.label}
        </label>
      ))}
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
