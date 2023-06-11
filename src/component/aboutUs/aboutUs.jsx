import s from './aboutUs.module.css'
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import Header from "../header/header";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {interactAction} from "../../store/clubReducer";

let AboutUs = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(interactAction(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={s.container}>
            <BluredInteractionPoint/>
            <Header title={'History of the club'}/>

            <article className={s.articleOffersDescription}>
                <img className={s.image} src={require('./../../img/sport.gif')} alt="GIF"/>
                <div className={s.textOffersDescription}>
                    <p>The history of our club starts with a group of kids who had a shared passion for football. They
                        loved playing the game and dreamed of one day becoming professional footballers. Determined to
                        turn their dreams into reality, these young enthusiasts decided to form their very own football
                        club.</p>
                    <p>The club was named "Junior Stars," and it quickly became a hub of excitement and camaraderie. The
                        kids practiced in a local park, using makeshift goals and wearing mismatched jerseys. They spent
                        countless hours honing their skills, dribbling the ball, practicing their shots, and learning
                        different techniques.</p>
                </div>
            </article>

            <article style={{marginTop: '400px'}} className={s.articleOffersDescription}>
                <img className={s.image} src={require('./../../img/sport.gif')} alt="GIF"/>
                <div className={s.textOffersDescription}>
                    <p>As the club continued to grow, so did its achievements. Junior Stars started participating in
                        local leagues and tournaments, competing against teams from neighboring towns. They experienced
                        both victories and defeats, learning important lessons about teamwork, resilience, and
                        sportsmanship.</p>
                    <p>TOne memorable season, Junior Stars reached the final of a prestigious regional tournament. The
                        young players gave their all, showcasing incredible teamwork and skill. Though they narrowly
                        missed out on the championship, their exceptional performance garnered attention from talent
                        scouts and larger football clubs.</p>
                </div>
            </article>

            <article style={{marginTop: '400px'}} className={s.articleOffersDescription}>
                <img className={s.image} src={require('./../../img/sport.gif')} alt="GIF"/>
                <div className={s.textOffersDescription}>
                    <p>Their dedication and hard work paid off when several players from Junior Stars were offered spots
                        in renowned youth academies. These academies provided them with professional training, expert
                        coaching, and the opportunity to compete at a higher level. The journey that began in a small
                        park was now taking them closer to their dreams of becoming professional footballers.</p>
                    <p>The club continues expanding its programs, offering coaching and training to children of all ages
                        and skill levels and organizing friendly matches to promote the love of the game within the
                        community.</p>
                </div>
            </article>

            <article style={{marginTop: '400px', marginBottom: '150px'}} className={s.articleOffersDescription}>
                <img className={s.image} src={require('./../../img/giphy.gif')} alt="GIF"/>
                <div className={s.centered}>
                    <p style={{marginLeft: '40px'}}>Learn</p>
                    <p style={{marginLeft: '150px'}}>about <span className={s.colored}>our</span></p>
                    <p>awards</p>
                </div>
                <div className={s.btn}>
                    <NavLink to={'/awards'}>See awards</NavLink>
                </div>
            </article>
        </div>
    )
}

export default AboutUs