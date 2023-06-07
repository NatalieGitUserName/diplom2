import s from './card.module.css'
import {interactAction} from "../../../../store/clubReducer";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

let Card = (props) => {

    const dispatch = useDispatch()

    return (
        <div className={s.card}>
            <div className={s.cardPicture} style={{backgroundImage: `url(${props.photo})`}}></div>
            <div className={s.cardText}>
                <div className={s.cardTextDetails}>
                    <div className={s.cardTextDetails}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24"
                             viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M10.992 18.28l-3.117-3.118a.374.374 0 0 1 0-.55l1.283-1.306c.16-.16.39-.16.55 0l1.559 1.559 3.002-3.025c.16-.16.39-.16.55 0l1.306 1.306c.16.16.16.39 0 .55l-4.583 4.583c-.16.16-.39.16-.55 0zM19.31 3.153c1.971 0 3.575 1.604 3.575 3.552v12.169a3.58 3.58 0 0 1-3.575 3.575H4.667c-1.948 0-3.552-1.604-3.552-3.575V6.706a3.57 3.57 0 0 1 3.552-3.552h.848v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h5.523v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h.848zm1.72 15.721v-9.19H2.97v9.19c0 .962.757 1.719 1.697 1.719H19.31c.963 0 1.72-.78 1.72-1.719zM7.37 5.194c-.503 0-.916-.413-.939-.94V2.031a.93.93 0 0 1 .94-.94c.527 0 .94.436.94.94v2.223c0 .527-.436.94-.94.94zm9.26 0a.93.93 0 0 1-.94-.94V2.031a.93.93 0 0 1 .94-.94c.526 0 .939.436.939.94v2.223c0 .527-.436.94-.94.94z"></path>
                        </svg>
                        <span>{props.day} | {props.time}</span>
                    </div>
                    <span>Ages {props.age}</span>
                </div>
                <h3>{props.title}</h3>
            </div>
            <NavLink
                onMouseEnter={() => {dispatch(interactAction(true))}}
                onMouseLeave={() => {dispatch(interactAction(false))}}
                className={s.cardButton} to={'/offer&number=' + props.id}>See more</NavLink>
        </div>
    )
}

export default Card