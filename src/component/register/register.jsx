import s from "../login/login.module.css"
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {interactAction, setOffersAction} from "../../store/clubReducer";
import {useDispatch} from "react-redux";

let Register = () => {

    const [data, setDate] = useState(
        {
            username: '',
            email: '',
            password1: '',
            password2: '',
        }
    )

    const dispatch = useDispatch()

    useEffect(() => {dispatch(interactAction(false))}, [])

    let register = () => {
        if (data.username !== '' && data.email !== '' && data.password1 !== '' && data.password2 !== '' && data.password1 === data.password2) {
            axios.post('http://localhost:3001/register', {
                username: data.username,
                email: data.email,
                password: data.password1
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    return (
        <body>
            <div className={s.frame}>
            <div className={s.window}>
                <h1 className={s.pageTitle}>Register</h1>
                <br/>
                <strong className={s.errorMessage}>Алярм</strong>
                <br/>
                <div className={s.form}>
                    <input type="text" name="name" className={s.userEmail} value={data.username} onInput={event => {setDate({...data, username: event.target.value})}} placeholder="Name"/>

                    <input type="email" name="email" className={s.userEmail} value={data.email} onInput={event => {setDate({...data, email: event.target.value})}} placeholder="Email"/>

                    <input type="password" name="password" className={s.userPassword} value={data.password1} onInput={event => {setDate({...data, password1: event.target.value})}} placeholder="Password"/>

                    <input type="password" name="password" className={s.userPassword} value={data.password2} onInput={event => {setDate({...data, password2: event.target.value})}} placeholder="Repeat password"/>

                    <input type="submit" onClick={register} className={s.submit} value="Submit"/>
                </div>

                <p>Have an account? <NavLink className={s.link} to="/login">Login</NavLink></p>
            </div>
            </div>
        </body>
    )
}

export default Register