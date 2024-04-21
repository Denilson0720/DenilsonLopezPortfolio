import React from 'react'
import LinkedIn from '../assets/icons/linkedin.png'
import Github from '../assets/icons/github.png'
import Email from '../assets/icons/email.png'
import IconButton from '@mui/material/IconButton';

export default function Footer(){
    const linkedinURL = 'https://www.linkedin.com/in/denilson-lopez/'
    const githubURL = 'https://github.com/Denilson0720'
    const emailURL = 'mailto: denilson.felipe.25@gmail.com'
    return(
        <div className='footer-ctn'>
            <p> &copy; 2024 Denilson Lopez - All Rights Reserved</p>
            <div className='footer-icon-ctn'>
                <a href={linkedinURL}>
                    <img src={LinkedIn} alt="" />
                </a>
                <a href={githubURL}>
                    <img src={Github} alt="" />
                </a>
                <a href={emailURL}>
                    <img src={Email} alt="" />
                </a>
                
                
                
            </div>
        </div>
    )
}
