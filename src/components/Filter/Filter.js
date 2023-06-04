import React from 'react';
import PropType from 'prop-types';


const Filter = ({ value, onChange }) => {
  return (
    <div>
      Find contacts by name:
      <br/>
      <input type="text" value={value} onChange={onChange} placeholder='search...'/>
    </div>
      
  );
};

Filter.propTypes = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Filter;