import s from "./mainPage.module.css"
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import ball from '../../img/ball.jpg'
import {useDispatch, useSelector} from "react-redux";
import {interactAction} from "../../store/clubReducer";
import InteractionPoint from "../points/interactionPoint/interactionPoint";

let MainPage = () => {

    const [article, setArtical] = useState(0)
    const [openingSide, setOpeningSide] = useState('')

    const [dropDownMenu, setDropDownMenu] = useState({
        about: false,
        // journal: false
    })

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    let login = () => {
        if (user) {
            navigate('/personal-page')
        } else {
            navigate('/login')
        }
    }

    return (
        <div className={s.main} style={{overflow: 'hidden'}}>
        <InteractionPoint/>
        <nav>
            <div className={`${s.navSection} ${s.navLogoSection}`}>
                <a href="#">
                    <svg
                        onMouseEnter={() => {dispatch(interactAction(true))}}
                        onMouseLeave={() => {dispatch(interactAction(false))}}
                        className={`${s.iconLogo}`} version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="3em" height="3em" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                           fill="currentColor" stroke="none">
                            <path d="M2320 5110 c-263 -28 -601 -115 -780 -203 -80 -39 -93 -112 -27 -143
                            31 -15 36 -14 117 19 90 37 271 99 275 95 2 -2 -45 -84 -103 -183 l-106 -180
                            -254 -185 c-140 -102 -305 -221 -366 -265 l-112 -80 -198 -43 c-109 -24 -200
                            -41 -202 -39 -3 3 30 51 73 108 144 192 365 403 565 540 115 79 129 104 85
                            155 -38 44 -70 37 -182 -41 -194 -135 -400 -327 -546 -510 -236 -294 -429
                            -703 -503 -1065 -43 -212 -51 -295 -51 -530 0 -310 34 -525 124 -798 256 -774
                            860 -1379 1631 -1632 243 -80 448 -117 710 -127 588 -22 1152 156 1635 516
                            126 94 398 366 494 494 293 393 466 838 511 1322 55 596 -120 1234 -473 1720
                            -136 187 -354 410 -528 542 -360 271 -780 444 -1224 503 -110 14 -461 21 -565
                            10z m579 -165 c57 -8 106 -17 109 -19 11 -12 241 -411 238 -414 -8 -8 -663
                            -182 -685 -182 -22 0 -637 162 -673 178 -15 6 -1 36 102 212 92 159 125 206
                            144 211 13 4 71 12 128 18 57 6 117 13 133 15 62 9 404 -4 504 -19z m428 -101
                            c356 -120 656 -307 928 -579 131 -130 313 -350 301 -362 -2 -2 -93 15 -202 39
                            l-198 43 -190 138 c-105 76 -270 195 -367 265 l-176 127 -82 140 c-44 77 -93
                            159 -107 183 -14 23 -23 42 -20 42 3 0 54 -16 113 -36z m-1249 -544 c163 -45
                            321 -88 350 -96 l52 -15 0 -252 0 -253 -62 -45 c-35 -25 -259 -188 -499 -362
                            l-436 -317 -225 86 -225 86 3 41 c2 23 11 191 20 372 9 182 17 331 18 332 13
                            13 693 503 699 503 4 0 141 -36 305 -80z m1627 -174 l340 -248 10 -128 c8
                            -102 14 -132 29 -149 28 -31 79 -28 106 7 21 25 22 34 16 120 -4 50 -4 92 -2
                            92 3 0 108 -22 233 -50 173 -38 232 -54 244 -69 27 -32 124 -258 167 -386 35
                            -107 81 -300 97 -410 6 -40 5 -40 -151 -215 -86 -96 -159 -176 -162 -177 -4
                            -2 -94 131 -201 295 l-194 297 -5 110 c-5 104 -6 111 -34 138 -23 23 -34 28
                            -56 22 -50 -12 -57 -28 -62 -142 l-5 -106 -219 -83 -219 -84 -31 23 c-17 13
                            -244 178 -503 366 l-473 343 0 244 c0 173 3 245 12 250 22 14 683 192 703 190
                            11 -1 173 -114 360 -250z m-2791 -393 c-3 -49 -11 -210 -18 -358 l-14 -271
                            -193 -297 c-107 -163 -197 -296 -201 -294 -4 1 -77 81 -163 177 l-155 175 6
                            45 c14 106 58 289 95 402 42 128 141 356 168 389 12 14 72 31 236 68 121 27
                            226 50 232 50 10 1 11 -20 7 -86z m1721 -230 l65 -47 0 -878 0 -878 -139 0
                            -140 0 -3 249 c-3 228 -5 251 -22 270 -23 25 -72 28 -104 5 -22 -15 -22 -18
                            -22 -270 l0 -254 -145 0 -145 0 0 718 0 718 137 100 c75 54 141 101 145 102 4
                            2 8 -190 8 -426 0 -417 1 -429 20 -447 28 -25 76 -23 103 4 22 21 22 24 27
                            505 l5 484 60 45 c33 25 66 46 72 46 7 1 42 -20 78 -46z m368 -267 l137 -100
                            0 -718 0 -718 -145 0 -145 0 0 821 c0 451 4 819 8 817 4 -1 70 -48 145 -102z
                            m-1173 -673 c0 -251 -3 -454 -6 -451 -5 6 -230 691 -236 722 -3 12 214 184
                            235 185 4 1 7 -205 7 -456z m1587 371 c65 -47 117 -88 117 -92 -5 -22 -228
                            -710 -235 -722 -5 -8 -9 188 -9 443 0 251 2 457 4 457 3 0 58 -39 123 -86z
                            m-2202 -31 c110 -42 205 -81 212 -87 6 -6 97 -274 201 -595 l190 -584 -136
                            -173 c-74 -96 -138 -174 -141 -174 -21 0 -687 261 -694 272 -4 7 -65 192 -136
                            411 l-129 398 202 309 c146 225 205 308 216 304 8 -3 105 -39 215 -81z m3119
                            -219 c110 -169 199 -311 199 -318 0 -14 -250 -786 -260 -804 -7 -11 -672 -272
                            -693 -272 -4 0 -68 78 -143 174 l-135 174 188 578 c104 319 192 585 197 592 6
                            10 416 177 443 181 3 0 95 -137 204 -305z m-4035 -188 l135 -153 138 -424 139
                            -424 -16 -185 c-9 -102 -20 -198 -24 -213 -6 -28 -8 -27 -63 50 -234 326 -374
                            676 -434 1078 -18 122 -31 425 -18 424 5 0 69 -69 143 -153z m4671 62 c0 -494
                            -157 -983 -449 -1396 -78 -112 -71 -123 -96 148 l-16 185 138 424 139 423 134
                            153 c74 85 138 154 143 154 4 1 7 -41 7 -91z m-1653 -1183 c73 -93 133 -173
                            133 -177 0 -4 -103 -135 -228 -290 l-228 -283 -434 0 -434 0 -229 284 c-207
                            256 -228 286 -217 304 11 19 155 205 227 295 l34 42 622 -2 621 -3 133 -170z
                            m-2079 -133 l284 -107 224 -279 c124 -153 224 -280 222 -281 -2 -2 -101 -46
                            -222 -99 l-218 -96 -97 51 c-200 108 -415 266 -555 408 l-69 70 21 228 c12
                            125 22 234 22 240 0 9 15 7 53 -7 28 -11 180 -68 335 -128z m3052 -95 l24
                            -238 -70 -70 c-142 -144 -356 -301 -557 -409 l-94 -50 -219 96 c-120 53 -220
                            97 -222 99 -2 2 97 128 221 281 l224 277 334 128 c184 70 335 126 335 125 1 0
                            12 -108 24 -239z m-1090 -759 c104 -45 187 -85 184 -90 -9 -14 -199 -68 -344
                            -98 -331 -67 -655 -65 -985 4 -117 25 -303 80 -317 94 -4 4 77 44 180 90 l187
                            81 454 1 453 0 188 -82z"/>
                        </g>
                    </svg>

                </a>
            </div>
            <div className={`${s.navSection} ${s.navLinkSection}`}>
                <div className={s.links}>
                    <NavLink
                        to={'/offers'}
                        onMouseEnter={() => {dispatch(interactAction(true))}}
                        onMouseLeave={() => {dispatch(interactAction(false))}}>Offers</NavLink>
                </div>
                <div className={s.links}>
                    <NavLink
                        to={'/schedule'}
                        onMouseEnter={() => {dispatch(interactAction(true))}}
                        onMouseLeave={() => {dispatch(interactAction(false))}}>Schedule</NavLink>
                </div>
                <p className={s.links}
                    onClick={() => {login()}}
                    onMouseEnter={() => {dispatch(interactAction(true))}}
                    onMouseLeave={() => {dispatch(interactAction(false))}}>Personal page</p>

                <div>
                    <span 
                       onMouseEnter={() => {
                           dispatch(interactAction(true))
                           setDropDownMenu({...dropDownMenu, about: true})
                       }}
                       onMouseLeave={() => {
                           dispatch(interactAction(false))
                           setDropDownMenu({...dropDownMenu, about: false})
                       }}
                    >ABOUT US
                        {dropDownMenu.about && <div className={s.navDropDownMenu}>
                            <NavLink
                                to={'/history'}
                                onMouseEnter={() => {dispatch(interactAction(true))}}
                                onMouseLeave={() => {dispatch(interactAction(false))}}>History</NavLink>
                            <NavLink
                                to={'/awards'}
                                onMouseEnter={() => {dispatch(interactAction(true))}}
                                onMouseLeave={() => {dispatch(interactAction(false))}}>Awards</NavLink>
                            <NavLink
                                to={'/gallery'}
                                onMouseEnter={() => {dispatch(interactAction(true))}}
                                onMouseLeave={() => {dispatch(interactAction(false))}}>Gallery</NavLink>
                        </div>}
                    </span>

                </div>

                {/* <div>
                    <span
                        onMouseEnter={() => {
                            dispatch(interactAction(true))
                            setDropDownMenu({...dropDownMenu, journal: true})
                        }}
                        onMouseLeave={() => {
                            dispatch(interactAction(false))
                            setDropDownMenu({...dropDownMenu, journal: false})
                        }}
                    >YOUR JORNEY
                        {dropDownMenu.journal && <div className={s.navDropDownMenu}>
                            <NavLink
                                to={'/offers'}
                                onMouseEnter={() => {dispatch(interactAction(true))}}
                                onMouseLeave={() => {dispatch(interactAction(false))}}>Offers</NavLink>
                            <NavLink
                                to={'/schedule'}
                                onMouseEnter={() => {dispatch(interactAction(true))}}
                                onMouseLeave={() => {dispatch(interactAction(false))}}>Schedule</NavLink>
                            <p
                                onClick={() => {login()}}
                                onMouseEnter={() => {dispatch(interactAction(true))}}
                                onMouseLeave={() => {dispatch(interactAction(false))}}>Loggin</p>
                        </div>}
                    </span>
                </div> */}

            </div>
            <div className={`${s.navSection} ${s.navSocialMediaSection}`}>
                <a href="https://www.instagram.com/">
                    <svg className={s.icon} xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512"
                         onMouseEnter={() => {dispatch(interactAction(true))}}
                         onMouseLeave={() => {dispatch(interactAction(false))}}
                    >
                        <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://www.youtube.com/">
                    <svg className={s.icon} xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512"
                         onMouseEnter={() => {dispatch(interactAction(true))}}
                         onMouseLeave={() => {dispatch(interactAction(false))}}
                    >
                        <path fill="currentColor"
                              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg>
                </a>
                <a href="https://web.telegram.org/k/">
                    <svg className={s.icon} xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 496 512"
                         onMouseEnter={() => {dispatch(interactAction(true))}}
                         onMouseLeave={() => {dispatch(interactAction(false))}}
                    >
                        <path fill="currentColor"
                              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
                    </svg>
                </a>
            </div>
            <div className={`${s.navSection} ${s.navContactSection}`}>
                <a href="mailto:email@example.com"
                   onMouseEnter={() => {dispatch(interactAction(true))}}
                   onMouseLeave={() => {dispatch(interactAction(false))}}
                >CONTACT US</a>
            </div>
        </nav>

        <main>

            <article
                className={article === 0 ? openingSide === 'left' ? s.articleShowFromRight : s.articleShowFromLeft : openingSide === 'left' ? s.articleHideToLeft : s.articleHideToRight}>
                <div className={s.articleImageSection}
                     style={{backgroundImage: `url(${ball})`}}></div>
                <div className={s.articleDescriptionSection}>
                    <div className={s.descriptionSection}>
                        <p
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                        >Sport is a journey of self-discovery, where one learns the value of discipline,
                            perseverance,
                            and teamwork. It teaches us to embrace challenges, overcome obstacles, and celebrate
                            victories. It instills in us a sense of purpose, resilience, and the belief that anything is
                            possible with dedication and hard work.</p>

                    </div>
                </div>
                <div className={s.articleHeadingSection}>
                    <div className={s.headingSection}>
                        <h1
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                        >WHAT CONNECTS US</h1>
                    </div>
                </div>
                <div className={s.articleNavSection}>
                    <button className={`${s.articleNavButton} ${s.leftButton}`} onClick={() => {
                        setArtical(2)
                        setOpeningSide('right')
                    }}
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                    >
                        <svg className={s.iconButton} fill="currentColor" viewBox="0 0 32 32"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"/>
                        </svg>
                    </button>
                    <button className={`${s.articleNavButton} ${s.rightButton}`} onClick={() => {
                        setArtical(1)
                        setOpeningSide('left')
                    }}
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                    >
                        <svg className={s.iconButton} fill="currentColor" viewBox="0 0 32 32"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z"/>
                        </svg>
                    </button>
                </div>
            </article>
            <article
                className={article === 1 ? openingSide === 'left' ? s.articleShowFromRight : s.articleShowFromLeft : openingSide === 'left' ? s.articleHideToLeft : s.articleHideToRight}>
                <div className={s.articleImageSection}
                     style={{backgroundImage: `url(${require("../../img/sport.gif")})`}}></div>
                <div className={s.articleDescriptionSection}>
                    <div className={s.descriptionSection}>
                        <p
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                        >At our sport club, we're passionate about promoting an active and healthy lifestyle
                            though
                            sports.</p>
                        <p
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                        > Whether you're a seasoned athlethe or just starting your jorney, our community is happy
                            to
                            help you on your way.</p>
                        <a className={`${s.invitationLink}`} href="./about-us"
                           onMouseEnter={() => {dispatch(interactAction(true))}}
                           onMouseLeave={() => {dispatch(interactAction(false))}}
                        >Learn more about us</a>
                    </div>
                </div>
                <div className={s.articleHeadingSection}>
                    <div className={s.headingSection}>
                        <h1
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                            >ABOUT US</h1>
                    </div>
                </div>
                <div className={s.articleNavSection}>
                    <button className={`${s.articleNavButton} ${s.leftButton}`}
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                            onClick={() => {
                                setArtical(0)
                                setOpeningSide('right')
                            }}>
                        <svg className={s.iconButton} fill="currentColor" viewBox="0 0 32 32"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"/>
                        </svg>
                    </button>
                    <button className={`${s.articleNavButton} ${s.rightButton}`}
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                            onClick={() => {
                                setArtical(2)
                                setOpeningSide('left')
                            }}>
                        <svg className={s.iconButton} fill="currentColor" viewBox="0 0 32 32"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z"/>
                        </svg>
                    </button>
                </div>
            </article>
            <article
                className={article === 2 ? openingSide === 'left' ? s.articleShowFromRight : s.articleShowFromLeft : openingSide === 'left' ? s.articleHideToLeft : s.articleHideToRight}>
                <div className={s.articleImageSection}
                     style={{backgroundImage: `url(${require("../../img/sport.gif")})`}}></div>
                <div className={s.articleDescriptionSection}>
                    <div className={s.descriptionSection}>
                        <p
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                        >Embarking on the journey of doing sport is an exhilarating and transformative experience,
                            and
                            it's even more fascinating to share such moments with someone.</p>
                        <p
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                        > You can start your jorney with us <a className={`${s.invitationLink}`}
                                                                     href="./login"
                                                               onMouseEnter={() => {dispatch(interactAction(true))}}
                                                               onMouseLeave={() => {dispatch(interactAction(false))}}
                        >here.</a></p>
                    </div>
                </div>
                <div className={s.articleHeadingSection}>
                    <div className={s.headingSection}>
                        <h1
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                        >YOUR JORNEY</h1>
                    </div>
                </div>
                <div className={s.articleNavSection}>
                    <button className={`${s.articleNavButton} ${s.leftButton}`}
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                            onClick={() => {
                                setArtical(1)
                                setOpeningSide('right')
                            }}>
                        <svg className={s.iconButton} fill="currentColor" viewBox="0 0 32 32"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"/>
                        </svg>
                    </button>
                    <button className={`${s.articleNavButton} ${s.rightButton}`}
                            onMouseEnter={() => {dispatch(interactAction(true))}}
                            onMouseLeave={() => {dispatch(interactAction(false))}}
                            onClick={() => {
                                setArtical(0)
                                setOpeningSide('left')
                            }}>
                        <svg className={s.iconButton} fill="currentColor" viewBox="0 0 32 32"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z"/>
                        </svg>
                    </button>
                </div>
            </article>


        </main>
        </div>
    )
}

export default MainPage
