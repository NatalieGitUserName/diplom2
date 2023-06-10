import s from './calendar.module.css'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from "react";
import axios from "axios";

let OfferCalendar = (props) => {
    const [offers, setOffers] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:3001/getOffers`).then(res => {setOffers(res.data)})
    }, [])
    

// console.log(offers)
    function tileClassName({ date, view }) {
        const dayOfWeek = date.getDay();
        let daysList = []
        for (let i = 0; i < props.offers.offersId.length; i++) {
            for (let j = 0; j < offers.length; j++) {
                if (props.offers.offersId[i] === offers[j].id) {
                    daysList.push(offers[j].day)
                    break
                }
            }
        }
        for (let i = 0; i < daysList.length; i++) {
            if (daysList[i] === "Monday") {daysList[i] = 1}
            if (daysList[i] === "Tuesday") {daysList[i] = 2}
            if (daysList[i] === "Wednesday") {daysList[i] = 3}
            if (daysList[i] === "Thursday") {daysList[i] = 4}
            if (daysList[i] === "Friday") {daysList[i] = 5}
            if (daysList[i] === "Saturday") {daysList[i] = 6}
            if (daysList[i] === "Sunday") {daysList[i] = 7}
        }



        if (dayOfWeek === 3) {
            return s.highlighted;
        }

        return null;
    }

    return(
        <div className={s.container}>
            <Calendar tileClassName={tileClassName} />

        </div>
    )
}

export default OfferCalendar