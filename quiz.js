var treeObject = {};
document.getElementById("growTreeBtn").addEventListener("click", tree);
document.getElementById("character").addEventListener("keydown", enterListener);
document.getElementById("treeHeight").addEventListener("keydown", enterListener);

function enterListener(key) {
	if (13 == key.keyCode) {
		tree()
	}
}


function tree() {
	treeObject.hgt = document.getElementById('treeHeight').value;
	treeObject.char = document.getElementById('character').value;
	var treeLayer = treeObject.char;
	var spacer = " ";
	var center = Math.ceil(treeObject.hgt / 2);
	console.log(spacer.repeat(center + parseInt(treeObject.hgt)),treeLayer);

	for (var i = 0; i <= treeObject.hgt - 2; i++) {
		treeLayer = treeLayer + treeObject.char + treeObject.char;
		console.log(spacer.repeat((center - i) + parseInt(treeObject.hgt)) + treeLayer);
	}
}
