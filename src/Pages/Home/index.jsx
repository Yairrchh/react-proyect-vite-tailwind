import { useContext } from "react";
import { shoppingCartContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
    const context = useContext(shoppingCartContext)

    const renderView = () => {
            if (context.filteredItems?.length > 0) {
                return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
            } else if(!context.filteredItems?.length > 0 && !context.loading) {
                return (
                    <div className="flex items-center mt-5 font-medium text-xl">We dont have anything :\</div>
                )
            }
        }

return (
    <Layout>
    <div className="flex items-center justify-center relative w-70 mb-3 mt-3" >
            <h1 className="font-medium text-xl">Esclusive Products</h1>
    </div>
    <input
    type="text"
    placeholder="Search a product"
    className="rounded-lg border border-black p-4 w-80 mb-4"
    onChange={(event) => context.setSearch(event.target.value)}></input>
    <div className="flex flex-wrap justify-center items-center gap-6  px-5">
        {renderView()}
    </div>
    <ProductDetail/>
    </Layout>
)
}

export default Home;
