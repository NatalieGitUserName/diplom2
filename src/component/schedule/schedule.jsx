import s from './schedule.module.css'
import Header from "../header/header";
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {interactAction} from "../../store/clubReducer";

let Schedule = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(interactAction(false))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={s.container}>
			<BluredInteractionPoint/>
			<Header title={"Schedule"}/>
			<div className={s.textContainer}>
				<div className={s.text}>
					<p>Dear Members of Junior Stars,</p>
					<p>As we gear up for another fantastic year of football, we wanted to provide you with important information regarding the schedule for our club activities.</p>
				</div>
			</div>

			<div className={s.catalogue}>
				<div style={{display:"flex", marginTop: "20px"}}>
					<div className={s.scheduleCard}>
						<span>Monday</span>
						<div className={s.text}>
							<span>Football session</span>
							<span>6pm-8pm</span>
							<span>Ages 11-16</span>
						</div>
					</div>
					<div className={s.scheduleCard}>
						<span>Tuesday</span>
						<div className={s.text}>
							<span>Football session</span>
							<span>6pm-8pm</span>
							<span>Ages 8-12</span>
						</div>
					</div>
					<div className={s.scheduleCard}>
						<span>Wednesday</span>
						<div className={s.text}>
							<span>Football session</span>
							<span>6pm-7pm</span>
							<span>Ages 13-19</span>
						</div>
					</div>
				</div>

				<div style={{display:"flex", margin: "20px 0 20px 0"}}>
					<div className={s.scheduleCard}>
						<span>Thursday</span>
						<div className={s.text}>
							<span>Football session</span>
							<span>6pm-8pm</span>
							<span>Ages 15-18</span>
						</div>
					</div>
					<div className={s.scheduleCard}>
						<span>Friday</span>
						<div className={s.text}>
							<span>Football session</span>
							<span>5pm-6pm</span>
							<span>Primary school</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Schedule