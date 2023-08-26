import React from 'react';
import PropTypes from 'prop-types';
import { useSharedState } from '../context/TabContext';

function Dropdown(props) {
  const { frequency, setFrequency } = useSharedState();
  const { values } = props;

  const handleDropdownChange = (event) => {
    setFrequency(event.target.value);
  };

  return (
    <div>
      <label htmlFor="frequency">Frequency: </label>
      <select id="frequency" name="frequency" value={frequency} onChange={handleDropdownChange}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dropdown;
