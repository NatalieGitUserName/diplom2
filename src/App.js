import './App.css';
import Login from "./component/login/login";
import {Route, Routes} from "react-router-dom";
import MainPage from "./component/mainPage/mainPage";
import Register from "./component/register/register";
import Offers from "./component/offers/offers";
import Offer from "./component/offer/offer";


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
            </Routes>
        </div>
    );
}

export default App;
