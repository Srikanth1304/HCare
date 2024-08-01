import React, { useState } from 'react';
import axios from 'axios';

const DeletePatient = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:4001/deletePatient/${id}`);
      console.log(response.data);
      alert("Patient deleted");
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <>
      <input 
        type='number' 
        placeholder="Enter Id"
        value={id} 
        onChange={(e) => setId(e.target.value)} />

      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default DeletePatient;
