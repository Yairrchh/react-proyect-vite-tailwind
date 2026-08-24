/**
 *this funcion calculate total price of a new order
 * @param {Array} products cardProducts: array of object
 * @returns {number} total price
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}

/**
 *groups a flat list of products into one entry per id with a quantity count
 * @param {Array} products array of product objects (duplicates allowed)
 * @returns {Array} array of {...product, quantity} with unique ids
 */
export const groupByQuantity = (products) => {
    const grouped = []

    products.forEach(product => {
        const existing = grouped.find(item => item.id === product.id)
        if (existing) {
            existing.quantity += 1
        } else {
            grouped.push({...product, quantity: 1})
        }
    })

    return grouped
}

export const dateTime = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    return dateTime;
}


