var stringy = '';
for(let i = 1; i <= 100; i++){
    stringy = '';
    if(i % 3 == 0){
        stringy+= 'Fizz';
    }
    if(i % 5 == 0){
        stringy += 'Buzz';
    }
    if(stringy == ''){
        console.log(i);
    } else{
        console.log(stringy);
    }
}