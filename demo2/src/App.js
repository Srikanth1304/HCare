import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './PageComponents/Header';
import Body from './PageComponents/Body';
import Footer from './PageComponents/Footer';
import Left from './PageComponents/Left';
import PatientList from './NavComponent/PatientList';
import Login from './NavComponent/Login';
import SignUp from './NavComponent/SignUp';
import Appointment from './NavComponent/Appointment';
import Availability from './NavComponent/Availability';
import Specialisations from './NavComponent/Specialisations';
import Contacts from './NavComponent/Contacts';
import AddPatients from './NavComponent/AddPatients';
import DeletePatient from './NavComponent/DeletePatient';
import LogOut from './NavComponent/LogOut';

function App() {
  const [about, setAbout] = useState({
    name: "Srikanth",
    sisterName: "Ashwini",
    domain: "Homeopathy",
    title: "HCare",
    friend1: "Usha",
    friend2: "Sanjana",
    friend3: "Angel",
    contact1: "7672001804",
    contact2: "srikanthchebrolu727@gmail.com"
  });
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <div className='App'>
        {showLogin && (
          <>
            <Login setShowLogin={setShowLogin} />
            <SignUp setShowLogin={setShowLogin} />
          </>
        )}
        {!showLogin && (
          <>
            {/* <LogOut setShowLogin={setShowLogin} /> */}
            <Header title={about.title} />
            <div className='content'>
              <Left
                sisterName={about.sisterName}
                friend2={about.friend2}
                friend3={about.friend3}
                friend1={about.friend1}
              />
              <Routes>
                <Route path="/" element={<Body name={about.name} sisterName={about.sisterName} domain={about.domain} />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/availability" element={<Availability />} />
                <Route path="/specialisations" element={<Specialisations />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/showPatients" element={<PatientList />} />
                <Route path="/addPatients" element={<AddPatients />} />
                <Route path="/deletePatient" element={<DeletePatient />} />
                <Route path="/logout" element={<LogOut setShowLogin={setShowLogin} />} />
              </Routes>
            </div>
            <Footer contact1={about.contact1} contact2={about.contact2} />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
