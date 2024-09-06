// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const Cart = () => {
//   const { cart, removeFromCart, updateCartQuantity } = useContext(AppContext);

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>
//             <h3>{item.name}</h3>
//             <p>Quantity: {item.quantity || 1}</p>
//             <input
//               type="number"
//               value={item.quantity || 1}
//               onChange={(e) => updateCartQuantity(item.id, e.target.value)}
//             />
//             <p>${item.price * (item.quantity || 1)}</p>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;

// Cart.jsx
import React from 'react';


const Cart = () => {


  return (
    <div>
     <h2>Cart Page</h2>
    </div>
  );
};

export default Cart;
