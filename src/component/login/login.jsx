import s from "./login.module.css"
import InteractionPoint from "../points/interactionPoint/interactionPoint";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {interactAction, setUserAction} from "../../store/clubReducer";
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import axios from "axios";
import {useNavigate} from "react-router-dom";

let Login = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [data, setDate] = useState(
        {
            username: '',
            password: ''
        }
    )

    useEffect( () => {dispatch(interactAction(false))}, [])

    let login = () => {
        if (data.username !== '' && data.password !== '') {
            axios.post('http://localhost:3001/login', {
                username: data.username,
                password: data.password
            })
                .then(response => {
                    dispatch(setUserAction(response.data))
                    navigate('/personal-page')
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
    console.log(data)

    return (
        <body className={s.login}>
        <InteractionPoint onlyBig={true}/>
        <BluredInteractionPoint/>
        <div className={s.frame}>
            <div className={s.window}>
                <h1 className={s.pageTitle}>Login</h1>
                <br/>
                <strong className={s.errorMessage}>Алярм</strong>
                <br/>
                <div className={s.form}>
                    <input type="email" name="email" className={s.userEmail} value={data.username} onChange={e => {setDate({...data, username: e.target.value})}} placeholder="Email or username"
                           onMouseEnter={() => {dispatch(interactAction(true))}}
                           onMouseLeave={() => {dispatch(interactAction(false))}}/>

                    <input type="password" name="password" className={s.userPassword} value={data.password} onChange={e => {setDate({...data, password: e.target.value})}} placeholder="Password"
                           onMouseEnter={() => {dispatch(interactAction(true))}}
                           onMouseLeave={() => {dispatch(interactAction(false))}}/>

                    <input type="submit" onClick={() => {login()}} className={s.submit} value="Submit"
                           onMouseEnter={() => {dispatch(interactAction(true))}}
                           onMouseLeave={() => {dispatch(interactAction(false))}}/>
                </div>

                <p>Don't have an account? <a className={s.link} href="/register"
                                             onMouseEnter={() => {dispatch(interactAction(true))}}
                                             onMouseLeave={() => {dispatch(interactAction(false))}}>Singup</a></p>
            </div>
        </div>
        </body>
    )
}

export default Login