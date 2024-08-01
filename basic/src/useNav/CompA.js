import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompA = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        navigate('/CompB', { state: { message } });
    };

    return (
        <>
            <input 
                type="text" 
                placeholder="message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button onClick={sendMessage}>To CompB</button>
        </>
    );
};

export default CompA;
