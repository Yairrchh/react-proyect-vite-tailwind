import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { shoppingCartContext } from "../../Context"
import { ShoppingCart } from "../ShoppingCart"

import { Bars3Icon } from '@heroicons/react/24/solid'
import { useMediaQuery } from 'react-responsive';


const Navbar = () => {
    const activeStyle = 'underline underline-offset-8 rounded-sm bg-green-200 p-0.5'
    const context = useContext(shoppingCartContext)

    //SignOut
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut;

    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    //State MenuBurger
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //function alter visibility menuBurguer
    const isTabletOrMobile = useMediaQuery({maxWidth: 767})

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
        return (
            <>
            <li className='text-black/60'>
            {parsedAccount?.email}
            </li>
            <li>
            <NavLink
                to='/my-orders'
                onClick={() => toggleMenu()}
                className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Orders
            </NavLink>
            </li>
            <li>
            <NavLink
            onClick={() => toggleMenu()}
                to='/my-account'
                className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Account
            </NavLink>
            </li>
            <li>
            <NavLink
                to='/sign-in'
                className={({ isActive }) => isActive ? activeStyle : undefined}
                onClick={() => {handleSignOut(); toggleMenu()}}>
                Sign out
            </NavLink>
            </li>
        </>
        )
    } else {
        return (
        <li>
            <NavLink
            to="/sign-in"
            className={({ isActive }) => isActive ? activeStyle : undefined }
            onClick={() => {handleSignOut(); toggleMenu()}}>
            Sign in
            </NavLink>
        </li>
        )
    }
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm  font-light
        bg-slate-300 max-md:flex-col max-md:items-start">
            <div className={`${isTabletOrMobile ? 'flex justify-between max-md:w-full' : 'hidden'}`}>
                <button>
                    <Bars3Icon className={`${isTabletOrMobile ? 'w-6 h-6' : 'hidden'}`} onClick={toggleMenu} />
                </button>
                <NavLink to="/"><p className='text-2xl font-bold mr-3'>Shopi</p></NavLink>
            </div>
            <ul className={`${isTabletOrMobile ? `${isMenuOpen ? 'flex' : 'hidden'} flex-col items-start gap-3 w-full mb-10` : 'flex items-center gap-3 flex-row'}`}>
                {/* <li className="font-semibold text-lg">
                    <NavLink
                    to={`${isUserSignOut ? '/sign-in' : '/'}`}>
                        Shopi
                    </NavLink>
                </li> */}
                <NavLink to="/"><p className={`${isTabletOrMobile ? 'hidden' : 'text-2xl font-bold'}`}>Shopi</p></NavLink>
                <li>
                    <NavLink
                    to='/'
                    onClick={() => {context.setSearchByCategory(); toggleMenu()}}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    onClick={() => {context.setSearchByCategory('clothes'); toggleMenu()}}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    onClick={() => {context.setSearchByCategory('electronics'); toggleMenu()}}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'
                    onClick={() => {context.setSearchByCategory('fornitures'); toggleMenu()}}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    onClick={() => {context.setSearchByCategory('toys'); toggleMenu()}}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    onClick={() => {context.setSearchByCategory('others'); toggleMenu()}}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className={`${isTabletOrMobile ? `${isMenuOpen ? 'flex' : 'hidden'} flex-col items-start gap-3 w-full ` : 'flex items-center gap-3 flex-row'}`}>
                {renderView()}
                <li className='flex items-center'>
                    <ShoppingCart/>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar};