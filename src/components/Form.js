import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSharedState } from '../context/Context';
import { useHistory } from 'react-router-dom';
import Dropdown from './Dropdown';
import Input from './Input';
import RadioGroup from './RadioGroup';

export default function Form(props) {
  const { dropdownValues, dropdownLabel, radioOptions, radioLabel, inputLabel } = props;
  const { income, frequency, calculationType, setIncome, setFrequency, setCalculationType } =
    useSharedState();
  const history = useHistory();
  const [inputValue, setInputValue] = useState(income);
  const [selectedOption, setSelectedOption] = useState(frequency);
  const [selectedRadioOption, setselectedRadioOption] = useState(calculationType);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleRadioGroupChange = (value) => {
    setselectedRadioOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidInput = !isNaN(inputValue) && parseInt(inputValue) >= 1;

    if (isValidInput) {
      setIncome(inputValue);
      setFrequency(selectedOption);
      setCalculationType(selectedRadioOption);
      history.push('/results');
    } else {
      // Show error message or provide feedback to the user
      alert('Invalid input. Please enter a valid number greater than or equal to 1.');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-light dark:shadow-dark max-full  dark:border-primary rounded-lg p-12">
      <div>
        <div className="flex items-start">
          <div className="w-[70%] pr-2">
            <Input value={inputValue} onChange={handleInputChange} label={inputLabel} />
          </div>
          <div className="w-[30%] pl-2">
            <Dropdown
              selectedOption={selectedOption}
              options={dropdownValues}
              label={dropdownLabel}
              onChange={handleOptionChange}
            />
          </div>
        </div>

        <RadioGroup
          options={radioOptions}
          label={radioLabel}
          onChange={handleRadioGroupChange}
          selectedValue={selectedRadioOption}
        />
        <button
          type="submit"
          className="shadow-light w-full mt-12 text-2x1 transition-all duration-300 hover:opacity-70 ease-in-out uppercase tracking-2 dark:hover:bg-white  bg-gradient-to-t  from-gray-900 to-gray-700 dark:from-red-600 dark:to-hover dark:bg-primary text-white py-3 px-4 rounded-lg hover:bg-hover  ">
          Calculate
        </button>
      </div>
    </form>
  );
}
Form.propTypes = {
  dropdownValues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  radioOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  dropdownLabel: PropTypes.string.isRequired,
  radioLabel: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired
};
