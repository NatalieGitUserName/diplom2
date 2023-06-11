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
    const [stateOfDivSlyle, setNewStyle] = useState(false);

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

    console.log(persInfo)

    return (
        <div className={s.container}>
            <BluredInteractionPoint/>
            <Header title={`Hello ${userCopy.firstName}`}/>
            <main>
            
                <div className={s.infoBlockContainer}>
                    <div className={s.infoBlock} style={{borderBottomRightRadius: stateOfDivSlyle ? '0' : '20px', borderBottomLeftRadius: stateOfDivSlyle ? '0' : '20px'}}>
                        <div className={s.container4Button}>
                            <button onClick={() => {
                                setNewStyle(!stateOfDivSlyle);
                            }}>Settings</button>
                        </div>
                        <div className={s.infoBlockFlex}> 
                            <div className={s.avatar}
                                style={{backgroundImage: user.photo !== null ? `url(${user.photo})` : `url(${profile})`}}></div>
                            <div className={s.personalInfoBlock}>
                                <span>{user.secondName !== null ? user.secondName : 'Surname'} {user.firstName !== null ? user.firstName : 'Name'} {user.thirdName !== null ? user.thirdName : 'Patronymic'}</span>
                                <p>{user.birthday !== null ? user.birthday.toString().slice(0, 10) : 'Your birthday'}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
        
                <div style={stateOfDivSlyle ? {display: 'flex'} : {display: 'none'} } className={s.changeInfoContainer}>
                    <div className={s.changeInfo}>
                        <div>
                            <div className={s.changeInfoField}>
                                <span>Change first name</span>
                                <div className={s.changeInfoButtons}>
                                    <input type="text" value={persInfo.firstName} onChange={(e) => {
                                        setPersInfo({...persInfo, firstName: e.target.value})
                                    }}/>
                                    <button onClick={() => {
                                        saveFirstName()
                                    }}>Save first name
                                    </button>
                                </div>
                            </div>

                            <div className={s.changeInfoField}>
                                <span>Change second name</span>
                                <div className={s.changeInfoButtons}>
                                    <input type="text" value={persInfo.secondName} onChange={(e) => {
                                        setPersInfo({...persInfo, secondName: e.target.value})
                                    }}/>
                                    <button onClick={() => {
                                        saveSecondName()
                                    }}>Save second name
                                    </button>
                                </div>
                            </div>

                            <div className={s.changeInfoField}>
                                <span>Change third name</span>
                                <div className={s.changeInfoButtons}>
                                    <input type="text" value={persInfo.thirdName} onChange={(e) => {
                                        setPersInfo({...persInfo, thirdName: e.target.value})
                                    }}/>
                                    <button onClick={() => {
                                        saveThirdName()
                                    }}>Save third name
                                    </button>
                                </div>
                            </div>

                            <div className={s.changeInfoField}>
                                <span>Change birthday</span>
                                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}} className={s.changeInfoButtons}>
                                    <input style={{width: '210px'}} type="date" onChange={(e) => {
                                        setPersInfo({...persInfo, birthday: e.target.value})
                                    }}/>
                                    <button onClick={() => {
                                        saveBirthday()
                                    }}>Save birthday
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={s.changeInfoField}>
                                <span>Change photo</span>
                                <div className={s.changeInfoButtons}>
                                    <input style={{display: 'flex', height: '25px', padding: 0, width: '330px'}} type="file" onChange={(e) => {
                                        photoLoad(e).then()
                                    }}/>
                                    <br/>
                                    <img style={{width: '330px', maxHeight: '500px', borderRadius: "10px"}} src={persInfo.photo} alt=""/>
                                    <br/>
                                    <button style={{marginTop: '10px'}} onClick={() => {
                                        savePhoto()
                                    }}>Save photo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={s.offersContainer}>
                    <div className={s.offers}>
                        <span className={s.description}>Offers that you're subscribed on.</span>
                        <br/>
                        {user.offersSub === null ? <span className={s.description}>You are not subscribed on any offer yet.</span> :
                            user.offersSub === '{"offersId": []}' ? <span className={s.description}>You are not subscribed on any offer yet.</span> :
                        <div className={s.сontainerOfoffers}>
                            {offers}
                        </div>
                        }
                    </div>
                </div>

                <div className={s.offersCalendar}>
                    <div className={s.calendar}>
                        <div className={s.gridBlockCalendar}>
                            <div className={s.centeredObject}>
                                <OfferCalendar offers={JSON.parse(user.offersSub)}/>
                            </div>
                            <div className={s.centeredObject}>
                                <span>Planning lessons is of utmost importance in any educational setting, that's why we decided to provide you this calendar.</span>
                                <span>Have fun playing football! :D</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
            
        </div>
    )
}

export default PersonalPage