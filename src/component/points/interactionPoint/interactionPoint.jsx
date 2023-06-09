import s from './interactionPoint.module.css'
import {useEffect, useRef} from "react";
import {throttle} from "lodash";
import {useSelector} from "react-redux";

let InteractionPoint = (props) => {

    const cursorRef = useRef(null);

    let interact = useSelector(state => state.interact)

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
                duration: 900,
                fill: 'forwards',
            });
        }
    };


    return (
        <div ref={cursorRef} className={s.cursorContainer} style={{width: "1.3rem", height: "1.3rem", zIndex: 10000}}>
            <div className={interact ? s.interactiveCircleShow : s.interactiveCircleHide}></div>
            <div className={s.rotating}>
                {props.onlyBig ?
                    interact &&
                    <svg className={!interact ? s.cursorSmall : s.cursorBig} fill={"currentColor"}  version="1.1" id="Capa_1"
                         xmlns="http://www.w3.org/2000/svg"
                         width="800px" height="800px" viewBox="0 0 45 45">
                        <path d="M22.5,0C10.093,0,0,10.095,0,22.5C0,34.905,10.093,45,22.5,45S45,34.905,45,22.5C45,10.095,34.907,0,22.5,0z
			                 M39.208,34.098H32.18l-2.67-2.976l-0.293-5.585l3.61-4.456l4.455-2.176l5.552,4.038C42.744,27.081,41.422,30.918,39.208,34.098z
			                 M12.819,34.098H5.792c-2.214-3.18-3.536-7.017-3.625-11.153l5.552-4.04l4.455,2.177l3.611,4.456l-0.293,5.585L12.819,34.098z
			                 M38.686,10.201l-2.174,6.698l-4.479,2.184l-5.383-1.44l-3.08-4.748V7.393L29.204,3.3C33.005,4.631,36.287,7.058,38.686,10.201z
			                 M15.796,3.3l5.632,4.093v5.502l-3.079,4.748l-5.382,1.44l-4.479-2.188l-2.173-6.693C8.711,7.058,11.994,4.631,15.796,3.3z
			                 M16.641,41.986l-2.134-6.563l2.66-2.96l5.226-2.043l5.445,2.048l2.653,2.956l-2.132,6.563c-1.857,0.561-3.821,0.869-5.859,0.869
			                 C20.463,42.855,18.499,42.548,16.641,41.986z"/>
                    </svg>
                    :
                    <svg className={!interact ? s.cursorSmall : s.cursorBig} fill={"currentColor"}  version="1.1" id="Capa_1"
                         xmlns="http://www.w3.org/2000/svg"
                         width="800px" height="800px" viewBox="0 0 45 45">
                        <path d="M22.5,0C10.093,0,0,10.095,0,22.5C0,34.905,10.093,45,22.5,45S45,34.905,45,22.5C45,10.095,34.907,0,22.5,0z
			                 M39.208,34.098H32.18l-2.67-2.976l-0.293-5.585l3.61-4.456l4.455-2.176l5.552,4.038C42.744,27.081,41.422,30.918,39.208,34.098z
			                 M12.819,34.098H5.792c-2.214-3.18-3.536-7.017-3.625-11.153l5.552-4.04l4.455,2.177l3.611,4.456l-0.293,5.585L12.819,34.098z
			                 M38.686,10.201l-2.174,6.698l-4.479,2.184l-5.383-1.44l-3.08-4.748V7.393L29.204,3.3C33.005,4.631,36.287,7.058,38.686,10.201z
			                 M15.796,3.3l5.632,4.093v5.502l-3.079,4.748l-5.382,1.44l-4.479-2.188l-2.173-6.693C8.711,7.058,11.994,4.631,15.796,3.3z
			                 M16.641,41.986l-2.134-6.563l2.66-2.96l5.226-2.043l5.445,2.048l2.653,2.956l-2.132,6.563c-1.857,0.561-3.821,0.869-5.859,0.869
			                 C20.463,42.855,18.499,42.548,16.641,41.986z"/>
                    </svg>
                }

            </div>
        </div>
    )
}

export default InteractionPoint