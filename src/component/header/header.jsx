import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {interactAction} from "../../store/clubReducer";
import {useDispatch} from "react-redux";

let Header = () => {

    const dispatch = useDispatch()

    return (
        <header>
            <span className={s.logoTitle}>Offers</span>
            <NavLink to="/" style={{zIndex: 5}}>
                <button className={s.logoHomeLink}
                        onMouseEnter={() => {dispatch(interactAction(true))}}
                        onMouseLeave={() => {dispatch(interactAction(false))}}>
                    Back to home page
                </button>
            </NavLink>
        </header>
    )
}

export default Header