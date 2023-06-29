import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { shoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'
import './style.css'

const CheckoutSideMenu = () => {
    const context = useContext(shoppingCartContext)

    const handleDelete = (id) => {
        const filteredProduct = context.cardProducts.filter(product => product.id != id)
        context.setCardProducts(filteredProduct)
    }

    const handleCheckout = () => {

    const currentDate = new Date()
    const formateDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`

        const orderToAdd = {
            date: formateDate,
            products: context.cardProducts,
            totalProducts: context.cardProducts.length,
            totalPrice: totalPrice(context.cardProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCardProducts([])
        context.setCount(0);
        context.closeCheckoutSideMenu()
        context.setSearch(null)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col
        fixed right-0 border border-black rounded-lg bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cardProducts.map(product => {
                    return (
                        <OrderCard
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            key={product.id}
                            handleDelete={handleDelete}/>
                    )
                })
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-medium'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cardProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg'
                    onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export {CheckoutSideMenu}