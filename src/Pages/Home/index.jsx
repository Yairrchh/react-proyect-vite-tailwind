import { useContext } from "react";
import { shoppingCartContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
    const context = useContext(shoppingCartContext)


return (
    <Layout>
    <div className="flex items-center justify-center relative w-70 mb-3" >
            <h1>Esclusive Products</h1>
    </div>
    <input
    type="text"
    placeholder="Search a product"
    className="rounded-lg border border-black p-4 w-80 mb-4"
    onChange={(event) => context.setSearch(event.target.value)}></input>
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
    {
        context.items?.map(item => (
            <Card key={item.id} data={item} />
        ))
    }
    </div>
    <ProductDetail/>
    </Layout>
)
}

export default Home;
