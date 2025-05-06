const cart = [2, 10, 20, 33, 99, 244, 250]
///////////////////////////////////////////////////////////////////////////
let discountInProduct = 0
let totalDiscount = 0 
function calculateDiscount(value, discount) {
    discountInProduct = (value * discount) / 100
    totalDiscount += discountInProduct
    return discountInProduct
}
///////////////////////////////////////////////////////////////////////////
let sumPrice = 0
cart.forEach(priceOfProduct => {
    if (priceOfProduct > 30) {
        let discount = calculateDiscount(priceOfProduct, 10)
        sumPrice += (priceOfProduct - discount)
    } else {
        sumPrice += priceOfProduct
    }
})
///////////////////////////////////////////////////////////////////////////
let initialValue = 0
cart.forEach(item => {
    initialValue += item
})
///////////////////////////////////////////////////////////////////////////
const formatValue = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'brl'
});
///////////////////////////////////////////////////////////////////////////
console.log('-------CAIXA-------')
console.log(`Valor Inicial sem Desconto: ${formatValue.format(initialValue.toFixed(2))}`)
console.log(`Desconto Total: ${formatValue.format(totalDiscount.toFixed(2))}`)
console.log(`Valor Final Com desconto: ${formatValue.format(sumPrice.toFixed(2))}`)