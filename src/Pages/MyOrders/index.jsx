import { useContext } from "react"
import { Link } from "react-router-dom"
import { shoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import  {OrdersCards}  from "../../Components/OrdersCards"
import { dateTime } from "../../Utils"

function MyOrders() {
    const context = useContext(shoppingCartContext)

return (
    <Layout>
        <div className="flex items-center justify-center relative w-80 mb-3" >
            <h1>MyOrders</h1>
        </div>
    {
        context.order.map((order, index) => {
            return (
            <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCards
                date={dateTime()}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts
                }/>
            </Link>
            )
        })
    }
    </Layout>
)
}

export default MyOrders