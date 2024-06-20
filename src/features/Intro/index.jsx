import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../Intro/style.scss'
import "../Part1/style.scss"
import { useNavigate } from 'react-router-dom';
import introVideo from '../../video/intro_game.mp4'
import data from '../data';

var dataGame = data.intro;
function Intro(props) {
    const refLink = useRef()
    const navigate = useNavigate();
    var handleNavigate = (handle)=>{
        navigate(handle);
    }
    useEffect(() => {
        setTimeout(()=>{
            handleNavigate(dataGame.buttonNext);
        },23000)
    });    
    // useEffect(() => {
    //     var audio = new Audio('/sound/nhac_intro.mp3')
    //     audio.volume= 0.5;
    //     audio.play();
    // });  
    var handleClickStart = () => {
        // var audio = new Audio('/sound/nhac_intro.mp3')
        // audio.volume= 0.5;
        // audio.play();
        document.querySelector("#video").play();
        document.querySelector("#btn-start").classList.add("hide")
    }
    return (
        <div id='container-intro'>
            <div id='btn-start'  onClick={handleClickStart}>
                <p>Bắt đầu</p>
            </div>
            <video id='video' >
                <source src={introVideo} type="video/mp4"/>
            </video>
        </div>
    );
}
export default Intro;