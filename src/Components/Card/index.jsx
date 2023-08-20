import { PlusIcon,CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { shoppingCartContext } from "../../Context";

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
                    className=' absolute top-0 right-0 flex justify-center items-center bg-black
                    w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-6 w-6 text-white'/>
                </div>
            )
        } else {
            return (
            <div
                    className=' absolute top-0 right-0 flex justify-center items-center bg-white
                    w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) =>addProductToCard(event, data.data)}>
                    <PlusIcon className='h-6 w-6 text-black'/>
            </div>
            )
        }
    }

    return (
        <div
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title}/>
                {renderIcon(data.data.id)}
            </figure>
            <p className=' flex justify-between items-center'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
        )
}

export {Card};