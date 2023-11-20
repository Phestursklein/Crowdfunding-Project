// function bookmark(this){
//     this.textContent = "Bookmarked";
// }
const bookmark = document.querySelector(".bookmark-container > p");

bookmark.onclick =()=>{
    bookmark.innerHTML = 'Bookmarked';
}
console.log(bookmark);

const btn = document.querySelector(".menu-icon .btn");
let  nav = document.querySelector(".nav-wrapper");
const close = document.querySelector(".close-menu");

// console.log(btn);
btn.onclick =()=>{
    // alert('working');
    nav.style.display = 'block';
    btn.style.display = 'none';
}
close.onclick =()=>{
    nav.style.display = 'none';
    btn.style.display = 'block';
}
//modal section
// for an ID  #PROJECT, CLASS .PROJECT, TAG PROJECT

const modal = document.querySelector('.modal');
const project = document.querySelector('.project');
const closeProject = document.querySelector('.closeProject')
project.onclick =()=>{
    modal.style.display = 'block';
    //alert('working'); // to check if the button is responding

}
closeProject.onclick =()=>{
    modal.style.display = 'none';
}
const closeme