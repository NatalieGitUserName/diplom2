import s from './awards.module.css'
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import Header from "../header/header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {interactAction} from "../../store/clubReducer";
import {useState} from "react";

let Awards = () => {

    const dispatch = useDispatch()

    const [selectedDiv, setNewDiv] = useState('none');

    useEffect(() => {
        dispatch(interactAction(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
            <BluredInteractionPoint/>
            <Header title={'Our awards'}/>
            <main>
                <div className={s.gridArticleRows}>
                <p className={`${s.textParagraph} + ${s.text}`}>
                    Junior Stars has achieved numerous prestigious awards throughout its illustrious history, cementing its status as a formidable and successful football club. The hard work, dedication, and talent of the players, coaches, and support staff have been recognized and celebrated by the football community. Here are some of the notable awards and achievements the club has earned over the years:
                </p>
                <ol className={`${s.text} + ${s.list}`}>
                    <li>
                        <span>League Championships</span>
                        <button className={s.button} onClick={() => {
                            if (selectedDiv === 'award1st') {
                                setNewDiv('none');
                            } else {
                                setNewDiv('award1st');
                            }
                            }}>See more</button>
                        <div>
                            <span style={selectedDiv === 'award1st' ? {display: 'block'} : {display: 'none'}}>
                            Junior Stars has consistently displayed outstanding performance in local leagues, securing multiple league championships. The team's skillful play, tactical acumen, and unwavering determination have led to numerous victories, culminating in well-deserved titles and trophies.
                            </span>
                        </div>
                    </li>
                    <li>
                        <span>Tournament Triumphs</span>
                        <button className={s.button} onClick={() => {
                            if (selectedDiv === 'award2d') {
                                setNewDiv('none');
                            } else {
                                setNewDiv('award2d');
                            }
                            }}>See more</button>
                        <div>
                            <span style={selectedDiv === 'award2d' ? {display: 'block'} : {display: 'none'}}>
                            The club's success extends beyond the regular league competitions. Junior Stars has triumphed in various tournaments, showcasing their abilities against formidable opponents from near and far. The team's ability to rise to the occasion, compete at a high level, and emerge as tournament champions is a testament to their exceptional skills and teamwork.
                            </span>
                        </div>
                    </li>
                    <li>
                        <span>Fair Play Award</span>
                        <button className={s.button} onClick={() => {
                            {
                                if (selectedDiv === 'award3d') {
                                    setNewDiv('none');
                                } else {
                                    setNewDiv('award3d');
                                }
                                }}}>See more</button>
                        <div>
                            <span style={selectedDiv === 'award3d' ? {display: 'block'} : {display: 'none'}}>
                            Football is not just about winning matches; it is also about displaying sportsmanship and fair play. Junior Stars has been honored with the Fair Play Award for their exemplary conduct on and off the field. The club's commitment to respect, integrity, and fair play has garnered admiration from referees, opponents, and spectators alike.
                            </span>
                        </div>
                    </li>
                    <li>
                        <span>Player Accolades</span>
                        <button className={s.button} onClick={() => {
                            {
                                if (selectedDiv === 'award4th') {
                                    setNewDiv('none');
                                } else {
                                    setNewDiv('award4th');
                                }
                                }}}>See more</button>
                        <div>
                            <span style={selectedDiv === 'award4th' ? {display: 'block'} : {display: 'none'}}>
                            Several players from Junior Stars have earned individual recognition for their exceptional performances. They have been named in "Player of the Season" lists, received "Golden Boot" awards for scoring the most goals, and even earned selections to regional and national youth teams. These accolades highlight the club's commitment to developing talented players and nurturing their potential.
                            </span>
                        </div>
                    </li>
                    <li>
                        <span>Coaching Accolades</span>
                        <button className={s.button} onClick={() => {
                            {
                                if (selectedDiv === 'award5th') {
                                    setNewDiv('none');
                                } else {
                                    setNewDiv('award5th');
                                }
                                }}}>See more</button>
                        <div>
                            <span style={selectedDiv === 'award5th' ? {display: 'block'} : {display: 'none'}}>
                            The dedication and expertise of the club's coaching staff have not gone unnoticed. Junior Stars coaches have been acknowledged for their exceptional leadership, tactical knowledge, and player development skills. They have received coaching awards, certifications, and invitations to prestigious coaching seminars, contributing to the club's reputation for excellence in training and development.
                            </span>
                        </div>
                    </li>
                    <li>
                        <span>Community Engagement Awards</span>
                        <button className={s.button} onClick={() => {
                            {
                                if (selectedDiv === 'award6th') {
                                    setNewDiv('none');
                                } else {
                                    setNewDiv('award6th');
                                }
                                }}}>See more</button>
                        <div>
                            <span style={selectedDiv === 'award6th' ? {display: 'block'} : {display: 'none'}}>
                            Junior Stars United takes great pride in its involvement within the community. The club has been honored with awards recognizing its outstanding community engagement initiatives. By organizing charity events, and partnerships with local schools, the club has made a positive impact on the lives of aspiring young players and the wider community.
                            </span>
                        </div>
                    </li>
                </ol>
                </div>
            </main>
        </div>
    )
}

export default Awards