import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = (  event  ) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const trimCategory = inputValue.trim()
        if(trimCategory.length <= 1) return;
        //setCategories(categories =>[ inputValue,...categories ]);
        onNewCategory(trimCategory);
        setInputValue('');   
    }

  return (
    <form onSubmit={ event => onSubmit(event) }>
        <input
            type="text"
            placeholder={"Search gifs"}
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}

