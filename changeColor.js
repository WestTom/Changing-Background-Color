const colorBtn = document.querySelector("#colorButton");
const body = document.querySelector("#body");

//function to change the background color

const changeColor = () => {
  const colorInput = document.querySelector("#colorInputColor");
  const colorBtn = document.querySelector("#colorButton");
  const body = document.querySelector("#body");

  //the bug=> value starts with small letter [ previous code =>  let color = colorInput.Value;]
  let color = colorInput.value;
  body.style.backgroundColor = color;

  //I added this code to make the text input work with the color input
  const colorInputText = document.querySelector("#colorInput");
  colorInputText.value != ""
    ? ((body.style.backgroundColor = colorInputText.value),
      (colorInputText.value = ""))
    : (body.style.backgroundColor = color);
};

colorBtn.addEventListener("click", changeColor);
