import React from 'react'
import TextShifter from '../utils/TextShifter'
export default function Home(){
    const words = ['...Software Developer.        ','...Photographer.        ','...Runner.        ','...Car Enthusiast.         ']
    //add watermark to background image
 
    return(
        <> 
            <div id ="home"className = 'home-ctn'>

                <h2>Hi, Im Denilson, a <br/> {TextShifter({words})}</h2>
                {/* <h1>{TextShifter({words})}</h1> */}
                <h2 className = 'responsiveness-note'>Hey you must be on a mobile device, Sorry about the layout, Im still working on full responsiveness accross all screen sizes. Thank you for your patience - Denilson</h2>
  
            </div>
        </>
    )
}
