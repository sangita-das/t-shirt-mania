import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(ringContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;