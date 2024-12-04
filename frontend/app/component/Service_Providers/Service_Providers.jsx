import React from 'react'
import '../Service_Providers/Service_Providers_section.css'
import Card_1 from '../UI/Card_1'

const Service_Providers = () => {
  return (
    <div className='Service_Providers_section px-24 flex flex-col pt-32'>
      <p className="Service_Providers_section_p">Top booked service providers <br />
fromn <span className='serv_prv_velvet'>Velvet 50</span> </p>

<div className='flex gap-3 pt-14'>
    <Card_1/>
    <Card_1/>
    <Card_1/>
    <Card_1/>
</div>

<div className='srv_view_btn mt-14'>
<p className="srv_view_btn_p">View All</p>
</div>


    </div>
  )
}

export default Service_Providers
