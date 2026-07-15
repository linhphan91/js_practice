/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
  const pizzaPrices = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};
  const extrasPrice = {
    ExtraSauce: 1,
    ExtraToppings: 2
  }
export function pizzaPrice(pizza, ...extras) {  
 function calculate(index) {
   if (index >= extras.length) {
     return 0;
   }
   return extrasPrice[extras[index]] + calculate(index + 1);
 }
  return pizzaPrices[pizza] + calculate(0)
}



/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
//export function orderPrice(pizzaOrders) {

//   if (pizzaOrders.length === 0){
//     return 0
//   }
  
//   const order = pizzaOrders[0];
//   return (
//     pizzaPrice(order.pizza, ...order.extras) +
//     orderPrice(pizzaOrders.slice(1))
//          )
// }

export function orderPrice(pizzaOrders) {
  // if (pizzaOrders.length === 0) {
  //   return 0;
  // }

  // return (
  //   pizzaPrice(pizzaOrders[0].pizza, ...pizzaOrders[0].extras) +
  //   orderPrice(pizzaOrders.slice(1))
  // );

  return pizzaOrders.reduce((price, order) => price + pizzaPrice(order.pizza, ...order.extras), 0)
}


