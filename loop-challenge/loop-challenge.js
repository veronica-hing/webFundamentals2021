//print odds 1-20
for(let i = 1; i <= 20; i+=2){
    console.log(i)    }
}

//print decreasing multiples of 3 from 100 to 0
for(let i = 100; i >=0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//print the sequence
for(let i = 4; i > -4; i -= 1.5){
    console.log(i);
}

//print the sum of values 1-100, should get back 5050

let sum = 0;
for(let i = 1; i <=100; i++){
    sum+= i;
}
console.log(sum);

//print the product of values from 1-12

let product = 1;
for(let i = 1; i <=12; i++){
    product*= i;
}

console.log(product);

