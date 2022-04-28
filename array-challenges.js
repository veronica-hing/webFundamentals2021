function alwaysHungry(arr) {
    let isFood = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            isFood = true;
        }
    }
    if(!isFood){
        console.log("I'm hungry");
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');

function betterThanAverage(arr) {
    var avg = 0;
    // calculate the sum then divide
    arr.forEach(num => avg+= num);
    avg = avg/arr.length;
    var count = 0
    arr.forEach((num) => {
        if(num >avg){
            count ++;
        }
    })
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');

function reverse(arr) {
    // your code here
    let halfway = arr.length/2;
    let temp = 0;
    for(let i = 0; i < halfway; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]copy

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    //z is last and y is second to last
    let z, y;
    // take 2 away from n since we start out with the first two values of the fib array
    for(let i = 0; i < n - 2; i++){
        z = fibArr.length - 1;
        y = z - 1;
        fibArr.push(fibArr[z] + fibArr[y]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
