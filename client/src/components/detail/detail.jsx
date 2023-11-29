import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";



export default function Detail(props) {

   const URL = 'https://rym2.up.railway.app/api/character';
   const API_KEY = 'henrystaff'
   const {id} = useParams();
   const [ character, setCharacter ] = useState({})


   useEffect(() => {
      axios(`${URL}/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            console.log(data);
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setCharacter({});
   }, [id]);
   return (
      <div id="nav">
         <h1>Detail</h1>
         <h2>{character.name} </h2>
         <img src={character.image} alt={character.name} />
         <h3>Status: {character.status} </h3>
         <h3>Specie: {character.species} </h3>
         <h3>Gender: {character.gender} </h3>
         <h3>Origin: {character.origin?.name} </h3>
      </div>
   );
}