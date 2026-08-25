import { PlusIcon,CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { shoppingCartContext } from "../../Context/context";
import { formatCategory } from "../../Context/categories";

const Card = (data) => {
    const context = useContext(shoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.closeCheckoutSideMenu()
        context.setProductToShow(productDetail)
    }

    const addProductToCard = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCardProducts([...context.cardProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCard = context.cardProducts.filter(product => product.id === id).length > 0

        if(isInCard) {
            return (
                <div
                    className=' absolute top-0 right-0 flex justify-center items-center bg-moss
                    w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-6 w-6 text-paper'/>
                </div>
            )
        } else {
            return (
            <div
                    className=' absolute top-0 right-0 flex justify-center items-center bg-paper
                    w-6 h-6 rounded-full m-2 p-1 hover:bg-accent hover:text-paper transition-colors'
                    onClick={(event) =>addProductToCard(event, data.data)}>
                    <PlusIcon className='h-6 w-6 text-ink hover:text-paper'/>
            </div>
            )
        }
    }

        if(!context.loading) {
            return (
            <div
            className='tag-hole relative isolate bg-white cursor-pointer w-56 h-60 rounded-lg border border-line
            hover:shadow-lg hover:shadow-ink/10 hover:-translate-y-1 hover:-rotate-1 transition-all duration-300'
            onClick={() => showProduct(data.data)}>
                <figure className='relative mb-2 w-full h-4/5'>
                    <span className='absolute bottom-0 left-0 bg-ink text-paper font-mono uppercase text-[10px] tracking-wide m-2 px-3 py-1 rounded'>{formatCategory(data.data.category)}</span>
                    <img className='w-full h-full object-cover rounded-t-lg' src={data.data.images[0]} alt={data.data.title}/>
                    {renderIcon(data.data.id)}
                </figure>
                <p className='flex justify-between px-2 items-center'>
                    <span className='text-sm font-body truncate mr-2'>{data.data.title}</span>
                    <span className='text-lg font-mono font-bold text-accent shrink-0'>${data.data.price}</span>
                </p>
            </div>
            )
        } else {
            return (
                <div className="bg-line/40 rounded-lg animate-pulse w-56 h-60">
                    <figure className="relative mb-2 w-full h-4/5">
                        <div className="w-full h-full rounded-t-lg bg-line/60"></div>
                    </figure>
                    <p className='flex justify-between px-2 items-center'>
                        <span className='text-sm font-light'></span>
                        <span className='text-lg font-medium'></span>
                    </p>
                </div>
            )
        }

}

export {Card};