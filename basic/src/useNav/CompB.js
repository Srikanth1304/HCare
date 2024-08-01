import React from 'react';
import { useLocation } from 'react-router-dom';

const CompB = () => {
    const location = useLocation();
    const message = location.state ? location.state.message : "No message provided";

    return (
        <>
            <h2>{message}</h2>
        </>
    );
};

export default CompB;
