import React from 'react'
import { ServicesData } from '../HardcoreData/Services'
import '../Styles/Service.css'

function Service() {
  
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