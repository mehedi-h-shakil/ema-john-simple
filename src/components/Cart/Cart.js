import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4 className='title'>Order Summary</h4>
            <div className='order-details'>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Cart;