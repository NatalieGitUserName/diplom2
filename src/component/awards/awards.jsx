import s from './awards.module.css'
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import Header from "../header/header";

let Awards = () => {
    return(
        <div>
            <BluredInteractionPoint/>
            <Header title={'Our awards'}/>
            <main>
                <div className={s.gridArticleRows}>
                <p className={`${s.textParagraph} + ${s.text}`}>
                    Junior Stars has achieved numerous prestigious awards throughout its illustrious history, cementing its status as a formidable and successful football club. The hard work, dedication, and talent of the players, coaches, and support staff have been recognized and celebrated by the football community. Here are some of the notable awards and achievements the club has earned over the years:
                </p>
                <ol className={s.text}>
                    <li>League Championships</li>
                    <li>Tournament Triumphs</li>
                    <li>Fair Play Award</li>
                    <li>Player Accolades</li>
                    <li>Coaching Accolades</li>
                    <li>Community Engagement Awards</li>
                </ol>
                </div>
            </main>
        </div>
    )
}

export default Awards