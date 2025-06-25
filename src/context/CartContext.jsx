// import React, { createContext, useState, useContext, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState(() => {
//         // Initialize cart from localStorage if available
//         try {
//             const storedCartItems = localStorage.getItem('cartItems');
//             return storedCartItems ? JSON.parse(storedCartItems) : [];
//         } catch (error) {
//             console.error("Failed to parse cart items from localStorage:", error);
//             return [];
//         }
//     });

//     // Save cart items to localStorage whenever they change
//     useEffect(() => {
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }, [cartItems]);

//     const addToCart = (product) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find((item) => item.id === product.id);

//             if (existingItem) {
//                 // If item exists, increase quantity
//                 return prevItems.map((item) =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             } else {
//                 // If item doesn't exist, add it with quantity 1
//                 return [...prevItems, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     const removeFromCart = (productId) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
//     };

//     const updateQuantity = (productId, quantity) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
//             )
//         );
//     };

//     const clearCart = () => {
//         setCartItems([]);
//     };

//     const getTotalItems = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//     };

//     return (
//         <CartContext.Provider
//             value={{
//                 cartItems,
//                 addToCart,
//                 removeFromCart,
//                 updateQuantity,
//                 clearCart,
//                 getTotalItems,
//                 getTotalPrice,
//             }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     return useContext(CartContext);
// };