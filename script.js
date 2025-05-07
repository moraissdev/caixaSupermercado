const cart = [
    { product: 'trident', priceOfProduct: 2}, 
    { product: 'presunto e queijo', priceOfProduct: 10}, 
    { product: 'caixa de bombom', priceOfProduct: 20}, 
    { product: 'chocolate', priceOfProduct: 33}, 
    { product: 'picanha', priceOfProduct: 99}, 
    { product: 'panetone', priceOfProduct: 244}, 
    { product: 'pudim', priceOfProduct: 250},
]
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
    if (priceOfProduct.priceOfProduct > 30) {
        let discount = calculateDiscount(priceOfProduct.priceOfProduct, 10)
        sumPrice += (priceOfProduct.priceOfProduct - discount)
    } else {
        sumPrice += priceOfProduct.priceOfProduct
    }
})
///////////////////////////////////////////////////////////////////////////
let initialValue = 0
cart.forEach(item => {
    initialValue += item.priceOfProduct
})
///////////////////////////////////////////////////////////////////////////
const formatValue = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'brl'
});
///////////////////////////////////////////////////////////////////////////
let totalOfProductsAbove30 = 0
let totalOfProductsBelowOrEqual30 = 0
cart.forEach(productsAbove30 => {
    if (productsAbove30.priceOfProduct > 30) {
        totalOfProductsAbove30 ++;
    } else {
        totalOfProductsBelowOrEqual30++;
    }
});
///////////////////////////////////////////////////////////////////////////
console.log('-------CAIXA DO SUPERMERCADO-------')
console.log(`Produtos do carrinho:`);
cart.forEach((nameOfProduct => {
    console.log(`${nameOfProduct.product}`)
}))
console.log(`Valor Inicial sem Desconto: ${formatValue.format(initialValue)}`)
console.log(`${totalOfProductsAbove30} produtos custaram acima de R$30,00`)
console.log(`${totalOfProductsBelowOrEqual30} produtos custaram R$30,00 ou abaixo`)
console.log(`Desconto Total: ${formatValue.format(totalDiscount)}`)
console.log(`Valor Final Com desconto: ${formatValue.format(sumPrice)}`)