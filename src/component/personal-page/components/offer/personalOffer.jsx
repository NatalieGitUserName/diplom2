import s from './personalOffer.module.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserAction} from "../../../../store/clubReducer";


let PersonalOffer = (props) => {

    const [offer, setOffer] = useState({
        title: '',
        day: '',
        age: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:3001/getOffer?id=`+props.id).then(res => {setOffer(res.data)})
    }, [])


    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    console.log(props)
    let unsubscribe = () => {
        let offersSub
        if (user) {
            if (user.offersSub === null) {
                offersSub = {offersId: []}
            }
            else {
                offersSub = JSON.parse(user.offersSub)
            }

            let find = true
            for (let i = 0; i < offersSub.offersId.length; i++) {
                if (offersSub.offersId[i] === props.id) {
                    offersSub.offersId.splice(i, 1)
                    find = false;
                    break;
                }
            }

            console.log(find)

            if (!find) {
                // offersSub.offersId.push(props.id)

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
            }
        } else {
            alert('You are not authorized!')
        }
    }

    return (
        <div className={s.container}>
            <div>
                <span>{offer.title}</span>
                <span>Every {offer.day}</span>
                <span>Age: {offer.age}</span>
                <span>Time: {offer.time}</span>
            </div>
            <img src={offer.photo} style={{width: '300px'}} alt=""/>
            <button onClick={() => {unsubscribe()}}>Unsubscribe</button>
        </div>
    )
}

export default PersonalOffer