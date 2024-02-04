import React, { useState } from 'react'

const CartSection = () => {
    const [count, setCount] = useState(0);
    
    const increase = () => {
        setCount(count+1);
    };

    const decrease = () => {
        setCount(count-1);
    };

  return (


    <div className='cart-count'>
        <button onClick={decrease}>-</button>
        <h2>{count}</h2>
        <button onClick={increase}>+</button>
    </div>

  )
}

export default CartSection