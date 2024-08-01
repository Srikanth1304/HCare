import React from 'react'
import './body.css'
const Body=(Props)=>{
    return(
        <div className='body'>
             <h2>Yeah, I am {Props.name}. The primary goal of this site is to facilitate virtual consultations
                 for doctors, especially in the field of {Props.domain}. Inspired by my sister, who is studying {Props.domain} in Bangalore, I aim to connect patients with doctors through video calls to 
                 address their health concerns. Since {Props.domain} medicines are readily available, they can 
                 be shipped to patients as needed. Users must create an account to access their dashboard and view 
                 their medical history. Additionally, the site will feature automated reminders for appointments and
                 medication schedules, information on the nearest {Props.domain} clinics for further in-person consultationif necessary, and a secure
                 payment system to handle consultation fees and medication purchases directly through the website.</h2>
        </div>
   
    );
}
export default Body;