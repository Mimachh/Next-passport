import { useState } from "react";
import axios from "axios";

export default function Register() {

    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = () => {
        if(registerPassword === confirmPassword) {
            axios({
            method: "post",
            data: {
                username: registerUsername,
                password: registerPassword
                },
                withCredentials: true,
                url: "http://localhost:3001/register"
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        } else {
            console.log('pas bon');
        }
        
    }

    return (
       <div>
            <h1>Inscription</h1>
            <input type="text" name="username" placeholder="pseudo" onChange={e => setRegisterUsername(e.target.value) }></input>
            <input type="password" name="password" placeholder="mot de passe" onChange={e => setRegisterPassword(e.target.value) }></input>
            <input type="password" name="confirm_password" placeholder="Confirmez votre mot de passe" onChange={e => setConfirmPassword(e.target.value) }></input>

            <button onClick={register}>S'inscrire</button>
       </div> 
    )
}