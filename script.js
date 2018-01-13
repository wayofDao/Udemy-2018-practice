var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll("li")
	
for (let i=0; i < liItems.length; i++){
liItems[i].appendChild((document.createTextNode(" ")));
liItems[i].appendChild(addDelBtn());
}

function addDelBtn() {
let btn = document.createElement("button");
btn.appendChild(document.createTextNode("del"));
return btn;
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(addDelBtn())
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneUndone(event) {
	
	var trgt = event.target;
		if (trgt.tagName === "LI"){
		trgt.classList.toggle("done");
		} else if (trgt.tagName === "BUTTON") {
			trgt.parentNode.remove();
		}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneUndone);