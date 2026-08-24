import { useContext, useMemo, useState } from "react";
import { shoppingCartContext } from '../../Context/context'
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const TICKER_TEXT = 'NEW DROPS · FREE RETURNS · TAGGED & READY TO SHIP · '

function Home() {
    const context = useContext(shoppingCartContext)
    const [sortBy, setSortBy] = useState('featured')

    const sortedItems = useMemo(() => {
        if (!context.filteredItems) return context.filteredItems
        if (sortBy === 'price-asc') return [...context.filteredItems].sort((a, b) => a.price - b.price)
        if (sortBy === 'price-desc') return [...context.filteredItems].sort((a, b) => b.price - a.price)
        return context.filteredItems
    }, [context.filteredItems, sortBy])

    const renderView = () => {
            if (sortedItems?.length > 0) {
                return (
                sortedItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
            } else if(!sortedItems?.length > 0 && !context.loading) {
                return (
                    <div className="flex flex-col items-center gap-1 mt-10 text-center">
                        <p className="font-display text-lg">No matches</p>
                        <p className="font-body text-sm text-ink/60">Try another search or pick a different category.</p>
                    </div>
                )
            }
        }

return (
    <Layout>
    <div className="w-full overflow-hidden bg-ink text-paper py-1.5 mb-8" aria-hidden="true">
        <div className="marquee-track flex whitespace-nowrap font-mono text-xs tracking-wider">
            <span className="px-2">{TICKER_TEXT.repeat(4)}</span>
            <span className="px-2">{TICKER_TEXT.repeat(4)}</span>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center relative w-full mb-8 px-5 text-center">
            <h1 className="font-display text-3xl md:text-4xl">Exclusive drops</h1>
            <p className="font-body text-ink/60 mt-2">Priced straight, tagged and ready.</p>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8 px-5">
        <div className="relative w-80">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink/40"/>
            <input
            type="text"
            placeholder="Search a product"
            className="rounded-lg border border-line bg-white pl-11 pr-4 py-3 w-full font-body
            focus:outline-none focus:border-accent"
            onChange={(event) => context.setSearch(event.target.value)}></input>
        </div>
        <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        className="rounded-lg border border-line bg-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-accent">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
        </select>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-6 px-5">
        {renderView()}
    </div>
    <ProductDetail/>
    </Layout>
)
}

export default Home;
