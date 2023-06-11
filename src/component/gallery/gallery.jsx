import s from './gallery.module.css'
import BluredInteractionPoint from "../points/bluredInteractionPoint/bluredInteractionPoint";
import Header from "../header/header";
import React, { useEffect, useState } from "react";

let Gallery = () => {
    const [srcImg, setNewSrc] = useState('');
    const [clickEvent, updateStateOfClickEvent] = useState(false);

    return(
        <div>
            <div style={clickEvent ? {display: 'flex'} : {display: 'none'} } className={s.zoomedImage}>
                <img src={srcImg} alt="Img of kids" />
                <span onClick={() => {updateStateOfClickEvent(false);}}>X</span>
            </div>
            <BluredInteractionPoint/>
            <Header title={'Gallery'}/>
            
            <main>
                <div className={s.imgGallery}>
                    <img src={require("../../img/KidsGallery1.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src)}}/>
                    <img src={require("../../img/KidsGallery2.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/kidsGallery3.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/kidsGallery4.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/kidsGallery5.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/KidsGallery6.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/kidsGallery7.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/KidsGallery8.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/KidsGallery9.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/kidsGallery10.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/KidsGallery11.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/KidsGallery12.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/KidsGallery13.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                    <img src={require("../../img/KidsGallery14.jpg")} alt="Img of kids" onClick={(e) => {updateStateOfClickEvent(true); setNewSrc(e.target.src);}}/>
                </div>
            </main>
        </div>
    )
}

export default Gallery