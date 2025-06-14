import { createContext, useContext, useEffect,  useState} from "react";
import cardInfo from "../../Data";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCartItem(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem))
    }, [cartItem])

    const addToCart = (id) => {
        setCartItem(prevItems => {
            const existingItem = prevItems.find(item => item.id == id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            const product = cardInfo.find(item => item.id === id)
            if (!product) return prevItems
            return [...prevItems, {
                id: product.id,
                name: product.name,
                version: product.version,
                group: product.group,
                img: product.img,
                price: parsePrice(product.price),
                quantity: 1
            }]
        })
    }

    const parsePrice = (priceStr) => {
        return parseInt(priceStr.replace(/\s/g, ''), 10);
    };

    const removeFromCart = (id) => {
        setCartItem(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
            return;
        }

        setCartItem(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const totalPrice = cartItem.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );

    const itemsCount = cartItem.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const clearCart = () => {
        setCartItem([]);
    };
    return (
        <CartContext.Provider
            value={{
                cartItem,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalPrice,
                itemsCount,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};