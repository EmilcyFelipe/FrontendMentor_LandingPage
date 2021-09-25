import './Feedback_wrapper.css'
import Feedback from '../Feedback/Feedback'
import { UsersComments } from '../../utils/users_comments'
import Alisa from '../../images/avatar-ali.png'
import Anisha from '../../images/avatar-anisha.png'
import Richard from '../../images/avatar-richard.png'
import Shanai from '../../images/avatar-shanai.png'
import React from 'react'

export default function FeedbackWrapper(){
    
    var margin = 0;
    const[pointSlider,setPointSlider] = React.useState();
    

    //Desktop function slider
    function handleSlider(e){
        let slider = document.querySelector('.feedback-slider');
        if(e.target.className==="left"){
            if(margin<0){
                margin += 400;
            }
            slider.style.marginLeft= `${margin}px`;
        }else if (e.target.className==="right"){
            if(margin>(-(slider.clientWidth-window.innerWidth))){
                margin -= 400;
            }
            slider.style.marginLeft= `${margin}px`
        }
    }

    //Select mobile the slider by event click
    function handleSliderSelect(e){
        let sliderMobile=document.querySelector(".feedback-slider");
        if(pointSlider){
            pointSlider.style="background:none"
        }
        switch(parseInt(e.target.id.split('-')[0])){
            case 1 : 
                sliderMobile.style.marginLeft="0";
            break;
            case 2 :
                sliderMobile.style.marginLeft="-375px";
            break;
            case 3 :
                sliderMobile.style.marginLeft="-750px";
            break;
            case 4 :
                sliderMobile.style.marginLeft="-1125px";
            break;
            default:
                break;
        }
        e.target.style="background-color:var(--bright-red)"
        setPointSlider(e.target)
    }
    
     //translate slider by time at mobile mode
     setInterval(timeTranslate,5000)
        var marginByTime = -375;
     function timeTranslate(){
        let el = document.querySelector(".translate-slider-mobile")
        if(window.getComputedStyle(el).display==="flex"){
            let sliderMobile=document.querySelector(".feedback-slider");
            sliderMobile.style.marginLeft=`${marginByTime}px`;
            marginByTime-=375;
            if(marginByTime<(-1125)){
                 marginByTime=0;
            }
        }
     }

    return(
        <div className="feedback-wrapper">
            <h2>What they've said</h2>
            <div className="feedback-slider">
                <Feedback photo={Anisha} name={UsersComments[0].name} comment={UsersComments[0].comment}/>
                <Feedback photo={Alisa} name={UsersComments[1].name} comment={UsersComments[1].comment}/>
                <Feedback photo={Richard} name={UsersComments[2].name} comment={UsersComments[2].comment}/>
                <Feedback photo={Shanai} name={UsersComments[3].name} comment={UsersComments[3].comment}/>
            </div>
            <div className="translate-slider">
                <div className="left" onClick={handleSlider}>&lt;</div>
                <div className="right" onClick={handleSlider}>&gt;</div>
            </div>
            <div className="translate-slider-mobile">
                <div id="1-slide" className="point-slider" onClick={timeTranslate}></div>
                <div id="2-slide" className="point-slider" onClick={handleSliderSelect}></div>
                <div id="3-slide" className="point-slider" onClick={handleSliderSelect}></div>
                <div id="4-slide" className="point-slider" onClick={handleSliderSelect}></div>
            </div>
        </div>
    )
}