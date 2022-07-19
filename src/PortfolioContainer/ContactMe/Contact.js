import React,{useRef,useState} from 'react';
import './contact.css'
// import  { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false)


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_e2r84bk", "template_j8ei3cb", form.current, "Oq6gK5LDJs55Fg6pu")
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });}
    return (
        <div className='c'>
            <div className='c-bg'>
                <div className='c-wrapper'>
                  <div className='c-contact'>
                    <form ref={form} onSubmit={sendEmail} className='c-form' >
                        <h1 className='c-form-h1'>Conatct Me</h1>
                        <label>Name</label> <br></br>
                        <input type="text" placeholder="Enter youre name" name="user_name" className='i1'></input><br></br>
                        <lable>Email</lable><br></br>
                        <input type="email" placeholder="Enter your email" name="user_email" className='i2'></input><br></br>
                        <input type="textarea" placeholder="Subject" name="user_sub"  className='i3'></input><br></br>
                        <textarea rows="5" placeholder="Message" name="message"></textarea><br></br>
                        <input type="submit" value="send" className='button'></input>
                        {done && "thankyou"}
                    </form>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;