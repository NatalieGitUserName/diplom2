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
            <div>
                <span>{offer.title}</span>
                <span>{offer.day}</span>
                <span>{offer.age}</span>
                <span>{offer.time}</span>
            </div>
            <img src={offer.photo} style={{width: '300px'}} alt=""/>
        </div>
    )
}

export default PersonalOffer