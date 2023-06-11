import './App.css';
import Login from "./component/login/login";
import {Route, Routes} from "react-router-dom";
import MainPage from "./component/mainPage/mainPage";
import Register from "./component/register/register";
import Offers from "./component/offers/offers";
import Offer from "./component/offer/offer";
import PersonalPage from "./component/personal-page/personalPage";
import Schedule from "./component/schedule/schedule";
import AboutUs from "./component/aboutUs/aboutUs";
import Awards from "./component/awards/awards";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={
                    <MainPage/>
                }/>
                <Route path={'/login'} element={
                    <Login/>
                }/>
                <Route path={'/register'} element={
                    <Register/>
                }/>
                <Route path={'/offers'} element={
                    <Offers/>
                }/>
                <Route path={'/offer/:id'} element={
                    <Offer/>
                }/>
                <Route path={'/personal-page'} element={
                    <PersonalPage/>
                }/>
                <Route path={'/schedule'} element={
                    <Schedule/>
                }/>
                <Route path={'/history'} element={
                    <AboutUs/>
                }/>
                <Route path={'/awards'} element={
                    <Awards/>
                }/>
            </Routes>
        </div>
    );
}

export default App;
