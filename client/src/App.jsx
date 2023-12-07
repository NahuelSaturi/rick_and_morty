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
   const URL = 'https://rym2.up.railway.app/api/character';
   const API_KEY = 'henrystaff'
   function onSearch(id) {
      // axios(`${URL}/${id}?key=${API_KEY}`)
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
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
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
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
