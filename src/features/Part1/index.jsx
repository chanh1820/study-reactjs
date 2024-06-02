import React from 'react'
import "../Part1/style.scss"
import actorStatic from '../../image/actor_static.png';
import bubble from '../../image/bubble.png';
import actorButterfly from '../../image/actor_butterfly.gif';

function Part1() {

  var resource = {
    actor_anim: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmlrczl1ZWNucGNoazIzOXJuZWIxb20zZzRtc2R3bHlpMmhpdXBmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kPYi6lrYDnSttCDFih/giphy.gif",
    actor_static: actorStatic,
    bubble: bubble,
    actorButterfly: actorButterfly,
    oiNhungHatHatde: "Ôi những hạt dẻ này ngon quá",
    khiSocChoiThangCacTroChoi: "Khi Sóc chơi thắng các trò chơi thì sẽ được thưởng hạt dẻ, Sóc đồng ý chơi không nè"
  }
  var data = {
    translateX : 0,
    counterTranslateX : 10,
    left : 11,
    counterLeft: 0.10000

  }
  document.addEventListener('keydown', function(event) {
    const translateX = document.getElementById('translateX');
    const image = document.getElementById('actor-content');
    console.log(data.left);
    switch (event.keyCode) {
      case 39:
        checkTranslateX();
        var actorContent = document.getElementById('actor-content') ;
        if(actorContent.getAttribute('src')!==resource.actor_anim){
          actorContent.setAttribute('src',resource.actor_anim)
        }
        actorContent.style.transform = 'scaleX(1)'
        data.left = data.left - data.counterLeft;  
        translateX.style.backgroundPosition = `${data.left}% center`;
        break;
      case 37:
        var actorContent = document.getElementById('actor-content') ;
        if(actorContent.getAttribute('src')!==resource.actor_anim){
          actorContent.setAttribute('src',resource.actor_anim)
        }    
        actorContent.style.transform = 'scaleX(-1)'
        data.left = data.left + data.counterLeft;  
        translateX.style.backgroundPosition = `${data.left}% center`;
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
  var checkTranslateX = () =>{
      if(data.left == "-10.0"){
        console.log("la la la la");
        return 0;
      }
  }

  return (
    <div className='container' id='translateX'>
      <div className='wrap'>
        <div className='actor'>
            <img id='actor-content'
                src={resource.actor_static}
                alt=""
                />
            <div className='wrap-text-bubble'>
              <div id='bubble'
                style={{ backgroundImage: `url(${resource.bubble})` }}
                alt=""
              >
                <span id='text-actor-soc'>{resource.oiNhungHatHatde}</span>
              </div>
            </div>

        </div>
        <div className='actor-2'>
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
      </div>
    </div>
  )
}

export default Part1