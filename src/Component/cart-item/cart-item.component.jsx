import React from 'react';
import './cart-item.style.css';

const CartItem = ({item : {name,price,imageUrl,quantity} }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>

        </div>
    </div>
)

export default CartItem ;