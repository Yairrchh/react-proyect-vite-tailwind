import { createContext, useState, useEffect } from "react";

export const shoppingCartContext = createContext();

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if(!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvider = ({children}) => {
    // My account
    const [account, setAccount] = useState({})

    // Sign out
    const [signOut, setSignOut] = useState(false)

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
//get products by title
const [search, setSearch] = useState(null)
//get products by category
const [searchByCategory, setSearchByCategory] = useState(null)

useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])


const filteredItemsBySearch = (items, search) => {
    return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
}

const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
}

const filterBy = (searchType, items, search, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
        return(
            filteredItemsBySearch(items,search)
        )
    }

    if (searchType === 'BY_CATEGORY') {
        return(
            filteredItemsByCategory(items,searchByCategory)
        )
    }

    if (!searchType) {
        return items
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return(
            filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        )
    }
}



useEffect(() => {
    if(search && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, search, searchByCategory))
    if(!search && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, search, searchByCategory))
    if(!search && !searchByCategory) setFilteredItems(filterBy(null, items, search, searchByCategory))
    if(search && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, searchByCategory))
}, [items,search, searchByCategory])

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
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}
