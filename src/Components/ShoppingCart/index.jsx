import { useContext, useEffect, useRef, useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { shoppingCartContext } from '../../Context/context'

const ShoppingCart = () => {
    const context = useContext(shoppingCartContext)
    const [bump, setBump] = useState(false)
    const isFirstRender = useRef(true)

    const openCheckoutSideMenu = () => {
    context.openCheckoutSideMenu()
    context.closeProductDetail()
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        setBump(true)
        const timeout = setTimeout(() => setBump(false), 350)
        return () => clearTimeout(timeout)
    }, [context.cardProducts.length])

    return (
    <div className='relative flex gap-0.5 items-center cursor-pointer' onClick={() => openCheckoutSideMenu()}>
        <ShoppingBagIcon className='w-6 h-6 fill-none stroke-paper'/>
        <div className={`absolute bottom-3.5 left-3.5 flex justify-center items-center
        rounded-full bg-accent w-4 h-4 text-xs text-paper font-mono ${bump ? 'animate-bump' : ''}`}>
        {context.cardProducts.length}
        </div>
    </div>
)
}

export {ShoppingCart}