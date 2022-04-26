function pizzaOven(crustType = "thin crust", sauceType = "marinara", cheeses = ["mozzarella", "asiago", "parmesan"], toppings = ["tomato", "basil"]){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//returns a pizza using default values
console.log(pizzaOven());

//returns a pizza with deep dish crust, traditional sace, mozzarella cheese, and pepperoni and sausage toppings
console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]));

//hand tossed, marinara, mozzarella + feta, mushrooms, olives onions pizza
console.log(pizzaOven("hand-tossed", "marinara",["mozzarella", "feta"], ["mushrooms","olives","onions"]));

//2 more pizzas with any toppings, going with default then hawaiian
console.log(pizzaOven());//default pizza
console.log(pizzaOven("thin crust", "marinara", ["mozzarella"], ["pineapple", "chicken", "bacon"]));

function randomPizza(){
    // used to get random indeces of the arrays
    const seed = Math.random();
    const seed2 = Math.random();
    //arrays for us to choose our pizza build
    const allToppings = ["chicken", "tomatoes", "artichokes", "anchovies","pineapple", "onions","bell peppers", "ghost peppers", "olives", "shroomies", "bacon", "pepperoni", "sausage", "garlic"];
    const allSauces = ["pesto", "marinara", "alfredo"];
    const allCrusts = ["thin crust", "deep dish", "thick crust", "filled crust"];
    const allCheeses = ["mozzarella", "parmesan", "asiago", "brie"];
    //using the seed for a random index in the array with all possible pizza build choices
    var myCrust = allCrusts[Math.floor(seed*allCrusts.length)];
    var mySauce = allSauces[Math.floor(seed*allSauces.length)];
    var myCheeses = [allCheeses[Math.floor(seed*allCheeses.length)], allCheeses[Math.floor(seed2*allCheeses.length)]];
    var myToppings = [allToppings[Math.floor(seed*allToppings.length)], allToppings[Math.floor(seed2*allToppings.length)]];
    //call the pizzaOven function to make the pizza with our random choices
    return pizzaOven(myCrust, mySauce, myCheeses, myToppings);
}

console.log("random pizza")
console.log(randomPizza());
