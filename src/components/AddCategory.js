import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {
  
  const [inputValue, setinputValue] = useState('');
  
  const handleinputChange = (e) => {
     setinputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length>2){
    // console.log('Submit hecho');
      setCategories( (cate => [inputValue, ...cate ]));
      setinputValue('');
    }
    
    
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
        type= "text"
        value= {inputValue}
        onChange={ handleinputChange }
        />
    </form>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
