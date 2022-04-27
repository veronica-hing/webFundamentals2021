function addOne(id){
    const personSelector = `#${id} p`;
    let personLikes = document.querySelector(personSelector);
    let likes = parseInt(personLikes.innerHTML);
    likes++;
    let updatedLikes = `${likes} like(s)`;
    personLikes.innerHTML = updatedLikes;
}