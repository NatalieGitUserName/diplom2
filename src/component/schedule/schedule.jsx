import s from './schedule.module.css'
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import Header from "../header/header";

let Schedule = () => {
    return(
        <div>
            <BluredInteractionPoint/>
            <Header title={'Our schedule'}/>
            <main>
                <div className={s.gridArticleRows4Schedule}>
                    <div className={s.gridArticleRows}>
                        <p className={`${s.textParagraph} + ${s.text}`}>Dear Members of Junior Stars,</p>
                        <p className={`${s.textParagraph} + ${s.text}`}>As we gear up for another fantastic year of football, we wanted to provide you with important information regarding the schedule for our club activities.</p>
                    </div>

                    <div className={s.catalogue}>

                        <div className={`${s.scheduleCard} + ${s.text}`}>
                            <span>Monday</span>
                            <div className={s.flexText}>
                                <span>Football session</span>
                                <span>6pm-8pm</span>
                                <span>Ages 11-16</span>
                            </div>
                        </div>

                        <div className={`${s.scheduleCard} + ${s.text}`}>
                            <span>Tuesday</span>
                            <div className={s.flexText}>
                                <span>Football session</span>
                                <span>5pm-6pm</span>
                                <span>Ages 8-12</span>
                            </div>
                        </div>

                        <div className={`${s.scheduleCard} + ${s.text}`}>
                            <span>Tuesday</span>
                            <div className={s.flexText}>
                                <span>Football session</span>
                                <span>5pm-6pm</span>
                                <span>Ages 8-12</span>
                            </div>
                        </div>

                        <div className={`${s.scheduleCard} + ${s.text}`}>
                            <span>Tuesday</span>
                            <div className={s.flexText}>
                                <span>Football session</span>
                                <span>5pm-6pm</span>
                                <span>Ages 8-12</span>
                            </div>
                        </div>

                        <div className={`${s.scheduleCard} + ${s.text}`}>
                            <span>Tuesday</span>
                            <div className={s.flexText}>
                                <span>Football session</span>
                                <span>5pm-6pm</span>
                                <span>Ages 8-12</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </main>
        </div>
    )
}

export default Schedule