import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { value, onChange, label } = props;
  return (
    <div>
      <label className="text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-md mb-3 block">
        {label}
      </label>
      <input
        className="shadow-lg h-10 transition-all duration-300 ease-in-out dark:bg-white bg-gray-50 border border-gray-400 text-gray-900 text-md rounded-lg block w-full p-2"
        type="number"
        name="income"
        min="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
