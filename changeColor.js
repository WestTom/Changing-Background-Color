const colorInput=document.querySelector("#colorInput");
const colorBtn=document.querySelector("#colorButton");
const body=document.querySelector("#body");

//function to change the background color

const changeColor = () =>{
    const colorInput=document.querySelector("#colorInputColor");
    const colorBtn=document.querySelector("#colorButton");
    const body=document.querySelector("#body");

    let color = colorInput.Value;
    body.style.backgroundColor=color;
} 

colorBtn.addEventListener("click",changeColor);