import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import "./Nav.css"
export default function Nav(props) {
    return (
       <div id="nav">
  
         <NavLink to={"/home"}>
            <button>Home</button>
         </NavLink>
         <NavLink to={"/about"}>
            <button>About</button>
         </NavLink>
         <SearchBar onSearch={props.onSearch} />

       </div>
    );
 }