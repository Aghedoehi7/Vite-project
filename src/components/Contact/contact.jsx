import React from 'react';
import './contact.css';
import telephone from '../../assets/telephone.png';
import email from '../../assets/emailicon.png'
import skype from '../../assets/skypeicon.png'
import location from '../../assets/locationicon.png'
import whitearrow from '../../assets/whitearrow.jpg'

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f9da4ec6-89d8-4953-9300-32ba240176a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
   <div className='contact'>
    <div className='contact-inner'>
     <div className='contact-col'>
       <h3>Do you want to reach us </h3>
       <p>Get free estimation of your deal. feel free to call us.
</p>
<ul>
  <li> <img src={telephone} alt="" />Tel/Whatsapp:+77752154873</li>
    <li> <img src={email} alt="" />Email:zhaikmunai@inbox.lv</li>
      <li> <img src={skype} alt="" />Skype:Aisultan Mahuov</li>
      <li> <img src={location} alt="" />Address:43/1 Alexandr Karev str.Uralsk,<br />KZ-27 090000, Kazakhstan.</li>


</ul>

     </div>
     <div className='contact-col'>
       <form onSubmit={onSubmit}>
         <label >Your name</label>
         <input type="text" name='name' placeholder='Enter your name' required />
         <label >Email</label>
         <input type="tel" name='phone' placeholder='Enter your Email address' required/>
         <label >Write your message here</label>
         <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
         <button type='submit' className='btn dark-btn'>Submit now <img src={whitearrow} alt="" /></button>
       </form>
       <span>{result}</span>
     </div>
    </div>
    </div>
  );
};

export default Contact;
