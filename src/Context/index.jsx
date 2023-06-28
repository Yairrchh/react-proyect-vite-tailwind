import { createContext, useState, useEffect } from "react";

export const shoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    // shopping card - increment cuantity
    const [count, setCount] = useState(0);

    // produc detail - open/close
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false);
    const openProductDetail = () => SetIsProductDetailOpen(true)
    const closeProductDetail = () => SetIsProductDetailOpen(false)

    // product detail - show product
    const  [productToShow, setProductToShow]= useState({})

    //shopping card- add product to card
    const  [cardProducts, setCardProducts]= useState([])

    // Checkout side menu - close/open
    const [isCheckoutSideMenuOpen, SetIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(false)

//shopping car - myOrder

const [order, setOrder] = useState([])

// get products
const [items, setItems] = useState(null);
const [filteredItems, setFilteredItems] = useState(null);

const [search, setSearch] = useState(null)

useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])


const filteredItemsBySearch = (items, search) => {
    return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
}

useEffect(() => {
    if(search) setFilteredItems(filteredItemsBySearch(items,search))
}, [items,search])

    return (
        <shoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cardProducts,
            setCardProducts,
            isCheckoutSideMenuOpen,
            SetIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            search,
            setSearch,
            filteredItems,
            setFilteredItems
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}
