import { useState } from "react";
import "./SearchBar.css";
export default function SearchBar(props) {
   const [id, setId] = useState('');
   const handleChange = event =>{
      const {value} = event.target;
      setId(value)
   }
   return (
      <div  id="searchbar">
         <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
         />
         <button id="botoncin" onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
