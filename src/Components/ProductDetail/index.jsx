
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid'
import './style.css'
import { useContext } from 'react'
import { shoppingCartContext } from '../../Context/context'

const ProductDetail = () => {
    const context = useContext(shoppingCartContext)

    const isInCart = context.cardProducts.filter(product => product.id === context.productToShow.id).length > 0

    const addProductToCard = () => {
        context.setCount(context.count + 1)
        context.setCardProducts([...context.cardProducts, context.productToShow])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    return (
        <aside className={`${context.isProductDetailOpen ? 'block' : 'hidden'} product-detail flex flex-col fixed right-0 border border-line
        rounded-lg bg-white mt-1.5 w-full md:w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-display text-lg'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-ink cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col flex-1 overflow-y-auto'>
            <figure className='tag-hole relative isolate mx-6 w-[calc(100%-3rem)]'>
                <span className='absolute bottom-2 left-2 bg-ink text-paper font-mono uppercase text-[10px] tracking-wide px-3 py-1 rounded'>{context.productToShow.category?.name}</span>
                <img
                className='w-full h-80 rounded-lg object-cover'
                src={context.productToShow.images ? context.productToShow.images[0]:''}
                alt={context.productToShow.title} />
            </figure>
            <div className='flex flex-col p-6 gap-2'>
                <span className='font-mono font-bold text-2xl text-accent'>${context.productToShow.price}</span>
                <span className='font-body font-medium text-base'>{context.productToShow.title}</span>
                <span className='font-body font-light text-sm text-ink/70'>{context.productToShow.description}</span>
                <button
                className='mt-4 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 py-3 text-paper font-mono uppercase tracking-wide text-sm w-full rounded-lg transition-colors'
                onClick={() => addProductToCard()}>
                    {isInCart && <CheckIcon className='h-4 w-4'/>}
                    {isInCart ? 'Added to cart' : 'Add to cart'}
                </button>
            </div>
            </div>
        </aside>
    )
}

export {ProductDetail};