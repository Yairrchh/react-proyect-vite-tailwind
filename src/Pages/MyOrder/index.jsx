import { useContext } from 'react'
import { shoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { Layout } from "../../Components/Layout"
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrder() {
    const context = useContext(shoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

return (
    <Layout>
    <div className="flex items-center justify-center relative w-80 mb-4">
            <Link to='/my-orders' className="absolute left-0">
                <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
            </Link>
            <h1>MyOrder</h1>
    </div>
    <div className='flex flex-col w-80'>
            {
                context.order?.[index]?.products.map(product => {
                    return (
                        <OrderCard
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
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