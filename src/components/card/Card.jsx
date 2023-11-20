import "./Card.css"
export default function Card(props) {
   // id={Rick.id}
   // name={Rick.name}
   // status={Rick.status}
   // species={Rick.species}
   // gender={Rick.gender}
   // origin={Rick.origin.name}
   // image={Rick.image}
   // onClose={() => window.alert('Emulamos que se cierra la card')}
   return (
      <div id="card">
         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <h4>Id: {props.id}</h4>
         <h4>Status: {props.status}</h4>
         <h4>Specie: {props.spicies}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         <img src={props.image} alt={props.name} className="imgcard"/>
      </div>
   );
}
