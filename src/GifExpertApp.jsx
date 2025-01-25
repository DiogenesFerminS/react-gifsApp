import { useState } from "react"
import {AddCategory, GifGrid} from "./components/index";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory)=>{

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])

    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory={(value)=>onAddCategory(value)}
        />

        {categories.length == 0 && <h2 className="text-i">Empieza buscando tus gifs</h2>

        }
        {
            categories.map((category) =>
                (
                    <GifGrid
                        category={category}
                        setCategories={setCategories}
                        categories={categories}
                        key={category}
                    />
                )           
            )

        }
    </>
  )
}

export default GifExpertApp