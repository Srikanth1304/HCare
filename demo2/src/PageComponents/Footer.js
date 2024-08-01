import React from 'react'
import './foot.css'
const Footer=(Props)=>{
    return(
    <div className='foot'>
        <h2>You can Contact me through {Props.contact1} or mail me at {Props.contact2}</h2>
    </div>
    );
}
export default Footer;