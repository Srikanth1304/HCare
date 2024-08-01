import React from 'react';
import { Link } from 'react-router-dom';
import './head.css';

const Header = (Props) => {
    return (
        <div className="head">
            <div className="tit-nav">
                <div className='tit'>{Props.title}</div>
                <div className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/appointment">Appointment</Link>
                    <Link to="/availability">Availability</Link>
                    <Link to="/specialisations">Specialisations</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to='/showPatients'>PatientList</Link>
                    <Link to="/addPatients">AddPatients</Link>
                    <Link to="/deletePatient">DeletePatient</Link>
    
        
                    <div className='head-right'>
                        <Link to="/logout">Logout</Link>
                        
                    </div>
                </div>
                {/* <div className='logo'>
                    <img src="download.jpeg" alt="here"></img>
                </div> */}
            </div>
        </div>
    );
}

export default Header;
