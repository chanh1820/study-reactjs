import React from 'react'
import "../Part1/style.scss"
import actorStatic from '../../image/actor_static.png';
import bubble from '../../image/bubble.png';
import actorButterfly from '../../image/actor_butterfly.gif';
import acorn from '../../image/acorn.gif';
import nextArow from '../../image/next_arow.gif';

function Part1() {
  const classHide = 'hide'
  var resource = {
    actor_anim: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmlrczl1ZWNucGNoazIzOXJuZWIxb20zZzRtc2R3bHlpMmhpdXBmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kPYi6lrYDnSttCDFih/giphy.gif",
    actor_static: actorStatic,
    bubble: bubble,
    actorButterfly: actorButterfly,
    acorn: acorn,
    nextArow: nextArow,
    oiNhungHatHatde: "Ôi những hạt dẻ này ngon quá",
    khiSocChoiThangCacTroChoi: "Khi Sóc chơi thắng các trò chơi thì sẽ được thưởng hạt dẻ, Sóc đồng ý chơi không nè"
  }
  var data = {
    translateX : 0,
    counterTranslateX : 10,
    left : 11,
    leftAcorn : 30,
    indexShowButerfly: 400,
    counterLeft: 0.2,
    index: 0
  }
  document.addEventListener('keydown', function(event) {
    const translateX = document.getElementById('translateX');
    switch (event.keyCode) {
      case 39:
        if(!isValidTranslate(39)){
          break;
        }
        data.index ++;
        var actorContent = document.getElementById('actor-content') ;
        var acornContent = document.getElementById('acorn-content') ;
        if(actorContent.getAttribute('src')!==resource.actor_anim){
          actorContent.setAttribute('src',resource.actor_anim)
        }
        actorContent.style.transform = 'scaleX(1)'
        data.left = data.left - data.counterLeft;  
        translateX.style.backgroundPosition = `${data.left}% center`;

        var container = document.getElementsByClassName('container')[0];
        var styleContainer = window.getComputedStyle(container);
        // var counterLeftAcorn = (data.counterLeft/100) * (styleContainer.width.slice(0, -2)/2)
        data.leftAcorn = data.leftAcorn - data.counterLeft;  
        console.log(data.leftAcorn);
        acornContent.style.left = `${ data.leftAcorn}%`;
        break;
      case 37:
        if(!isValidTranslate(37)){
          break;
        }
        data.index --;
        var actorContent = document.getElementById('actor-content') ;
        var acornContent = document.getElementById('acorn-content') ;
        if(actorContent.getAttribute('src')!==resource.actor_anim){
          actorContent.setAttribute('src',resource.actor_anim)
        }    
        actorContent.style.transform = 'scaleX(-1)'
        data.left = data.left + data.counterLeft;  
        translateX.style.backgroundPosition = `${data.left}% center`;

        var container = document.getElementsByClassName('container')[0];
        var styleContainer = window.getComputedStyle(container);
        // var counterLeftAcorn = (data.counterLeft/100) * (styleContainer.width.slice(0, -2)/2)
        data.leftAcorn = data.leftAcorn + data.counterLeft;  
        console.log(data.leftAcorn);
        acornContent.style.left = `${ data.leftAcorn}%`;
        break;
      default:
        break;
    }
  });

  document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
      case 39:
        document.getElementById('actor-content').setAttribute('src',resource.actor_static)
        break;
    
      default:
        break;
    }
  });
  var isValidTranslate = (keyCode)=>{
    console.log(data.index);

    switch (keyCode) {
      case 39:
        if(data.index == data.indexShowButerfly){
          showActorButterfly();
          return false;
        }else if(data.index == 125){
          bonusAcorn();
          return true;
        }else{
          hideActorButterfly();
          return true;
        }
        break;
      case 37:
        if(data.index == 0){
          return false;
        }else if(data.index == 126){
          bonusAcorn();
          return true;
        }else{
          hideActorButterfly();
          return true;
        }
        break;
      default:
        break;
    }

    
  }
  var showActorButterfly = ()=>{
    var actor2 = document.getElementById('actor-2')
    console.log(classExists(actor2, classHide));
    if(classExists(actor2, classHide)){
        actor2.classList.remove(classHide)
    }
  }
  var bonusAcorn = ()=>{
    var actor2 = document.getElementById('acorn-content')
    if(!classExists(actor2, classHide)){
        actor2.classList.add(classHide)
    }
    var bubble = document.querySelector('.actor .wrap-text-bubble')
    if(classExists(bubble, classHide)){
      bubble.classList.remove(classHide)
    }
    setTimeout(function() {
      actor2.classList.remove(classHide) // hiện acorn
      bubble.classList.add(classHide) // ẩn bubble
    }, 3000);
  }
  var hideActorButterfly = ()=>{
    var actor2 = document.getElementById('actor-2')
    if(!classExists(actor2, classHide)){
        actor2.classList.add(classHide)
    }
  }
  function percentToNumber(percentString) {
    if (percentString.endsWith('%')) {
        return parseFloat(percentString.slice(0, -1)) / 100;
    } else {
        return NaN;
    }
}
  function classExists(element, className) {
    return  element.classList.contains(className);
  }
  return (
    <div className='container' id='translateX'>
      <div className='wrap'>
        <div className='acorn'>
            <img id='acorn-content'
              src={resource.acorn}
            />
        </div>
        <div className='actor'>
            <img id='actor-content'
                src={resource.actor_static}
                alt=""
                />
            <div className='wrap-text-bubble hide' >
              <div id='bubble'
                style={{ backgroundImage: `url(${resource.bubble})` }}
                alt=""
              >
                <span id='text-actor-soc'>{resource.oiNhungHatHatde}</span>
              </div>
            </div>
        </div>
        <div id='actor-2' className='hide'>
            <div className='wrap-text-bubble'>
              <div id='bubble'
                style={{ backgroundImage: `url(${resource.bubble})` }}
                alt=""
              >
                <span id='text-actor-soc'>{resource.khiSocChoiThangCacTroChoi}</span>
              </div>
            </div>
            <img id='butterfly'
            src={resource.actorButterfly}
            alt=""
            />
        </div>
        <div >
          <img id='next-arow' 
            src={resource.nextArow}
          />
        </div>
      </div>
    </div>
  )
}

export default Part1