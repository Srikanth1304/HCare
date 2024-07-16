import React, { useState, useEffect } from 'react';

const FetchApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            // Fetch data from the API endpoint
            const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');

            // Check if response is not ok
            if (!response.ok) {
                setLoading(false); // Set loading to false
                setError('Failed to fetch data'); // Set error message
                return;
            }

            // Parse response to JSON
            const jsonData = await response.json();

            // Set fetched data to state
            setData(jsonData);
            setLoading(false); // Set loading to false
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array means run once when component mounts

    // Conditional rendering based on loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No data available</p>;

    // Render fetched data
    return (
        <div>
            <h2>Data from API:</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchApi;
