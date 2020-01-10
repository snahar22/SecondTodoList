const addButton = document.getElementById("addButton");
let input = document.getElementById("addInput"); 
let ul = document.getElementById("listOfItems"); 

addButton.addEventListener('click', addToList);

function createNewItem(itemInput, completed){
	let addItem = document.createElement("li");
	let addText = document.createTextNode(itemInput);
	addItem.appendChild(addText);
    input.value = "";

	if(completed){
		addItem.classList.add("completed");
	}
	ul.appendChild(addItem);
	addItem.addEventListener("dblclick", completedTask);
}

function addToList(){
	let addText = input.value;
	createNewItem(addText, false);
}

function completedTask() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

const clearList = document.getElementById("clear_list");
clearList.addEventListener('click', clearItems);

function clearItems(){
	ul.remove();
	location.reload();
}





