import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios";
function App() {
   const [characters, setCharacters] = useState([]);
   const URL = 'https://rym2.up.railway.app/api/character/';
   const API_KEY = 'henrystaff'
   function onSearch(id) {
      axios(`${URL}${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }
   const onClose = (id) =>{
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <hr />
      
         <Cards id='cardsestilo' characters={characters} onClose={onClose} />

      </div>
   );
}

export default App;
