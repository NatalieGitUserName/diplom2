import s from "./login.module.css"
import InteractionPoint from "../points/interactionPoint/interactionPoint";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {interactAction} from "../../store/clubReducer";
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
let Login = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(interactAction(false))
    }, [])

    return (
        <body>
        <InteractionPoint onlyBig={true}/>
        <BluredInteractionPoint/>
        <div className={s.frame}>
            <div className={s.window}>
                <h1 className={s.pageTitle}
                    onMouseEnter={() => {dispatch(interactAction(true))}}
                    onMouseLeave={() => {dispatch(interactAction(false))}}>Login</h1>
                <br/>
                <strong className={s.errorMessage}
                        onMouseEnter={() => {dispatch(interactAction(true))}}
                        onMouseLeave={() => {dispatch(interactAction(false))}}>Алярм</strong>
                <br/>
                <div className={s.form}>
                    <input type="email" name="email" className={s.userEmail} placeholder="Email"
                           onMouseEnter={() => {dispatch(interactAction(true))}}
                           onMouseLeave={() => {dispatch(interactAction(false))}}/>

                    <input type="password" name="password" className={s.userPassword} placeholder="Password"
                           onMouseEnter={() => {dispatch(interactAction(true))}}
                           onMouseLeave={() => {dispatch(interactAction(false))}}/>

                    <input type="submit" className={s.submit} value="Submit"
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