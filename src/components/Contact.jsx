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
            data-aos="fade-down"
            data-aos-duration='1000'
            data-aos-easing = 'ease-in-sine'
        >
            <h3>Contact Me</h3>
            <h4>Id be happy to answer any questions or just chat.</h4>
            <h4>Shoot me a message :)</h4>
            {ContactUs()}
        </div>
    )
}