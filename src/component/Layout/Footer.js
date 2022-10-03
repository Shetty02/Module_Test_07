import React from 'react'
import { ReactComponent as Facebook } from './icons/Facebook.svg';
import { ReactComponent as Instagarm } from './icons/Instagram.svg';
import { ReactComponent as Twitter } from './icons/Twitter.svg';
import './Footer.css'

function Footer() {
  const [userEmail, setUserEmail] = React.useState('');

    //Getting all the responses
    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    }

    //This will prevent our applications  from Reloading
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('userEmail: ', userEmail);

        if(userEmail === ""){
          alert("Can't Submit an Empty Email!");
          // return;
        }
        else if (userEmail && userEmail.includes('@') && userEmail.includes('.') && userEmail.lastIndexOf('.') <= userEmail.length - 3 && userEmail.indexOf('@') !== 0){
          alert("Your Email is Submmited Successfully!");
          // return;
        }

        //Create(CRUD)
        // inside the fetch we are requesting to "Get" the data.
        // with the help of Get request we get the data from the database.
        fetch('https://fetching-email-default-rtdb.asia-southeast1.firebasedatabase.app/email.json',
        //Here we are requesting the Post method
        {
            method:'Post',
            headers:{'Content-Type': 'application/json'},
            //Inside the body we are passing the data/ our whole data is present.
            body: JSON.stringify({
                userEmail: userEmail,
            })
        }
        ).then(res =>{
            console.log('res: ', res);
            return res.json();
        }).then(data => {
            console.log('data: ', data);
        })


        setUserEmail('');
    }

  return (
        <div className="footer">
            <div className="footer-header">
                <h3>AccioJob</h3>
                <div className="social-icons-list">
                    <Facebook/>
                    <Instagarm/>
                    <Twitter/>
                </div>
            </div>
            <div className="footer-container">
      <div className="footer-section footer-section-left">
        <div className="footer-section-column">
       
            <div className='footer-section-column-head'> <h5>Company Info</h5></div> 
         <p>About Us </p>
         <p>Carrier</p>  
         <p>We are hiring</p> 
         <p>Blog</p>
        </div>
        <div className="footer-section-column">
      
      <div className='footer-section-column-head'><h5>Legal</h5></div>
         <p>About Us </p>
         <p>Carrier</p>  
         <p>We are hiring</p> 
         <p>Blog</p>
        </div>
        <div className="footer-section-column">
        <div className='footer-section-column-head'><h5>Features</h5></div>
        <p>Business Marketing</p>
        <p>User Analytic</p>
        <p>Live Chat</p>
        <p>Unlimited Support</p>
        </div>
        <div className="footer-section-column">
      <div className='footer-section-column-head'><h5>Resources</h5></div>
         <p>IOS & Android </p>
         <p>Watch a Demo</p>  
         <p>Customers</p> 
         <p>API</p>
        </div>
      </div> 
      <div className="footer-section footer-section-right">
        <div className="footer-section-column">
        <div className='footer-section-column-head'><h5>Get In Touch </h5> </div>
        
<div className='form'>
  <input className="form-control form-control-lg" placeholder='Your Email' onChange={handleUserEmailChange} value ={userEmail} type="text"/>
  <button className="form-label" type='submit' onClick={handleSubmit}>Subscribe</button>
 </div>
 <p className='footer-section-column-head-r'>Lorem impsum dolor amit</p>
 </div>
 </div>
            </div>
            <div className="footer-bottom">
            Made with ❤️ by Nehal
            </div>
        </div>
  )
}

export default Footer