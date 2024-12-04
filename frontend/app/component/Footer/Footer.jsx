import React from 'react'
import "./Footer.css";
import { anton } from '../Header/Header';


const Footer = () => {
  return (
    <div className='p-8' style={{backgroundColor:"black"}}>
      <div className='footer-container'>
        <div className='footer-logo-container'>
          <div>
            <h1 className={anton.className} style={{ fontSize: "96px", fontWeight: "400", marginBottom: "0px" }}>Velvet 50.</h1>
            <p style={{ fontSize: "32px", fontWeight: "400", marginTop: '-10px' }}>Small Budget, Big Impact</p>
          </div>
        </div>
        <div className='footer-text-container'>
          <div style={{ marginLeft: "3rem" }}>
            <div >
              <h1 style={{ fontSize: "40px", fontWeight: "400" }}>Our Newsletter</h1>
              <p style={{ fontSize: "16px", fontWeight: '400' }}>Stay up to date with our latest news, receive exclusive deals, and more.</p>
            </div>
            <div className='mt-7 '>
              <div className='input-div'>
                <input type="email" placeholder='Enter your email' className='focus:outline-white-600' />
                <div className='input-group'>
                  <button className='btn btn-white'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "3rem" }}>
            <div>
              <h1>Contact Us</h1>
              <p className='mt-4' style={{ fontSize: "16px" }}>info@velvet50.com</p>
            </div>
            <div>
              <h1>Working hours</h1>
              <div className='mt-4'>
                <p><span>Monday – Friday</span>09:00 am – 09:00 pm <span></span></p>
                <p className='mt-5'>Saturday – Sunday – Closed</p>
              </div>
            </div>
            <div>
              <h1>Quick Links</h1>
              <div className='mt-4'>
                <p className='mt-4'>Home</p>
                <p className='mt-5'>About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='mt-4' style={{display:"flex"}}>
        <div className='mr-9'>
          <h1>Terms & Condition</h1>
        </div>
        <div>
          <h1>Our Privacy policy</h1>
        </div>
      </div>
      
    </div>
    
  )
}

export default Footer
