import s from "../login/login.module.css"
import {useEffect, useRef, useState} from "react";
import {throttle} from "lodash";

let Register = () => {

    const cursorRef = useRef(null);
    const [interact, setInteract] = useState(false);
    useEffect(() => {
        // what does "useRef" do?
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
            <div className={interact ? s.interactiveCircleShow : s.interactiveCircleHide}></div>
            <div className={s.blur}></div>
            <div className={s.frame}>
            <div className={s.window}>
                <h1 className={s.pageTitle}>Register</h1>
                <br/>
                {/* <strong class={s.errorMessage}>Алярм</strong> */}
                <br/>
                <div className={s.form}>
                    <input type="text" name="name" className={s.userEmail} placeholder="Name"/>

                    <input type="email" name="email" className={s.userEmail} placeholder="Email"/>

                    <input type="password" name="password" className={s.userPassword} placeholder="Password"/>

                    <input type="submit" className={s.submit} value="Submit"/>
                </div>

                <p>Have an account? <a className={s.link} href="/login">Login</a></p>
            </div>
            </div>
        </body>
    )
}

export default Register