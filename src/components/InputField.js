import React from 'react';
import { useSharedState } from '../context/TabContext';

function InputField() {
  const { income, setIncome } = useSharedState();

  const handleInputChange = (event) => {
    setIncome(event.target.value);
  };

  return (
    <div>
      <label className="text-primary font-bold" htmlFor="income">
        Income:{' '}
      </label>
      <input
        className="dark:bg-primary dark:text-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        type="number"
        id="income"
        name="income"
        value={income}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputField;
