import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import About from './components/about/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/detail.jsx';
import Form from './components/form/Form.jsx';
import Nav from './components/nav/Nav.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';
function App() {
   const dispatch = useDispatch();
   const {pathname}= useLocation()
   const [characters, setCharacters] = useState([]);
   const API_KEY = 'henrystaff'
   async function onSearch(id) {
      try {
         const URL = 'https://rickandmortyapi.com/api/character';
         const charId = characters.filter(char => char.id === Number(id))
         if (charId.length) {
            return alert(`${charId[0].name} ya existe`)

         }

         const {data} = await axios.get(`${URL}/${id}`)
         if (data.name) {
            setCharacters([...characters, data]);
            navigate("/home")
         } else {
            alert('¡el id debe ser un numero entre 1 y 826!');
         }
      } catch (error) {
         alert(error.message);
      }
   }

   //!login
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'pass1234';
   
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         if (access) {
            setAccess(data);
            access && navigate('/home');
            
         } else {
            alert('credenciales incorrectas')
         }
      } catch (error) {
         alert(error.message)
      }

   }
   const onClose = (id) =>{
      setCharacters(characters.filter(char => char.id !== Number(id)))
      dispatch(removeFav(id))
   }
   useEffect(() => {
      !access && navigate('/');
      // !access && navigate('/home');
   }, [access]);

   return (
      <div className='App'>
         {console.log(pathname)}
         {
            pathname !== "/" ? <Nav onSearch={onSearch}/> : null
         }
         
         
         <Routes>
            <Route
               path='/'
               element={<Form login={login}/>}
            />
            <Route
               path='/home'
               element={<Cards id='cardsestilo' characters={characters} onClose={onClose} />}
            />
            <Route
               path='/favorites'
               element={<Favorites onClose={onClose}/>}
            />
            <Route
               path='/about'
               element={<About />}
            />
            <Route
               path='/detail/:id'
               element={<Detail />}
            />
         </Routes>
         
      
      </div>
   );
}

export default App;
