let Data = [];

const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.querySelector("ul");

button.innerText = "Click me";

const render = () => {
  ul.innerHTML = "";
  Data.map((element, index) => {
    const editbtn = document.createElement("button");
    const btn = document.createElement("button");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "material-symbols-outlined";
    span.innerText = "edit_square";
    btn.innerText = "delete";
    li.innerText = element;
    input.value = "";
    ul.appendChild(li);
    li.appendChild(editbtn);
    li.appendChild(btn);
    editbtn.appendChild(span);
    btn.addEventListener("click", () => {
      const newData = Data.filter((el, i) => {
        return i !== index;
      });
      Data = newData;
      render();
    });
    editbtn.addEventListener("click", () => {
      const newValue = Data.filter((el) => {
        return el !== element;
      });
      Data = newValue;
    });
  });
};

const printInputValue = (value) => {
  if (input.value === "") {
    return alert("hooson bn");
  }
  console.log(value);
  Data.push(value);
  console.log(Data);
};

// callbackfunction
button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
  input.value = "";
});

// button.onclick = printInputValue;

body.appendChild(input);
body.appendChild(button);
