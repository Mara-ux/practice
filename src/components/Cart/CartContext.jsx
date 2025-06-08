import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id)
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id ? {...i, quantity: i.quantity + 1 } : i
                )
            }
            return [...prevItems, {...item, quantity: 1 }]
        })
    }
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity} : item
            )
        )
    }
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)