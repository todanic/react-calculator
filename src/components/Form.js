import React from 'react';
import PropTypes from 'prop-types';
import { useSharedState } from '../context/Context';
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
  const navigation = useNavigate();
  const { income, setIncome, frequency, setFrequency, calculationType, setCalculationType } =
    useSharedState();
  const { dropdownValues, dropdownLabel, checkboxValues, checkboxLabel } = props;

  const handleInputChange = (event) => {
    setIncome(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCalculationType(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setFrequency(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation('/results');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto border-2 dark:border-primary border-gray-400 rounded-lg p-12">
      <div>
        <label
          className="text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-lg mb-3 block"
          htmlFor="income">
          Income:{' '}
        </label>
        <input
          className="transition-all duration-300 ease-in-out dark:bg-primary dark:text-white bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          type="number"
          id="income"
          name="income"
          value={income}
          onChange={handleInputChange}
        />
        <div className="relative mt-6 mb-6">
          <label
            className="mb-3 block text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-lg"
            htmlFor="frequency">
            {dropdownLabel}
          </label>
          <select
            onChange={handleDropdownChange}
            className="transition-all duration-300 ease-in-out capitalize dark:bg-primary dark:text-white bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
            {dropdownValues.map((value) => (
              <option
                className="dark:bg-primary dark:text-white text-gray-900 text-sm rounded-lg py-2 px-4"
                key={value}
                value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-lg mb-4">
            {checkboxLabel}
          </p>
          {checkboxValues.map((value) => (
            <label
              className="text-gray-900 dark:text-primary transition-all duration-300 ease-in-out font-bold tracking-2 text-sm"
              key={value}>
              <input
                type="checkbox"
                value={value}
                checked={calculationType === value}
                onChange={handleCheckboxChange}
              />{' '}
              {value}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="w-full mt-10 text-2x1 transition-all duration-300 ease-in-out uppercase tracking-2 dark:hover:bg-gray-900 border-2 dark:hover:text-primary border-transparent dark:border-primary bg-gray-900 dark:bg-primary text-white py-2 px-4 rounded-lg hover:bg-hover focus:outline-none focus:ring focus:ring-blue-200">
          Calculate
        </button>
      </div>
    </form>
  );
}
Form.propTypes = {
  dropdownValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkboxValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropdownLabel: PropTypes.string.isRequired,
  checkboxLabel: PropTypes.string.isRequired
};
