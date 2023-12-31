import { Link } from "react-router-dom";
import "./Card.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)
   const [ isFav, setIsFav] = useState(false);
   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(props.id))
      }else {
         setIsFav(true);
         dispatch(addFav(props))
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);
   return (
      <div id="card">
    
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => props.onClose(props.id)}>X</button>
            <h2>{props.name}</h2>
            <h4>Id: {props.id}</h4>
            <h4>Status: {props.status}</h4>
            <h4>Specie: {props.spicies}</h4>
            <h4>Gender: {props.gender}</h4>
            <h4>Origin: {props.origin}</h4>
         <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} className="imgcard"/>
         </Link>
      </div>
   );
}
