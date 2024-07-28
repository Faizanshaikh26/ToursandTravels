import React, { useEffect } from 'react'
import '../Styles/Service.css'
import { ServicesData } from '../HardcoreData/Services'
import Aos from 'aos'

function Service() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
<>

        <div className="service-cointainer" >
            <h3 className='title'>Our Services</h3>
           <div className="box-cointainer" data-aos="fade-up-right">
         {
          ServicesData.map((data)=>{
           return (
            <>
             <div className="box">
            <i className={data.titleIcon}></i>
                 <h3>{data.title}</h3>
                <p>{data.description}</p>
 
             </div>
            </>
           )
          })
         }
          
           </div>
        </div>
</>
  )
}

export default Service