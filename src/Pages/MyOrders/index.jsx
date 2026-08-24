import { useContext } from "react"
import { Link } from "react-router-dom"
import { shoppingCartContext } from "../../Context/context"
import { Layout } from "../../Components/Layout"
import  {OrdersCards}  from "../../Components/OrdersCards"

function MyOrders() {
    const context = useContext(shoppingCartContext)

return (
    <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6" >
            <h1 className="font-display text-2xl">My Orders</h1>
        </div>
    {
        context.order.length > 0
        ? context.order.map((order, index) => {
            return (
            <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCards
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts
                }/>
            </Link>
            )
        })
        : <p className="font-body text-sm text-ink/60">No orders yet.</p>
    }
    </Layout>
)
}

export default MyOrders
