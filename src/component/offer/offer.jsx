import s from './offer.module.css'
import Header from "../header/header";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {interactAction, setOffersAction, setSelectedOffersAction} from "../../store/clubReducer";
import axios from "axios";

let Offer = () => {

    const dispatch = useDispatch()
    const offer = useSelector(state => state.selectedOffer)
    const {id} = useParams()

    useEffect(() => {
        dispatch(interactAction(false))
        axios.get(`http://localhost:3001/getOffer?id=`+id).then(res => {dispatch(setSelectedOffersAction(res.data))})
    }, [])

    return(
        <div>
            <Header title={'Information about the session'}/>
            <main>
                <article className={s.articleParticularOffersDescription}>
                    <img className={s.gifImage} src={offer.photo} alt="GIF"/>
                    <div></div>
                    <div className={s.textOffersDescription}>
                        <p><span className={s.coloredText}>What? </span>{offer.whatText}</p>
                        <p><span className={s.coloredText}>When? </span>{offer.whenText}</p>
                        <p><span className={s.coloredText}>Who? </span>{offer.whoText}</p>
                        <p><span className={s.coloredText}>Where? </span>{offer.whereText}</p>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Offer