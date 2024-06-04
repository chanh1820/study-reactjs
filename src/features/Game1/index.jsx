import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../Game1/style.scss'
import data from '../data.js'
import arrowLeft from '../../image/left_arrow.png'
import arrowRight from '../../image/right_arrow.png'
import { useNavigate } from 'react-router-dom';

Game1.propTypes = {
    
};

var dataGame1 = data.game1;
function Game1(props) {
    var resource = {
        soundNen:new Audio('/sound/game.mp3')
      }
    const refLink = useRef()
    const navigate = useNavigate();
    useEffect(()=>{
        if(refLink==null)return
        refLink.current.innerHTML = dataGame1.link
    },[refLink, dataGame1.link])

    var handleNavigate = (handle)=>{
        navigate(handle);
    }
    // resource.soundNen.play();
    // resource.soundNen.play();
    return (
        <div id='container-game1'>
            <div className='vertical' onClick={() =>handleNavigate(dataGame1.buttonPrevius)}>Quay lại 
                <img src={arrowLeft} alt=''/> 
            </div>
            <div style={{width: `80%`, height:`100%`}} ref={refLink}/>
            <div className='vertical' onClick={() =>handleNavigate(dataGame1.buttonNext)}>Tiếp theo
                <img src={arrowRight} alt=''/>
            </div>
        </div>
    );
}

export default Game1;