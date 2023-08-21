
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'
import { useContext } from 'react'
import { shoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(shoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'block' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black
        rounded-lg bg-white w-full md:w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-wrap'>
            <figure className='px-6 w-full'>
                <img
                className='w-full h-80 rounded-lg object-cover'
                src={context.productToShow.images ? context.productToShow.images[0]:''}
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
            </p>
            </div>
        </aside>
    )
}

export {ProductDetail};