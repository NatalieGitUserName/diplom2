import s from "../login/login.module.css"

let Register = () => {

    return (
        <body>
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