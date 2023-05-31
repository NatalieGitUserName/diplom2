import s from "./offers.module.css"
import {useEffect, useRef, useState} from "react";
import {throttle} from "lodash";

let Offers = () => {

    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        if (cursor) {
            const handleMouseMove = throttle((e) => {
                animateCursor(e);
            }, 20);

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    const animateCursor = (e) => {
        const x = e.clientX - cursorRef.current.offsetWidth / 2;
        const y = e.clientY - cursorRef.current.offsetHeight / 2;

        const frameKeys = {
            transform: `translate(${x}px, ${y}px)`,
        };

        cursorRef.current.animate(frameKeys, {
            duration: 500,
            fill: 'forwards',
        });
    };

    return (
        <body>
            <div ref={cursorRef} className={s.bluredCursor}></div>
            <div className={s.blur}></div>
            <header>
                <span className={s.logoTitle}>Your club</span>
                <a class={s.logoHomeLink} href="/">Back to home page</a>
            </header>
            <main>
                {/* SHRIEK OF PAIN */}
                <article>
                    <div className={s.catalogue}>
                        <div className={s.card}>
                            <div className={s.cardPicture}></div>
                            <div className={s.cardText}>
                                    <div className={s.cardTextDetails}>
                                        <div className={s.cardTextDetails}>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" xlinkHref="#calendar-a"><path fill="currentColor" d="M10.992 18.28l-3.117-3.118a.374.374 0 0 1 0-.55l1.283-1.306c.16-.16.39-.16.55 0l1.559 1.559 3.002-3.025c.16-.16.39-.16.55 0l1.306 1.306c.16.16.16.39 0 .55l-4.583 4.583c-.16.16-.39.16-.55 0zM19.31 3.153c1.971 0 3.575 1.604 3.575 3.552v12.169a3.58 3.58 0 0 1-3.575 3.575H4.667c-1.948 0-3.552-1.604-3.552-3.575V6.706a3.57 3.57 0 0 1 3.552-3.552h.848v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h5.523v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h.848zm1.72 15.721v-9.19H2.97v9.19c0 .962.757 1.719 1.697 1.719H19.31c.963 0 1.72-.78 1.72-1.719zM7.37 5.194c-.503 0-.916-.413-.939-.94V2.031a.93.93 0 0 1 .94-.94c.527 0 .94.436.94.94v2.223c0 .527-.436.94-.94.94zm9.26 0a.93.93 0 0 1-.94-.94V2.031a.93.93 0 0 1 .94-.94c.526 0 .939.436.939.94v2.223c0 .527-.436.94-.94.94z"></path></svg>
                                            <span>Every Monday | 6pm-8pm</span>
                                        </div>
                                        <span>Ages 15-18</span>
                                    </div>
                                <h3>Football Session</h3>
                            </div>
                            <form action="/">
                                <input className={s.cardButton} type="button" value="Subscribe"/>
                            </form>
                        </div>

                        <div className={s.card}>
                            <div className={s.cardPicture}></div>
                            <div className={s.cardText}>
                                    <div className={s.cardTextDetails}>
                                        <div className={s.cardTextDetails}>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" xlinkHref="#calendar-a"><path fill="currentColor" d="M10.992 18.28l-3.117-3.118a.374.374 0 0 1 0-.55l1.283-1.306c.16-.16.39-.16.55 0l1.559 1.559 3.002-3.025c.16-.16.39-.16.55 0l1.306 1.306c.16.16.16.39 0 .55l-4.583 4.583c-.16.16-.39.16-.55 0zM19.31 3.153c1.971 0 3.575 1.604 3.575 3.552v12.169a3.58 3.58 0 0 1-3.575 3.575H4.667c-1.948 0-3.552-1.604-3.552-3.575V6.706a3.57 3.57 0 0 1 3.552-3.552h.848v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h5.523v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h.848zm1.72 15.721v-9.19H2.97v9.19c0 .962.757 1.719 1.697 1.719H19.31c.963 0 1.72-.78 1.72-1.719zM7.37 5.194c-.503 0-.916-.413-.939-.94V2.031a.93.93 0 0 1 .94-.94c.527 0 .94.436.94.94v2.223c0 .527-.436.94-.94.94zm9.26 0a.93.93 0 0 1-.94-.94V2.031a.93.93 0 0 1 .94-.94c.526 0 .939.436.939.94v2.223c0 .527-.436.94-.94.94z"></path></svg>
                                            <span>Every Monday | 6pm-8pm</span>
                                        </div>
                                        <span>Ages 15-18</span>
                                    </div>
                                <h3>Football Session</h3>
                            </div>
                            <form action="/">
                                <input className={s.cardButton} type="button" value="Subscribe"/>
                            </form>
                        </div>

                        <div className={s.card}>
                            <div className={s.cardPicture}></div>
                            <div className={s.cardText}>
                                    <div className={s.cardTextDetails}>
                                        <div className={s.cardTextDetails}>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" xlinkHref="#calendar-a"><path fill="currentColor" d="M10.992 18.28l-3.117-3.118a.374.374 0 0 1 0-.55l1.283-1.306c.16-.16.39-.16.55 0l1.559 1.559 3.002-3.025c.16-.16.39-.16.55 0l1.306 1.306c.16.16.16.39 0 .55l-4.583 4.583c-.16.16-.39.16-.55 0zM19.31 3.153c1.971 0 3.575 1.604 3.575 3.552v12.169a3.58 3.58 0 0 1-3.575 3.575H4.667c-1.948 0-3.552-1.604-3.552-3.575V6.706a3.57 3.57 0 0 1 3.552-3.552h.848v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h5.523v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h.848zm1.72 15.721v-9.19H2.97v9.19c0 .962.757 1.719 1.697 1.719H19.31c.963 0 1.72-.78 1.72-1.719zM7.37 5.194c-.503 0-.916-.413-.939-.94V2.031a.93.93 0 0 1 .94-.94c.527 0 .94.436.94.94v2.223c0 .527-.436.94-.94.94zm9.26 0a.93.93 0 0 1-.94-.94V2.031a.93.93 0 0 1 .94-.94c.526 0 .939.436.939.94v2.223c0 .527-.436.94-.94.94z"></path></svg>
                                            <span>Every Monday | 6pm-8pm</span>
                                        </div>
                                        <span>Ages 15-18</span>
                                    </div>
                                <h3>Football Session</h3>
                            </div>
                            <form action="/">
                                <input className={s.cardButton} type="button" value="Subscribe"/>
                            </form>
                        </div>

                        <div className={s.card}>
                            <div className={s.cardPicture}></div>
                            <div className={s.cardText}>
                                    <div className={s.cardTextDetails}>
                                        <div className={s.cardTextDetails}>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" xlinkHref="#calendar-a"><path fill="currentColor" d="M10.992 18.28l-3.117-3.118a.374.374 0 0 1 0-.55l1.283-1.306c.16-.16.39-.16.55 0l1.559 1.559 3.002-3.025c.16-.16.39-.16.55 0l1.306 1.306c.16.16.16.39 0 .55l-4.583 4.583c-.16.16-.39.16-.55 0zM19.31 3.153c1.971 0 3.575 1.604 3.575 3.552v12.169a3.58 3.58 0 0 1-3.575 3.575H4.667c-1.948 0-3.552-1.604-3.552-3.575V6.706a3.57 3.57 0 0 1 3.552-3.552h.848v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h5.523v1.123c0 1.031.825 1.856 1.856 1.856a1.849 1.849 0 0 0 1.856-1.856V3.154h.848zm1.72 15.721v-9.19H2.97v9.19c0 .962.757 1.719 1.697 1.719H19.31c.963 0 1.72-.78 1.72-1.719zM7.37 5.194c-.503 0-.916-.413-.939-.94V2.031a.93.93 0 0 1 .94-.94c.527 0 .94.436.94.94v2.223c0 .527-.436.94-.94.94zm9.26 0a.93.93 0 0 1-.94-.94V2.031a.93.93 0 0 1 .94-.94c.526 0 .939.436.939.94v2.223c0 .527-.436.94-.94.94z"></path></svg>
                                            <span>Every Monday | 6pm-8pm</span>
                                        </div>
                                        <span>Ages 15-18</span>
                                    </div>
                                <h3>Football Session</h3>
                            </div>
                            <form action="/">
                                <input className={s.cardButton} type="button" value="Subscribe"/>
                            </form>
                        </div>
                    </div>
                    
                </article>
            
                <article className={s.articleWithGifNText}>
                    <img className={s.gifImage} src={require("../../img/sport.gif")} alt="GIF"/>
                    <div className={s.centeredText}>
                        <div>
                            <p>make</p>
                            <p>the <span className={s.coloredText}>first</span></p>
                            <p>step</p>
                        </div>
                    </div>
                    {/* <button class="button" onclick="handlerClickDown()">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="currentColor" stroke="none">
                        <path d="M85 3893 c-32 -8 -74 -54 -81 -89 -4 -20 0 -44 10 -66 9 -19 556
                        -573 1253 -1269 915 -914 1245 -1238 1266 -1241 15 -3 39 -3 55 0 20 3 351
                        328 1269 1245 683 683 1247 1254 1254 1269 30 72 -26 148 -109 148 l-47 0
                        -1197 -1197 -1198 -1198 -1198 1198 c-658 658 -1205 1197 -1214 1197 -9 0 -22
                        2 -30 4 -7 2 -22 1 -33 -1z"/>
                        </g>
                        </svg>
                    </button>              */}
                </article>
            </main>
        </body>
    )
}

export default Offers