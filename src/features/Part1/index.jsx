import React from 'react'
import "../Part1/style.scss"
import actorStatic from '../../image/actor_static.png';

function Part1() {

  var resource = {
    actor_anim: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmlrczl1ZWNucGNoazIzOXJuZWIxb20zZzRtc2R3bHlpMmhpdXBmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kPYi6lrYDnSttCDFih/giphy.gif",
    actor_static: actorStatic
  }
  var data = {
    translateX : 0,
    counterTranslateX : 10,
    left : 10,
    counterLeft: 0.5

  }
  document.addEventListener('keydown', function(event) {
    const translateX = document.getElementById('translateX');
    const image = document.getElementById('actor-content');
    console.log(data.left);
    if(data.left == 20){

    }else if(data.left == 40){

    }
    switch (event.keyCode) {
      case 39:
        if(data.left==10 && data.left==100){
          break;
        }
        var actorContent = document.getElementById('actor-content') ;
        if(actorContent.getAttribute('src')!==resource.actor_anim){
          actorContent.setAttribute('src',resource.actor_anim)
        }
        data.translateX = data.translateX - data.counterTranslateX;  
        data.left = data.left + data.counterLeft;  
        translateX.style.transform = `translateX(${data.translateX}px)`;
        image.style.left = `${data.left}%`;

        break;
      case 37:
        if(data.left==10 && data.left==100){
          break;
        }
        var actorContent = document.getElementById('actor-content') ;
        if(actorContent.getAttribute('src')!==resource.actor_anim){
          actorContent.setAttribute('src',resource.actor_anim)
        }        data.translateX = data.translateX + data.counterTranslateX;  

        data.left = data.left - data.counterLeft;  
        translateX.style.transform = `translateX(${data.translateX}px)`;
        image.style.left = `${data.left}%`;

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
  return (
    <div className='container' id='translateX'>
      <div className='wrap'>
        <div className='actor'>
            <img id='actor-content'
                src={resource.actor_static}
                alt="description of image"
                />
        </div>
      </div>
    </div>
  )
}

export default Part1