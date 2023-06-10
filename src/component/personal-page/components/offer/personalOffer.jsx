import s from './personalOffer.module.css'
import axios from "axios";
import {useEffect, useState} from "react";


let PersonalOffer = (props) => {

    const [offer, setOffer] = useState({
        title: '',
        day: '',
        age: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:3001/getOffer?id=`+props.id).then(res => {setOffer(res.data)})
    }, [])


    return (
        <div className={s.container}>
            <br/>
            <br/>
            <span>Offer id: {props.id}</span>
            <br/>
            <span>Offer title: {offer.title}</span>
            <br/>
            <span>Offer day: {offer.day}</span>
            <br/>
            <span>Offer age: {offer.age}</span>
            <br/>
            <span>Offer time: {offer.time}</span>
            <br/>
            <span>Photo:</span>
            <br/>
            <img src={offer.photo} style={{width: '300px'}} alt=""/>
        </div>
    )
}

export default PersonalOffer