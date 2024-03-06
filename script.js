import { cart, sC } from './clean.js' // named export
import add from './clean.js' // default export
// import add, { cart, sC } from './clean.js' // bad practice to mix-up named and default export
console.log('i dont know')
// addToCart(5, 'mango')
add(5, 'mango')
console.log(cart)
console.log(sC)