import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Mustang from '../assets/icons/mustang.png'
import { Tooltip} from '@mui/material'
import 'animate.css';

export const ContactUs = () => {
  const form = useRef();
  const [submittingState,setSubmittingState] = React.useState(false);
  const [formState,setFormState] = React.useState({
    user_name:'',
    user_email:'',
    message:''
  })
  function handleChange(e){
    const {name,value} = e.target 
    // set old form values to be updated
    setFormState(prev=>({
      ...prev,
      [name]:value
    }))
  }
  function handleSubmitEmail(e){
    e.preventDefault();
    setSubmittingState(true);
    emailjs
      // replaced form.current with formState
      .sendForm('service_2l65nuq', 'template_c61fszo', form.current, {
          publicKey: 'JTS2DsfV8D3mHylVd',
        })
      .then(
        // succesfull send
        () => {
          // setSubmittingState(true);
          console.log('SUCCESS EMAIL SENT!');
          // set form data back to null
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
      .then(()=>{
          form.current = ''
          // reset form state values
          setFormState({
            user_name:'',
            user_email:'',
            message:''
          })
          // setSubmittingState(false)
      })
      .finally(()=>{
        setSubmittingState(false)
      })
  };
  return (
    <form 
      ref = {form} 
      onSubmit={handleSubmitEmail} 
      className={submittingState?'contact-form submit-in-progress':'contact-form'}
    >
        <label>Name</label>
        <input 
          type="text" 
          name="user_name" 
          placeholder='John Doe'
          onChange={handleChange}
          value={formState.user_name}
          required
        />
        <label>Email</label>
        <input 
          type="email" 
          name="user_email" 
          placeholder = 'johndoe@coolperson.com'
          onChange={handleChange}
          value={formState.user_email}
          required
        />
        <label>Message</label>
        <textarea 
          name="message" 
          rows='10' 
          placeholder='Your message goes here :)'
          onChange={handleChange}
          value={formState.message}
          required
          maxLength={250}
        />
   
        <button className ='submit-ctn' type='submit' value = 'Send'>
        <Tooltip title = 'send' arrow>
          <img type='submit' value="Send" src={Mustang} alt="paper airplane submit icon" className ={submittingState?'submit-icon true':'submit-icon false'}/>
        </Tooltip>
        </button>

    
    </form>
  );
};