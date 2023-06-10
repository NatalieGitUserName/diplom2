import s from './personalPage.module.css'
import Header from "../header/header";
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import axios from "axios";
import {setUserAction} from "../../store/clubReducer";
import profile from '../../img/profile.png'
import PersonalOffer from "./components/offer/personalOffer";
import OfferCalendar from "./components/calendar/calendar";

let PersonalPage = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    let userCopy = {...user}

    const [persInfo, setPersInfo] = useState({
        firstName: null,
        secondName: null,
        thirdName: null,
        birthday: null,
        photo: null,
        id: user.id
    })

    if (userCopy.firstName == null) {
        userCopy.firstName = ''
    }

    let photoLoad = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setPersInfo({...persInfo, photo: base64})
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    let saveFirstName = () => {
        axios.post('http://localhost:3001/setFirstName',
            {
                firstName: persInfo.firstName,
                id: persInfo.id
            })
            .then(response => {
                dispatch(setUserAction(response.data))
            })
            .catch(error => {
                console.error(error);
            });
    }

    let saveSecondName = () => {
        axios.post('http://localhost:3001/setSecondName',
            {
                secondName: persInfo.secondName,
                id: persInfo.id
            })
            .then(response => {
                dispatch(setUserAction(response.data))
            })
            .catch(error => {
                console.error(error);
            });
    }

    let saveThirdName = () => {
        axios.post('http://localhost:3001/setThirdName',
            {
                thirdName: persInfo.thirdName,
                id: persInfo.id
            })
            .then(response => {
                dispatch(setUserAction(response.data))
            })
            .catch(error => {
                console.error(error);
            });
    }

    let savePhoto = () => {
        axios.post('http://localhost:3001/setPhoto',
            {
                photo: persInfo.photo,
                id: persInfo.id
            })
            .then(response => {
                dispatch(setUserAction(response.data))
            })
            .catch(error => {
                console.error(error);
            });
    }

    let saveBirthday = () => {
        axios.post('http://localhost:3001/setBirthday',
            {
                birthday: persInfo.birthday,
                id: persInfo.id
            })
            .then(response => {
                dispatch(setUserAction(response.data))
            })
            .catch(error => {
                console.error(error);
            });
    }

    let offers
    if (user.offersSub !== null) {
        offers = JSON.parse(user.offersSub).offersId.map(e => <PersonalOffer key={e} id={e}/>)
    }
    return (
        <div className={s.container}>
            <BluredInteractionPoint/>
            <Header title={`Hello ${userCopy.firstName}`}/>

            <div className={s.infoBlockContainer}>
                <div className={s.infoBlock}>
                    <div className={s.avatar}
                         style={{backgroundImage: user.photo !== null ? `url(${user.photo})` : `url(${profile})`}}></div>
                    <span>Your name: {user.firstName !== null ? user.firstName : 'missing'}</span>
                    <br/>
                    <span>Your second name: {user.secondName !== null ? user.secondName : 'missing'}</span>
                    <br/>
                    <span>Your third name: {user.thirdName !== null ? user.thirdName : 'missing'}</span>
                    <br/>
                    <span>Your birthday: {user.birthday !== null ? user.birthday.toString().slice(0, 10) : 'missing'}</span>
                    <br/>
                </div>
            </div>
            <div className={s.changeInfoContainer}>
                <div className={s.changeInfo}>
                    <span>Change first name</span>
                    <input type="text" value={persInfo.firstName} onChange={(e) => {
                        setPersInfo({...persInfo, firstName: e.target.value})
                    }}/>
                    <button onClick={() => {
                        saveFirstName()
                    }}>Save first name
                    </button>
                    <br/>
                    <span>Change first name</span>
                    <input type="text" value={persInfo.secondName} onChange={(e) => {
                        setPersInfo({...persInfo, secondName: e.target.value})
                    }}/>
                    <button onClick={() => {
                        saveSecondName()
                    }}>Save second name
                    </button>
                    <br/>
                    <span>Change third name</span>
                    <input type="text" value={persInfo.thirdName} onChange={(e) => {
                        setPersInfo({...persInfo, thirdName: e.target.value})
                    }}/>
                    <button onClick={() => {
                        saveThirdName()
                    }}>Save third name
                    </button>
                    <br/>
                    <span>Change photo</span>
                    <input type="file" onChange={(e) => {
                        photoLoad(e).then()
                    }}/>
                    <button onClick={() => {
                        savePhoto()
                    }}>Save photo
                    </button>
                    <br/>
                    <span>Change birthday</span>
                    <input type="date" onChange={(e) => {
                        setPersInfo({...persInfo, birthday: e.target.value})
                    }}/>
                    <button onClick={() => {
                        saveBirthday()
                    }}>Save birthday
                    </button>
                </div>
            </div>
            <div className={s.offersContainer}>
                <div className={s.offers}>
                    <span>Your subscribes on offer</span>
                    <br/>
                    {user.offersSub === null ? <span>you are not a suscribe on offers</span> :
                    <div>
                        {offers}
                    </div>
                    }
                </div>
            </div>
            <div className={s.offersCalendar}>
                <div className={s.calendar}>
                    <OfferCalendar offers={JSON.parse(user.offersSub)}/>
                </div>
            </div>
        </div>
    )
}

export default PersonalPage