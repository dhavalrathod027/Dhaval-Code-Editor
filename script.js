// Responsive Navbar

const menu = document.querySelector(".ri-menu-line");
const right = document.querySelector(".nav-right");
const left = document.querySelector(".nav-left");
const nav = document.querySelector("nav");

let count = 1;
menu.addEventListener("click",()=>{
    right.classList.toggle("show"); 
})


// Coding Functionality


let allCode = document.querySelectorAll(".textarea");
let output = document.querySelector(".output");

let htmlCode,cssCode,jsCode = '';

allCode.forEach((el,index)=>{
    el.addEventListener("keyup",()=>{
        if(index==0){
            htmlCode = el.value;
        }
        
        if(index==1){
            cssCode = el.value;
        }
        
        if(index==2){
            jsCode = el.value;
        }
        output.contentDocument.body.innerHTML = htmlCode;
        output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
        output.contentWindow.eval(jsCode);
    })
})

