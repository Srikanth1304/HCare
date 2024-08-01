

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PatientList.css'; 

const PatientList = () => {
  const [patients, setPatients] = useState([]);


useEffect(()=>{
  const fetchData=async ()=>{
    try{
      const response=await axios.get('http://localhost:4001/getDetails');
      setPatients(response.data);
    }catch(error){
      console.log("Error at fetchingf data ");
    }
  }
fetchData()},[])

return (
    <div className="patient-list-container">
      <h2>Patient List</h2>
      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
