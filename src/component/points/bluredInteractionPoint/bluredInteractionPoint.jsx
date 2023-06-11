import s from './bluredInteractionPoint.module.css'
import {useEffect, useRef} from "react";
import {throttle} from "lodash";

let BluredInteractionPoint = () => {

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


        if (cursorRef.current) {
            const x = cursorRef.current.offsetWidth !== null ? e.clientX - cursorRef.current.offsetWidth / 2 : 0;
            const y = cursorRef.current.offsetHeight !== null ? e.clientY - cursorRef.current.offsetHeight / 2 : 0;

            const frameKeys = {
                transform: `translate(${x}px, ${y}px)`,
            };

            cursorRef.current.animate(frameKeys, {
                duration: 500,
                fill: 'forwards',
            });
        }
    };

    return (
        <div>
            <div ref={cursorRef} className={s.bluredCursor}></div>
            <div className={s.blur}></div>
        </div>
    )
}

export default BluredInteractionPoint