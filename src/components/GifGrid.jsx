
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

 export const GifGrid = ({category, categories, setCategories}) => {
  const {images, isLoading} = useFetchGifs(category)

  const handleEliminar = ()=>{

    const newCategories = categories.filter((cat)=>{
      return cat !== category
    })

    setCategories(newCategories)
  }
   
   return (
        <>
            <h3>{category}</h3>
            <button
            type="button"
              className="btn-delete"
            onClick={handleEliminar}
            >X</button>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
            {
              images.map((img) =>(
                <GifItem 
                    key={img.id}
                    image={img}
                    />
              ))        
            }
            </div>
        </>
   )
 }
 
