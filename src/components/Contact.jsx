import React,{useRef} from 'react'
import {ContactUs} from './ContactForm'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Contact(){
    React.useEffect(()=>{
        AOS.init();
    })
    return(
        <div 
            className = 'contact-ctn'
            id='contact'
        >
            <h3>Contact Me</h3>
            <h4>I'd be happy to answer any questions or just chat.</h4>
            <h4>Shoot me a message :)</h4>
            {ContactUs()}
        </div>
    )
}