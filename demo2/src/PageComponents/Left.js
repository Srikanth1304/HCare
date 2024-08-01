import React from 'react'
import './left.css'
const Left=(Props)=>{
    return(
        <div className="left">
              <h2>Here, Doctore profiles will be displayed such as their ratings, their experience etc..
                user can select one of them. <br></br><br></br>
                <b><h2><i>Co-Ordinating with</i></h2></b>
                <ul className='co'>
                <li>{Props.sisterName}</li> 
                <li>{Props.friend1}</li>
                <li>{Props.friend2}</li>
                <li>{Props.friend3}</li>
                </ul>
               
              </h2>
        </div>
  
    );
}
export default Left;