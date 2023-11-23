import React, { useState } from "react";
import validation from "../../utils/validation";
import "./Form.css";


export default function Form(props){
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });
    const [errors, setErrors] = useState({})
    const handleChange = (event) =>{
        const {name, value} = event.target;
        // console.log(name, value);
        setUserData({
            ...userData,
            [name]: value
        }  
        )
        setErrors(validation({
            ...userData,
            [name]: value
        }));
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData)
    }
    return(
        <div id="loginform">
            
            <form onSubmit={handleSubmit}>

                <label >Email: </label>
                <input
                    type="email"
                    key="email"
                    name="email"
                    value={userData.email}
                    placeholder="ingresar email"
                    onChange={handleChange}
                />
                <p>{errors.email}</p>
                
                <label>Password: </label>
                <input
                    type="password"
                    key="password"
                    name="password"
                    value={userData.password}
                    placeholder="ingresar contraseña"
                    onChange={handleChange}
                />
                <p>{errors.password}</p>

                <button
                    type="submit"
                    disabled={errors.password || errors.email}
                >Enviar</button>

            </form>
        </div>
    )
}