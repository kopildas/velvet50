import React from 'react';
import "./PromotionCard.css";
import { SiTicktick } from "react-icons/si";
const PromotionCard = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-img'>
                    <img src="https://i.ibb.co.com/WnhThGd/anatol-lem-Lk-NI1r-MHYJs-unsplash.jpg" alt="" style={{ height: "500px", width: "600" }} />
                </div>
                <div className='card-info'>
                    <div>
                        <h2 style={{ color: "white", fontSize: "2rem"}}>Students registration here</h2>
                    </div>
                    <div className='mt-4'>
                        <p style={{padding:"10px 8px", backgroundColor:"white", width:"80%", color:'black', display:"flex",borderRadius:"186px", paddingLeft:"12px"}}>
                            <SiTicktick style={{marginTop:"4px"}}/>
                            <span className='d-inline-block ms-5'>Affordable monthly plan</span>
                            
                        </p>
                    </div>
                    <div className='mt-2'>
                        <p style={{padding:"10px 8px", backgroundColor:"white", width:"80%", color:'black', display:"flex",borderRadius:"186px", paddingLeft:"12px"}}>
                            <SiTicktick style={{marginTop:"4px"}}/>
                            <span className='d-inline-block ms-5'>Earn while in School</span>
                            
                        </p>
                    </div>
                    <div className='mt-2'>
                        <p style={{padding:"10px 8px", backgroundColor:"white", width:"80%", color:'black', display:"flex",borderRadius:"186px", paddingLeft:"12px"}}>
                            <SiTicktick style={{marginTop:"4px"}}/>
                            <span className='d-inline-block ms-5'>Free marketing and promotion</span>
                            
                        </p>
                    </div>
                    <div className='mt-9' style={{display:"flex", justifyContent:"center"}} >
                        <button className='p-2' style={{width:"100%", backgroundColor:"black", borderRadius:"186px",
                        border:"1px solid white", width:"400px",
                        marginTop:"3rem"
                        }}>Register now</button>
                    </div>
                </div>
            </div>
            
            
        </div>

    );
};

export default PromotionCard;