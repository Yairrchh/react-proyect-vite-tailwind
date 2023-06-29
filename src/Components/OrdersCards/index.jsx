
const OrdersCards = props => {
    const {date, totalPrice, totalProducts} = props;

    return (
        <div className="flex  border border-black rounded-lg mb-4 p-4 w-80 bg-slate-300">
            <div className="flex flex-col items-center w-full">
                <div className="flex justify-between w-full">
                    <span>Date:</span>
                    <span className="font-light">{date}</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Articles:</span>
                    <span className="font-medium">{totalProducts}</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Total Price</span>
                    <span className="font-medium text-xl'">{totalPrice}$</span>
                </div>
            </div>
        </div>
    )
}

export {OrdersCards}