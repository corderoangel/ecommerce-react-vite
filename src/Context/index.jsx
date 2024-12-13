import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    const [productToShow, setProductToShow] = useState({});

    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping Cart · Order
    const [order, setOrder] = useState([])

    const [items, setItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('searchByTitle: ', searchByTitle)

    useEffect(() => {
        // fetch('https://api.escuelajs.co/api/v1/products')
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))       
    }, [])

    return(
        <ShoppingCartContext.Provider
        value={{count, 
                setCount, 
                isProductDetailOpen, 
                openProductDetail, 
                closeProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order, 
                setOrder,
                searchByTitle,
                setSearchByTitle,
                items,
                setItems}}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}