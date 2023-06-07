import s from "./offers.module.css"
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Card from "./componets/card/card";
import {useEffect} from "react";
import axios from "axios";
import {interactAction, setOffersAction} from "../../store/clubReducer";
import Header from "../header/header";
import InteractionPoint from "../points/interactionPoint/interactionPoint";
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";

let Offers = () => {

    const dispatch = useDispatch()
    const stateOffers = useSelector(state => state.offers)

    useEffect(() => {
        dispatch(interactAction(false))
        axios.get(`http://localhost:3001/getOffers`).then(res => {dispatch(setOffersAction(res.data))})
    }, [])

    const offersList = stateOffers.map((offers) => {return <Card key={offers.id} id={offers.id} title={offers.title} time={offers.time} day={offers.day} age={offers.age} photo={offers.photo}/>})

    return (
        <div className={s.container}>
            <BluredInteractionPoint/>
            <InteractionPoint onlyBig={true}/>
            <Header title={'Offers'}/>
            <div>
                <article>
                    <div className={s.catalogue}>
                        {offersList}
                    </div>

                </article>
            </div>
        </div>
    )
}

export default Offers