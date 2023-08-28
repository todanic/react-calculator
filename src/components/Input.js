import React from 'react';
import PropTypes from 'prop-types';
import { BsCurrencyEuro } from 'react-icons/bs';
import { LuCalculator } from 'react-icons/lu';

export default function Input(props) {
  const { value, onChange, label } = props;
  return (
    <div>
      <label className="flex items-center capitalize text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-md mb-3">
        <LuCalculator className="mr-4 mb-2 text-gray-900 text-2xl dark:text-primary" />
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <BsCurrencyEuro className="text-gray-600 text-md" />
        </span>
        <input
          className="pl-8 shadow-elements h-10 transition-all duration-300 ease-in-out dark:bg-white bg-gray-50 border border-gray-400 text-gray-900 text-md rounded-lg block w-full p-2"
          type="number"
          name="income"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
