import React,{useEffect} from 'react'
import profileIcon from '../assets/user.png' 
import denilson from '../assets/denilson.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About(){
    
    useEffect(()=>{
        AOS.init();
    },[])
    // const windowScreen = window
    return(
        <div 
            className = 'abt-ctn'
            data-aos="fade-down"
            data-aos-duration='1000'
            data-aos-easing = 'ease-in-sine'
            // id="about"
            data-aos-offset = '400'
        >
            
            {/* <img src={denilson} alt="profile icon image" /> */}
            <div className = 'abt-text' id='about'>
                <p className='quote'><b>"A good engineer never stops learning no matter how old they become ."</b><br/> - I read that somewhere on google :)</p>
                <h3>A Little About Me</h3>
                <p className='intro'>Hey! My name is Denilson and I'm a Software Developer with a passion for frontend development. I graduated from New Jersey City University with a Bachelors of Science in Computer Science in May of 2023.  I aspire torwards a career that will challenge me and allow me to learn from all sorts of perspectives and grow as a dev. <br/>When Im not coding youll probably find me running or taking pictures of something cool.</p>
            </div>
        </div>
    )
}
    