import { useContext } from "react";
import { shoppingCartContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
    const context = useContext(shoppingCartContext)

    const renderView = () => {
        if (context.search?.length > 0) {
            if (context.filteredItems?.length > 0) {
                return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
            } else {
                return (
                    <div>We dont have anything</div>
                )
            }
            } else {
            return (
                context.items?.map(item => (
                <Card key={item.id} data={item} />
                ))
            )
            }
        }


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
        {renderView()}
    </div>
    <ProductDetail/>
    </Layout>
)
}

export default Home;