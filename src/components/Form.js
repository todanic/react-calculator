import React from 'react';
import { useFormSharedState } from '../context/FormContext';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { submitLabel } from '../const';
import Dropdown from './Dropdown';
import Input from './Input';
import RadioGroup from './RadioGroup';

export default function Form() {
  const { push } = useHistory();
  const { income, frequency, calculationType, setIncome, setFrequency, setCalculationType } =
    useFormSharedState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = parseInt(e.target.elements['income'].value);
    const dropdownValue = e.target.elements['dropdown'].value;
    const radioValue = e.target.elements['radio-group'].value;

    setIncome(inputValue);
    setFrequency(dropdownValue);
    setCalculationType(radioValue);
    push('/results');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-light dark:shadow-dark max-full  dark:border-primary rounded-lg p-12">
      <div>
        <div className="flex items-start flex-col sm:flex-row">
          <div className="sm:w-[70%] w-full pr-2">
            <Input value={income} />
          </div>
          <div className="sm:w-[30%] w-full sm:pl-2 ">
            <Dropdown defaultOption={frequency} />
          </div>
        </div>
        <RadioGroup defaultValue={calculationType} />
        <button
          type="submit"
          className="group relative flex items-center justify-center shadow-light w-full mt-12 text-lg transition-all duration-300 ease-in-out uppercase tracking-2 dark:hover:bg-white  bg-gradient-to-t  from-gray-900 to-gray-700 dark:from-red-600 dark:to-hover dark:bg-primary text-white py-3 px-4 rounded-lg hover:bg-hover">
          {submitLabel}
          <FaArrowRight
            className="ml-10 group-hover:ml-14 before:content-normal transition-all duration-300 ease-in-out"
            style={{}}
          />
        </button>
      </div>
    </form>
  );
}
