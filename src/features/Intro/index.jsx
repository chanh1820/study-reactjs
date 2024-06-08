import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../Intro/style.scss'
import "../Part1/style.scss"
import { useNavigate } from 'react-router-dom';
import introVideo from '../../video/intro.mp4'
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
        },8000)
    });    

    return (
        <div id='container-intro'>
            <video className='video'  autoPlay loop muted>
                <source src={introVideo} type="video/mp4"/>
            </video>
        </div>
    );
}
export default Intro;