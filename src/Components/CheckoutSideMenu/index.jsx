import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { shoppingCartContext } from '../../Context/context'
import { OrderCard } from '../../Components/OrderCard'
import { totalPrice, groupByQuantity } from '../../Utils'
import './style.css'

const CheckoutSideMenu = () => {
    const context = useContext(shoppingCartContext)
    const groupedProducts = groupByQuantity(context.cardProducts)

    const handleDelete = (id) => {
        const filteredProduct = context.cardProducts.filter(product => product.id != id)
        context.setCardProducts(filteredProduct)
    }

    const handleCheckout = () => {

    const currentDate = new Date()
    const formateDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`

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
        fixed right-0 border border-line rounded-lg bg-white w-full md:w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-display text-lg'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-ink cursor-pointer'/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                groupedProducts.length > 0
                ? groupedProducts.map(product => {
                    return (
                        <OrderCard
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            quantity={product.quantity}
                            key={product.id}
                            handleDelete={handleDelete}/>
                    )
                })
                : <p className='font-body text-sm text-ink/60 mt-4'>Your cart is empty.</p>
            }
            </div>
            <div className='px-6 mb-6 pt-4 perforation'>
                <p className='flex justify-between items-center mb-4'>
                    <span className='font-mono uppercase text-sm tracking-wide'>Total</span>
                    <span className='font-mono font-bold text-xl'>${totalPrice(context.cardProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                    className='bg-accent hover:bg-accent/90 disabled:bg-ink/20 disabled:text-ink/40 py-3 text-paper font-mono uppercase tracking-wide text-sm w-full rounded-lg transition-colors'
                    disabled={context.cardProducts.length === 0}
                    onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export {CheckoutSideMenu}