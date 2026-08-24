import PropTypes from "prop-types"

const OrdersCards = props => {
    const {date, totalPrice, totalProducts} = props;

    return (
        <div className="flex border border-line rounded-lg mb-4 p-4 w-80 bg-white hover:border-accent transition-colors">
            <div className="flex flex-col gap-1 w-full font-body">
                <div className="flex justify-between w-full">
                    <span className="text-ink/60">Date</span>
                    <span className="font-mono text-sm">{date}</span>
                </div>
                <div className="flex justify-between w-full">
                    <span className="text-ink/60">Articles</span>
                    <span className="font-medium">{totalProducts}</span>
                </div>
                <div className="flex justify-between w-full">
                    <span className="text-ink/60">Total</span>
                    <span className="font-mono font-bold text-lg text-accent">${totalPrice}</span>
                </div>
            </div>
        </div>
    )
}

OrdersCards.propTypes = {
    date: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
}

export {OrdersCards}