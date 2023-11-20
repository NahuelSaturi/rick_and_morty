import SearchBar from "../searchbar/SearchBar";
import "./Nav.css"
export default function Nav(props) {
    return (
       <div id="nav">
            <SearchBar onSearch={props.onSearch} />

       </div>
    );
 }