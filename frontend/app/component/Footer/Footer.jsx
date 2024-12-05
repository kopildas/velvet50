import React from 'react'
import "./Footer.css";
import { anton } from '../Header/Header';


const Footer = () => {
  return (
    <div className='p-8' style={{backgroundColor:"black"}}>
      <div className='footer-container'>
        <div className='footer-logo-container'>
          <div>
            <h2 className={anton.className} style={{ fontSize: "96px", fontWeight: "400", marginBottom: "0px" }}>Velvet 50.</h2>
            <p style={{ fontSize: "32px", fontWeight: "400", marginTop: '-10px' }} className='ftr_txt_2'>Small Budget, Big Impact</p>
          </div>
        </div>
        <div className='footer-text-container'>
          <div style={{ marginLeft: "3rem" }}>
            <div >
              <h2 style={{ fontSize: "40px", fontWeight: "400" }} className='nws_2'>Our Newsletter</h2>
              <p style={{ fontSize: "16px", fontWeight: '400' }} className="nws_2_p mt-4">Stay up to date with our latest news, receive exclusive deals, and more.</p>
            </div>
            <div className='mt-6 '>
              <div className='input-div'>
                <input type="email" placeholder='Enter your email' className='focus:outline-white-600' />
                <div className='input-group'>
                  <button className='btn btn-white'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3rem" }} className='ftr_txt_part3 
          '>
            <div>
              <h2 className='ftr_txt_sm'>Contact Us</h2>
              <p className='mt-4' style={{ fontSize: "16px" }}>info@velvet50.com</p>
            </div>
            <div>
              <h2 className='ftr_txt_sm'>Working hours</h2>
              <div className='mt-4'>
                <p><span>Monday – Friday</span>09:00 am – 09:00 pm <span></span></p>
                <p className='mt-5'>Saturday – Sunday – Closed</p>
              </div>
            </div>
            <div>
              <h2 className='ftr_txt_sm'>Quick Links</h2>
              <div className='mt-4'>
                <p className='mt-4'>Home</p>
                <p className='mt-5'>Deliver 2 Me</p>
                <p className='mt-5'>About</p>
                <p className='mt-5'>Events & Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='mt-4 last_ftr_txt' style={{display:"flex"}} >
        <div className='mr-9'>
          <h2>Terms & Condition</h2>
        </div>
        <div>
          <h2>Our Privacy policy</h2>
        </div>
      </div>
      
    </div>
    
  )
}

export default Footer
