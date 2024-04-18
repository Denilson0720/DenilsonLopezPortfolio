import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';


export default function Project({title,description,tools,imageUrl,url}){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
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
            <div className = 'project-component-ctn' onClick = {handleOpen}>
                <img src={imageUrl} alt="" />
                <h4>{title}</h4>
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
                <h4>{title}</h4>
                <img className = 'modal-img' src={imageUrl} alt="" />
                <p>{description}</p>
                <a href={url}>Visit {title}</a>
                </Box>
            </Fade>
           
        </Modal>
           
        </>
    )
}