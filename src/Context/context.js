import { createContext } from "react";

export const shoppingCartContext = createContext();

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')

    if(!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
    }

    if(!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
    }
}
