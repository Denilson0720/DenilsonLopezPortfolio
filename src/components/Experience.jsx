import React,{useEffect} from 'react'
import { Tooltip,Button } from '@mui/material'
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
import figma from '../assets/icons/figma.png'
import restful from '../assets/icons/restful.svg'
import ejs from '../assets/icons/ejs.svg'
import 'aos/dist/aos.css';

export default function Experience(){
    const deepracerLink='https://docs.google.com/presentation/d/1qEoLqt55tnLF7gK-Z6mL2HtDGSRbcVx5/edit?usp=sharing&ouid=100594229032412441074&rtpof=true&sd=true';
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2
        // padding
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [openWakefern, setOpenWakefern] = React.useState(false);
      const handleOpenWakefern = ()=> setOpenWakefern(true);
      const handleCloseWakefern = ()=>setOpenWakefern(false);
    return(
        <>
        <div className = 'experience-ctn' id='experience'>
            <h3 className = 'experience-title'
                data-aos='fade'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
            >
                Experience
            </h3>
            <div>
                 <div 
                className = 'skills-ctn'
                data-aos="fade-up"
                data-aos-duration='1000'
                data-aos-easing = 'ease-in-sine'
            >
                <h4>Tech I've Worked With Before
                </h4>
                <div className = 'tech-icons-ctn'>
                    <Tooltip title='HTML' arrow>
                        <img className = 'icon' src={html} alt="html icon"/>
                    </Tooltip>
                    <Tooltip title='CSS' arrow>
                        <img className = 'icon' src={css} alt="css icon"/>
                    </Tooltip>
                    <Tooltip title='JavaScript' arrow>
                        <img className = 'icon' src={js} alt="javascript icon"/>
                    </Tooltip>
                    <Tooltip title="Bootstrap" arrow>
                        <img className='icon' src={bootstrap} alt="bootstrap icon" />
                    </Tooltip>
                    <Tooltip title="Java" arrow>
                        <img className='icon' src={java} alt="java icon" />
                    </Tooltip>
                    <Tooltip title="Python" arrow>
                        <img className='icon' src={python} alt="python icon" />
                    </Tooltip>
                    <Tooltip title="React JS" arrow>
                        <img className='icon' src={reactIcon} alt="react icon" />
                    </Tooltip>
                    <Tooltip title="Node JS" arrow>
                        <img className='icon' src={node} alt="node icon" />
                    </Tooltip>
                    <Tooltip title="Express JS" arrow>
                        <img className='icon' src={express} alt="express icon" />
                    </Tooltip>
                    <Tooltip title="MySQL" arrow>
                        <img className='icon' src={mysql} alt="mysql icon" />
                    </Tooltip>
                    <Tooltip title="MongoDB" arrow>
                        <img className='icon' src={mongoDB} alt="mongoDB icon" />
                    </Tooltip>
                    <Tooltip title="GitHub" arrow>
                        <img className='icon' src={github} alt="github icon" />
                    </Tooltip>
                    <Tooltip title="Figma" arrow>
                        <img className='icon' src={figma} alt="figma icon" />
                    </Tooltip>
                    <Tooltip title="EJS" arrow>
                        <img className='icon' src={ejs} alt="ejs icon" />
                    </Tooltip>
                    <Tooltip title="Restful API" arrow>
                        <img className='icon' src={restful} alt="restful api icon" />
                    </Tooltip>

                </div>
            </div>
            <div className = 'work-exp-ctn'
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-easing = 'ease-in-sine'
                // data-aos-offset='400'
            >
                <h4>Where I've Worked</h4>
                
                <img className='njcu-logo' src={njcu} alt="njcu logo"/>
                <p><b>Role:</b> Research Intern</p>
                <nav onClick={handleOpen}>View Research Poster</nav>
                {/* <img className ='deepracer-img' src={deepracer} alt="" onClick={handleOpen}/> */}

                <img className = 'wakefern-logo' src={wakefern} alt="wakefern logo" />
                <p><b>Role:</b> Logistics Intern</p>
                <nav onClick = {handleOpenWakefern}>View Details</nav>
            </div>
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
                    <Box sx={style} className = 'njcu-modal'>
                        {/* <p>something about njcu</p> */}
                        <img className = 'njcu-modal-img' src={deepracer} alt="" />
                        <a href={deepracerLink}>Google Slide</a>
                    </Box>
                </Fade>

        </Modal>
        <Modal
                open={openWakefern}
                onClose={handleCloseWakefern}
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
                <Fade in={openWakefern}>
                    <Box sx={style} className = 'wakefern-modal'>
                        <img src={wakefern} alt="" />
                        <h4>As an intern at Wakefern I:</h4>
                        <p> - Proactively identified and applied the key responsibilities and operational requisites for overseeing a large
                        corporation by closely shadowing and working alongside an experienced supervisor.</p>
                        <p> - Sharpened teamwork and communication proficiencies to effectively relay crucial information in a high-pressure
                        environment, aiding to an improvement in on-time shipments from 85% to 90% during peak hours.</p>
                    </Box>
                </Fade>

        </Modal>
        </>
    )
}