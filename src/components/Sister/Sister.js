import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House: {house}</small></p>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money+1)}>Money Increase</button>

            <button onClick={() => setMoney(money-1)}>Decrease Money</button>
        </div>
    );
};

export default Sister;