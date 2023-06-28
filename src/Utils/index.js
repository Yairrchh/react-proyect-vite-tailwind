/**
 *this funcion calculate total price of a new order
 * @param {Array} products cardProducts: array of object
 * @returns {number} total price
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}

export const dateTime = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    return dateTime;
}