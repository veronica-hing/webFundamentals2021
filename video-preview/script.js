console.log("page loaded...");

function startMutePlay(elem){
    elem.setAttribute("muted","true");
    //elem.setAttribute("autoplay","true");
    elem.play();
}

function stopMutePlay(elem){
    elem.removeAttribute("muted");
    //elem.removeAttribute("autoplay");
    elem.pause();
}