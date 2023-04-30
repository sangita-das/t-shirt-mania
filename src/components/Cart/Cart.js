import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item !!!</p>
    }
    else if(cart.lelngth === 1){
        message = <div>
            <h3>Amar jonno akta nao</h3>
            <p>Tomar jonno ekta</p>
            <p><small>amar jonno arekta naw, please.</small></p>
        </div>
    }
    else{
           message = <p>Thanks for buying!!</p>
    }
    return (
        <div >
            <h3 className= { cart.length === 2 ? `orange` : `purple` }>Order summary</h3>

            <h5 className = {`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</h5>

            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                {tshirt.name}

                <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }

            {
                message
            }

            {
                cart.length === 3 ? <p> 3 jon ke gift diba? </p> : <p>okay done, </p>
            }
            <p>And Operator</p>
            {
                cart.length === 2 && <h2>Double items</h2>
            }
            <p>OR operator</p>
            {
                cart.length === 4 || <p>4ta item na</p>
            }
        </div>
    );
};

export default Cart;


/* 
Conditional Rendering
1. use element in a variable and then use if-else to set value
2. ternary operator condition ? true : false
3. && operator ( if condition is true, I want to display something)
4. || operator ( if condition is false, i want to display something)

*/