import { PlusIcon,CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { shoppingCartContext } from "../../Context";
import React from 'react';

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

    React.useEffect(() => {
        if(context.loading) {
            setTimeout (() => {
                context.setLoading(false)
            }, 1500)
        } else {
            null
        }
    }, [context.loading])

        if(!context.loading) {
            return (
            <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg hover:shadow-lg hover:shadow-gray-400 hover:ease-in-out duration-300'
            onClick={() => showProduct(data.data)}>
                <figure className='relative mb-2 w-full h-4/5'>
                    <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                    <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title}/>
                    {renderIcon(data.data.id)}
                </figure>
                <p className=' flex justify-between px-2 items-center'>
                    <span className='text-sm font-light'>{data.data.title}</span>
                    <span className='text-lg font-medium'>${data.data.price}</span>
                </p>
            </div>
            )
        } else {
            return (
                <div className="bg-gray-300 rounded-lg animate-pulse w-56 h-60">
                    <figure className="relative mb-2 w-full h-4/5">
                        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'"></span>
                        <img className="w-full h-full object-cover rounded-lg"/>
                        {renderIcon(data.data.id)}
                    </figure>
                    <p className=' flex justify-between px-2 items-center'>
                        <span className='text-sm font-light'></span>
                        <span className='text-lg font-medium'></span>
                    </p>
                </div>
            )
        }

}

export {Card};