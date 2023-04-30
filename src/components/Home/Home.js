import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);


        const handleAddToCart = tshirt => {
            // console.log(tshirt);

            const exists = cart.find(ts => ts._id === tshirt._id);
            if(exists){
                alert('t-shirt already added');
            }
            else{
                const newCart = [...cart, tshirt];
                setCart(newCart);
                // alert('successfully added')
            }
          
        }


       const  handleRemoveItem = tshirt => {
            // console.log(tshirt);
            const remaining = cart.filter(ts => ts._id !== tshirt._id);
            setCart(remaining);
        }
    

    return (
        <div className="home-container">
            {/* <h1>This is Home: {tshirts.length}</h1> */}

            <div className="t-shirt-container">
                {
                  tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart = {handleAddToCart}

                       
                    ></TShirt>)
                }
            </div>


            <div className="cart-container">
                <Cart
                cart = {cart}
                handleRemoveItem = {handleRemoveItem}
                >

                </Cart>
                <h2>This is cart section</h2>
            </div>
             


        </div>
    );
};

export default Home;