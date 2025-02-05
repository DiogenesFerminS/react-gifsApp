import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e)=>{
        const {value} = e.target;
        setInputValue(value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;
         
        onNewCategory(inputValue);
        
        setInputValue('')
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <input 
            type="text"
            value={inputValue}
            placeholder="Buscador de gifs"
            onChange={handleChange} 
        />
    </form>
  )
}
