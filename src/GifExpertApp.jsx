import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {
        if(!categories.find(category => category === value))
            setCategories([value, ...categories]);
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onAddCategory={ onAddCategory }
            />
            { 
                categories.map(category => 
                    <GifGrid 
                    key={ category }
                    category={ category } />
                )
            }
        </>
    );
}