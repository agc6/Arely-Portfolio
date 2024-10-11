import React from 'react';
import Swal from 'sweetalert2'
import './contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b87d1238-499f-44d0-b878-3a52a62201b3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Thank You!",
                text: "Message Sent!",
                icon: "success"
              });
        }
      };

    return (
        <span className='contact' id="contact-section">
        <form onSubmit={onSubmit}>
            <h2 className='contact-title'>Contact Page</h2>
            <div className='input-box'>
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter your name' name='name' required />
            </div>
            <div className='input-box'>
                <label>Email Address</label>
                <input type="text" className='field' placeholder='Enter your email' name='email' required /> 
            </div>
            <div className='input-box'>
                <label>Your Message</label>
                <textarea name='message' className='field' placeholder='Enter your message' required ></textarea>
            </div>
            <button type="submit">Send Message</button>
            </form>
        </span>
    );
};

export default Contact;
