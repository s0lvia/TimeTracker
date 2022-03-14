import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './style.scss';
import ellipsis from '../assets/icon-ellipsis.svg';
import image from '../assets/jeremy.png';


const navBar = [
    {
        title:'Daily',
        path:'/',
        class:"nav-text"
    },
    {
        title:'Weekly',
        path:'/weekly',
        class:"nav-text"
    },
    {
        title:'Monthly',
        path:'/monthly',
        class:"nav-text"
    },
]
   
function Navigation () {
    const navigate = useNavigate();

    return (
        <div className='navigation'>
            <div className='top'>
                <img src ={image} alt="profile-photo" className='image'/>
                <div className='text-container'>
                    <span className='small-text'>
                        Report for
                    </span>
                    <h2 style ={{margin:"0 auto", opacity:1, color: "hsl(236, 100%, 87%)", fontWeight:300}}>Jeremy Robson</h2>
                </div>
            </div>
            <div className='bottom'>
                <ul style ={{margin:0, padding:'12px'}}>
                    {navBar.map((item, index) => {
                        return (
                            <li key = {index} className={item.class}>
                                <Link to={item.path} style ={{textDecoration:'none'}} >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Navigation;