import { useContext } from 'react'
import { shoppingCartContext } from '../../Context/context'
import { OrderCard } from '../../Components/OrderCard'
import { Layout } from "../../Components/Layout"
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { groupByQuantity } from '../../Utils'


function MyOrder() {
    const context = useContext(shoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    const groupedProducts = groupByQuantity(context.order?.[index]?.products || [])

return (
    <Layout>
    <div className="flex items-center justify-center relative w-80 mb-6">
            <Link to='/my-orders' className="absolute left-0">
                <ChevronLeftIcon className="h-6 w-6 text-ink cursor-pointer"/>
            </Link>
            <h1 className="font-display text-2xl">Order</h1>
    </div>
    <div className='flex flex-col w-80'>
            {
                groupedProducts.map(product => {
                    return (
                        <OrderCard
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images?.[0]}
                            price={product.price}
                            quantity={product.quantity}
                            key={product.id}
                            />
                    )
                })
            }
            </div>
    </Layout>
)
}

export default MyOrder