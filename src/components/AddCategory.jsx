import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = (  event  ) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        console.log('Hello from Submit')
        event.preventDefault();
        const trimCategory = inputValue.trim()
        if(trimCategory.length <= 1) return;
        //setCategories(categories =>[ inputValue,...categories ]);
        onNewCategory(trimCategory);
        setInputValue('');   
    }

  return (
    <form onSubmit={ event => onSubmit(event) }
    aria-label="form">
        <input
            type="text"
            placeholder={"Search gifs"}
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}