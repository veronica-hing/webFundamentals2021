//started at 9:34pm - end at 11:32pm ish
function loadingInfo(){
    alert("Loading weather report...");
}

function removeCookie(cookie){
    let elem = document.querySelector(`.${cookie}`);
    elem.remove();
}

function imperialToStandard(elem){
    let f = parseInt(elem.innerHTML);
    let temp = Math.floor((f -32) * 5 / 9);
    elem.innerHTML = `${temp}°`;
}

function standardToImperial(elem){
    let c = parseInt(elem.innerHTML);
    let temp = (Math.floor(c * 9 / 5) + 32);
    elem.innerHTML = `${temp}°`;
}

function convertUnit(elem){
    //get all temperatures in node list
    let temperatures = document.querySelectorAll(".temp");
    //if choice is celsius, we start from imperial to standard
    if(elem.value == 'celsius'){
        temperatures.forEach((tempElement) =>{
            imperialToStandard(tempElement);
        })
    }else{
        temperatures.forEach((tempElement) =>{
            standardToImperial(tempElement);
        })
    }
}