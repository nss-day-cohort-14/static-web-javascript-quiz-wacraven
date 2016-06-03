var treeObject = {};

/*****************EVENT LISTENERS**************************/

document.getElementById("growTreeBtn").addEventListener("click", clickListener);
document.getElementById("character").addEventListener("keydown", enterListener);
document.getElementById("treeHeight").addEventListener("keydown", enterListener);

function enterListener(key) {
	if (13 == key.keyCode) {
		tree(treeObject);
	}
}

function clickListener() {
	tree(treeObject);
}

/*****************TREE BUILD**************************/

function tree(obj) {
	obj.hgt = Math.abs(document.getElementById('treeHeight').value);
	obj.char = document.getElementById('character').value;
	if (obj.hgt == 0) {

	} else {
		var treeLayer = obj.char;
		var spacer = " ";
		var center = Math.ceil(obj.hgt / 2);
		console.log(spacer.repeat(center + parseInt(obj.hgt)/2),treeLayer);

		for (var i = 0; i <= obj.hgt - 2; i++) {
			treeLayer = treeLayer + obj.char + obj.char;
			console.log(spacer.repeat((center - i) + parseInt(obj.hgt)/2) + treeLayer);
		}
	}
	console.log("treeObject", treeObject);
}