import React from 'react';
import Navigation from './navigation';
import '../App.scss'
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
        "current": 32,
        "previous": 36
        },
        
    "play":{
      "title": "Play",
      "current": 10,
    "previous": 8
      },
    
    "study":{
      "title": "Study",
      "current": 4,
          "previous": 7
    },

    "exercise":{
        "title": "Exercise",
        "current": 4,
          "previous": 5
    },
    "social":{
        "title": "Social",
        "current": 5,
        "previous": 10
       
    },
    "selfcare":{
        "title": "Self Care",
        "current": 2,
        "previous": 2
        
    }
}

function Weekly () {
    return (
        <div className='App'>
            <Navigation/>
            <div className='card-container'>
                <div className='first-row'>
                    <div className='work'>
                        <img className ="icon" src={work} alt="work"/>
                        <div className='card'>
                            {data.work.title}
                        </div>
                    </div>
                    
                    <div className='play'>
                        <img className ="icon"  src={play} alt="play"/>
                        <div className='card'>
                        
                        </div>
                    </div>
                    
                    <div className='study'>
                        <img className ="icon" src={study} alt="study"/>
                        <div className='card'>
                        
                        </div>
                    </div>
                    
                </div>
                <div className='second-row'>
                   <div className='exercise'>
                       <img className='icon' src={exercise} alt="exercise"/>
                       <div className='card'>

                       </div>
                   </div>

                    <div className='social'>
                        <img className ="icon"  src={social} alt="social"/>
                        <div className='card'>
                        
                        </div>
                    </div>

                    <div className='self-care'>
                        <img className ="icon" src={selfCare} alt="play"/>
                        <div className='card'>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weekly;