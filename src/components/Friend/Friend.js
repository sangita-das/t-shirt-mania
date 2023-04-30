import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(ringContext)
    return (
        <div>
            <h4>Friends</h4>
            <p><small>House: {house}</small></p>
            <button onClick={() => setHouse(house-1)}>Decrease</button>
        </div>
    );
};

export default Friend;