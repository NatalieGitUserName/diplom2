import s from './offer.module.css'
import Header from "../header/header";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {interactAction, setOffersAction, setSelectedOffersAction, setUserAction} from "../../store/clubReducer";
import axios from "axios";

let Offer = () => {

    const dispatch = useDispatch()
    const offer = useSelector(state => state.selectedOffer)
    const user = useSelector(state => state.user)
    const {id} = useParams()

    useEffect(() => {
        dispatch(interactAction(false))
        axios.get(`http://localhost:3001/getOffer?id=`+id).then(res => {dispatch(setSelectedOffersAction(res.data))})
    }, [])

    let subscribe = () => {
        let offersSub

        if (user.offersSub === null) {
            offersSub = {offersId: []}
        }
        else {
             offersSub = JSON.parse(user.offersSub)
        }

        let find = false
        for (let i = 0; i < offersSub.offersId.length; i++) {
            if (offersSub.offersId[i] === offer.id) {
                find = true;
                break;
            }
        }

        if (!find) {
            console.log(offersSub)
            offersSub.offersId.push(offer.id)

            axios.post('http://localhost:3001/subscribe',
                {
                    offersSub: offersSub,
                    id: user.id
                })
                .then(response => {
                    dispatch(setUserAction(response.data))
                })
                .catch(error => {
                    console.error(error);
                });
        } else {console.log(offersSub)}
    }

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
                        <div>
                            <button onClick={() => {subscribe()}}>Subscribe</button>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Offer