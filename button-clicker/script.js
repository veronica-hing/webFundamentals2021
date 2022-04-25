function removeButton(elem){
    elem.remove();
}

function toggleLogin(elem){
    if(elem.value == "false"){
        elem.innerText = "Logout";
        elem.value = "true";
    } else{
        elem.innerText = "Login";
        elem.value = "false";
    }  
}

function addLike(elem){
    elem.value = parseInt(elem.value) + 1;
    elem.innerText = elem.value + " likes";
}