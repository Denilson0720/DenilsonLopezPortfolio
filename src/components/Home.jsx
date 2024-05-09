import React from 'react'
import TextShifter from '../utils/TextShifter'
// import CameraIcon from '@mui/icons-material/Camera';
import { ReactTyped } from "react-typed";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
export default function Home(){
    const words = ['...Software Developer.        ','...Programmer.          ','...Photographer.        ','...Runner :)        ']
    //add watermark to background image
 
    return(
        <> 
            <div id ="home"className = 'home-ctn'>
                <h2>
                Hi, I'm Denilson, a <br />
                <ReactTyped
                    strings={[
                        " Software Developer...",
                        " Programmer...",
                        " Photographer...",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    >
                </ReactTyped>
                </h2>
                {/* <h2>Hi, Im Denilson, a <br/> {TextShifter({words})}</h2> */}
                <h2 className = 'responsiveness-note'>Hey you must be on a mobile device, Sorry about the layout, Im still working on full responsiveness accross all screen sizes. Thank you for your patience - Denilson</h2>
                <h3 className = 'dls-watermark'><CameraAltIcon fontSize='medium'/>DLS Gallery 2024</h3>
            </div>
        </>
    )
}
