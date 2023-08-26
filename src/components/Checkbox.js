import React from 'react';
import PropTypes from 'prop-types';
import { useSharedState } from '../context/TabContext';

function Checkbox(props) {
  const { calculationType, setCalculationType } = useSharedState();
  const { label, values } = props;

  const handleCheckboxChange = (event) => {
    setCalculationType(event.target.value);
  };

  return (
    <div>
      <p>{label}</p>
      {values.map((value) => (
        <label key={value}>
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
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Checkbox;
