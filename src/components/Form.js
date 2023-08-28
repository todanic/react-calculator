import React, { useState } from 'react';
import { useSharedState } from '../context/Context';
import { useHistory } from 'react-router-dom';
import Dropdown from './Dropdown';
import Input from './Input';
import RadioGroup from './RadioGroup';
import { FaArrowRight } from 'react-icons/fa';

export default function Form() {
  const { push } = useHistory();
  const { income, frequency, calculationType, setIncome, setFrequency, setCalculationType } =
    useSharedState();
  const [selectedOption, setSelectedOption] = useState(frequency);
  const [selectedRadioOption, setselectedRadioOption] = useState(calculationType);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleRadioGroupChange = (value) => {
    setselectedRadioOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = parseInt(e.target.elements['income'].value);

    setIncome(inputValue);
    setFrequency(selectedOption);
    setCalculationType(selectedRadioOption);
    push('/results');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-light dark:shadow-dark max-full  dark:border-primary rounded-lg p-12">
      <div>
        <div className="flex items-start">
          <div className="w-[70%] pr-2">
            <Input value={income} />
          </div>
          <div className="w-[30%] pl-2">
            <Dropdown selectedOption={selectedOption} onChange={handleOptionChange} />
          </div>
        </div>
        <RadioGroup onChange={handleRadioGroupChange} selectedValue={selectedRadioOption} />
        <button
          type="submit"
          className="relative flex items-center justify-center shadow-light w-full mt-12 text-lg transition-all duration-300 ease-in-out uppercase tracking-2 dark:hover:bg-white  bg-gradient-to-t  from-gray-900 to-gray-700 dark:from-red-600 dark:to-hover dark:bg-primary text-white py-3 px-4 rounded-lg hover:bg-hover">
          Calculate
          <FaArrowRight className="ml-10 hover:ml-14 before:content-normal" style={{}} />
        </button>
      </div>
    </form>
  );
}
