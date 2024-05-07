import React from 'react'
import '../Styles/Service.css'
import { ServicesData } from '../HardcoreData/Services'

function Service() {
  return (
<>

        <div className="service-cointainer">
            <h3 className='title'>Our Services</h3>
           <div className="box-cointainer">
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