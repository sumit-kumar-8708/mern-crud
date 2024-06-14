
import React from 'react';
import { useState } from 'react';
import axios from 'axios';



const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/data', {
                name,
                email,
            });
            alert(response.data);
        } catch (error) {
            alert('Error inserting data');
        }
    };


    return (
        <div className="App">
            <h1>Insert Data</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
