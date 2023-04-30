import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = ({house}) => {
    const money = useContext(MoneyContext)
    return (
        <div>
            <h4>Brother</h4>
            <p><small>House: {house}</small></p>
            <p>Money: {money}</p>
        </div>
    );
};

export default Brother;