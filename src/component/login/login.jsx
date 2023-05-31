import s from "./login.module.css"
import {useEffect, useRef, useState} from "react";
import {throttle} from "lodash";

let Login = () => {

    const cursorRef = useRef(null);
    const [interact, setInteract] = useState(false);
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
        {/* <div className={s.interactiveCircle}></div> */}
        <div className={s.blur}></div>
        <div className={s.frame}>
            <div className={s.window}>
                <h1 className={s.pageTitle}>Login</h1>
                <br/>
                <strong class={s.errorMessage}>Алярм</strong>
                <br/>
                <div className={s.form}>
                    <input type="email" name="email" className={s.userEmail} placeholder="Email"/>

                    <input type="password" name="password" className={s.userPassword} placeholder="Password"/>

                    <input type="submit" className={s.submit} value="Submit"/>
                </div>

                <p>Don't have an account? <a className={s.link} href="/register">Singup</a></p>
            </div>
        </div>
        </body>
    )
}

export default Login