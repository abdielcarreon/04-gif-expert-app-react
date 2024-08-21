import { useState } from "react";

import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

    const [ categories, setCategories ] = useState([])
    
    const onAddCategory = ( newCategory ) => {
      if(categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories])
    }


  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory 
      onNewCategory={ value => onAddCategory(value) }
      />
      
      
        { categories.map( category => 
          <GiftGrid key={ category } category={ category }/>  
        ) }
    

      
    </>
  )
}
