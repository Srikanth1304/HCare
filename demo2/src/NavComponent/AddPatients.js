import axios from "axios";
import React,{useState} from 'react';


const AddPatients=()=>{
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [address,setAddress]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:4001/patient',{
                name,age,address
            });
            console.log(response.data);
            alert("Patient Added");

            setName('');
            setAge('');
            setAddress('');
        }catch(error){
                console.error("Error while fetching api");
        }
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Name of patient"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}/>

            <input
            type="text"
            placeholder="city"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}/>       

            <button type='submit'>Add</button>
        </form>
        
        </>
        
    );
}
export default AddPatients;