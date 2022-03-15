import React from 'react';
import Navigation from './navigation';
import '../App.scss';
import './style.scss';
import ellipsis from '../assets/icon-ellipsis.svg'
import exercise from '../assets/icon-exercise.svg'
import play from '../assets/icon-play.svg'
import selfCare  from '../assets/icon-self-care.svg'
import social from '../assets/icon-social.svg'
import study from '../assets/icon-study.svg'
import work from '../assets/icon-work.svg'

const data = { 
    "work":{
        "title": "Work",
        "current": 103,
        "previous": 128
        },
        
    "play":{
      "title": "Play",
      "current": 23,
    "previous": 29
      },
    
    "study":{
      "title": "Study",
      "current": 13,
      "previous": 19
    },

    "exercise":{
        "title": "Exercise",
        "current": 11,
        "previous": 18
    },
    "social":{
        "title": "Social",
        "current": 1,
        "previous": 3,
       
    },
    "selfcare":{
        "title": "Self Care",
        "current": 7,
        "previous": 11
        
    }
}

function Monthly () {
    return (
        <div className='App'>
            <Navigation/>
            <div className='card-container'>
                <div className='first-row'>
                    <div className='work'>
                        <img className ="icon" src={work} alt="work"/>
                        <div className='card'>
                            <span className='title'>
                                {data.work.title}
                                <img className="ellipsis" src={ellipsis} alt="ellipsis"/>
                            </span>
                            <div style={{marginTop: 15}} >
                                <h1 style ={{margin:"0 auto", color: "white", fontWeight:300}}>{data.work.current}hrs</h1>
                                <span className='small-text'>
                                    Last Week - {data.work.previous}hrs
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className='play'>
                        <img className ="icon"  src={play} alt="play"/>
                        <div className='card'>
                            <span className='title'>
                                {data.play.title}
                                <img className="ellipsis" src={ellipsis} alt="ellipsis"/>
                            </span>
                            <div style={{marginTop: 15}} >
                                <h1 style ={{margin:"0 auto", color: "white", fontWeight:300}}>{data.play.current}hrs</h1>
                                <span className='small-text'>
                                    Last Week - {data.play.previous}hrs
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='study'>
                        <img className ="icon" src={study} alt="study"/>
                        <div className='card'>
                            <span className='title'>
                                {data.study.title}
                                <img className="ellipsis" src={ellipsis} alt="ellipsis"/>
                            </span>
                            <div style={{marginTop: 15}} >
                                <h1 style ={{margin:"0 auto", color: "white", fontWeight:300}}>{data.study.current}hrs</h1>
                                <span className='small-text'>
                                    Last Week - {data.study.previous}hrs
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='second-row'>
                   <div className='exercise'>
                       <img className='icon' src={exercise} alt="exercise"/>
                       <div className='card'>
                       <span className='title'>
                                {data.exercise.title}
                                <img className="ellipsis" src={ellipsis} alt="ellipsis"/>
                            </span>
                            <div style={{marginTop: 15}} >
                                <h1 style ={{margin:"0 auto", color: "white", fontWeight:300}}>{data.exercise.current}hrs</h1>
                                <span className='small-text'>
                                    Last Week - {data.exercise.previous}hrs
                                </span>
                            </div>
                       </div>
                   </div>

                    <div className='social'>
                        <img className ="icon"  src={social} alt="social"/>
                        <div className='card'>
                            <span className='title'>
                                {data.social.title}
                                <img className="ellipsis" src={ellipsis} alt="ellipsis"/>
                            </span>
                            <div style={{marginTop: 15}} >
                                <h1 style ={{margin:"0 auto", color: "white", fontWeight:300}}>{data.social.current}hrs</h1>
                                <span className='small-text'>
                                    Last Week - {data.social.previous}hrs
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='self-care'>
                        <img className ="icon" src={selfCare} alt="play"/>
                        <div className='card'>
                            <span className='title'>
                                {data.selfcare.title}
                                <img className="ellipsis" src={ellipsis} alt="ellipsis"/>
                            </span>
                            <div style={{marginTop: 15}} >
                                <h1 style ={{margin:"0 auto", color: "white", fontWeight:300}}>{data.selfcare.current}hrs</h1>
                                <span className='small-text'>
                                    Last Week - {data.selfcare.previous}hrs
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monthly;