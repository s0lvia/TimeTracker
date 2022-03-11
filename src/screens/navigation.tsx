import React from 'react'
import './style.scss'
import ellipsis from '../assets/icon-ellipsis.svg'
import image from '../assets/jeremy.png'

function Navigation () {
    return (
        <div className='navigation'>
            <div className='top'>
                <img src ={image} alt="profile-photo" className='image'/>
                <div className='text-container'>
                    <span className='small-text'>
                        Report for
                    </span>
                    <h2 style ={{margin:"0 auto", opacity:1,color: "hsl(236, 100%, 87%)" }}>Jeremy Robson</h2>
                </div>
            </div>
            <div className='bottom'>
                fhnfhj
                <br/>

            </div>
        </div>
    );
}

export default Navigation;