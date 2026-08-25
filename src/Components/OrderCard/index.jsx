import { XMarkIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

const OrderCard = props => {
    const {id, title, imageUrl, price, quantity, handleDelete} = props
    let renderXMarkIcon
    if(handleDelete){
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-ink/60 hover:text-accent cursor-pointer'/>

    }
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
                <figure className="relative w-16 h-16 shrink-0">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                    {quantity > 1 &&
                        <span className="absolute -top-2 -right-2 bg-ink text-paper font-mono text-[10px] rounded-full w-5 h-5 flex items-center justify-center">{quantity}</span>
                    }
                </figure>
                <p className="text-sm font-body">{title}</p>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-lg font-mono font-bold text-accent">${quantity > 1 ? price * quantity : price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

OrderCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    handleDelete: PropTypes.func,
}

export {OrderCard}
