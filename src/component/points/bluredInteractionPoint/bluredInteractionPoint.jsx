import s from './bluredInteractionPoint.module.css'
import {useEffect, useRef} from "react";
import {throttle} from "lodash";
import {useSelector} from "react-redux";

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

        // if (cursorRef.current.offsetWidth !== null) {
        //     cursorRef.current.offsetWidth = '1px';
        // }
        //
        // if (cursorRef.current.offsetHeight !== null) {
        //     cursorRef.current.offsetHeight = '1px';
        // }


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
        <div>
            <div ref={cursorRef} className={s.bluredCursor}></div>
            <div className={s.blur}></div>
        </div>
    )
}

export default BluredInteractionPoint