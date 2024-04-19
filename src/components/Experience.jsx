import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import node from '../assets/icons/node-icon.png'
import java from '../assets/icons/java-icon.png'
import html from '../assets/icons/html-icon.png'
import js from '../assets/icons/js-icon.png'
import python from '../assets/icons/python-icon.png'
import css from '../assets/icons/css-icon.png'
import express from '../assets/icons/express.png'
import mongoDB from '../assets/icons/mongodb.png'
import reactIcon from '../assets/icons/react-icon.png'
import mysql from '../assets/icons/mysql-icon.png'
import bootstrap from '../assets/icons/bootstrap-icon.png'
import github from '../assets/icons/github-icon.png'
import njcu from '../assets/icons/njcu-logo.png'
import wakefern from '../assets/icons/wakefern-logo.png'
import AOS from 'aos';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import deepracer from '../assets/icons/deepracer.png'
import 'aos/dist/aos.css';

export default function Experience(){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '65%',
        height:'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2
        // padding
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    return(
        <>
        <h3 
            data-aos='fade'
            data-aos-duration='1000'
            data-aos-easing='ease-in-sine'
            className = 'experience-title'
        >
            Experience
        </h3>
        <div className = 'experience-ctn' id='experience'>
        {/* <h3>Experience</h3> */}
        <div 
            className = 'skills-ctn'
            // id='exper'
            data-aos="fade-right"
            data-aos-duration='1000'
            data-aos-easing = 'ease-in-sine'
            // data-aos-offset='400'

        >
            <h3>Tech ive worked with before
            </h3>
            <div className = 'tech-icons-ctn'>
                <img className = 'icon' src={html} alt="html icon"/>
                <img className = 'icon' src={css} alt="css icon"/>
                <img className = 'icon' src={js} alt="javascript icon"/>
                <img className = 'icon' src={bootstrap} alt="bootstrap icon" />
                <img className = 'icon' src={java} alt="java icon"/>
                <img className = 'icon' src={python} alt="python icon"/>
                <img className = 'icon' src={reactIcon} alt="react icon"/>
                <img className ='icon' src={node} alt="node icon"/>
                <img className = 'icon' src={express} alt="express icon"/>
                <img className = 'icon' src={mysql} alt="mysql icon" />
                <img className = 'icon' src={mongoDB} alt="mongoDB icon"/>
                
                <img className = 'icon' src={github} alt="github icon" />
            </div>
        </div>
        <div className = 'work-exp-ctn'
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-easing = 'ease-in-sine'
            // data-aos-offset='400'
        >
            <h3>Where Ive worked</h3>
            
            <img className='njcu-logo' src={njcu} alt="njcu logo"/>
            <p>Check out the poster presentation for my research project.</p>
            <img className ='deepracer-img' src={deepracer} alt="" onClick={handleOpen}/>
        </div>
        </div>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className = 'modal'>
                        {/* <p>something about njcu</p> */}
                        <img className = 'modal-img' src={deepracer} alt="" />
                    </Box>
                </Fade>

            </Modal>
        </>
    )
}