function changeName(id){
    let userQuery = `#${id}`;
    let elem = document.querySelector(userQuery);
    elem.innerHTML = 'Neo the Anomaly'
}

function removePerson(id){
    //get the number in the counter and decrement
    let counter = parseInt(document.querySelector(".connection-req h2.numbers").innerHTML);
    counter--;

    //create user query
    let userQuery = `#${id}`;

    //set elem to be the person and remove them
    let elem = document.querySelector(userQuery);
    elem.remove();

    //set elem to the counter element and replace innerHTML of counter
    elem = document.querySelector(".connection-req h2.numbers");
    elem.innerHTML = counter;
}

function addPerson(id){
    //get the number in the connection counter and increment
    let counter = parseInt(document.querySelector(".your-connections h2.numbers").innerHTML);
    counter++;

    //set elem to the connection counter element and replace innerHTML of connection counter
    elem = document.querySelector(".your-connections h2.numbers");
    elem.innerHTML = `${counter}+`;

    //remove person from connection request list
    removePerson(id);

}