import { useState } from "react"

export const AddCategory = ( { onAddCategory } ) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        
        if(newInputValue.length <= 1) 
            return;

        onAddCategory(newInputValue);
        setInputValue('');
    }

    const onInputValueChange = e => setInputValue(e.target.value);

    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={ onInputValueChange }
                value={ inputValue }
            />
        </form>
    )
}