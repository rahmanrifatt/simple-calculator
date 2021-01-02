function takeValue(x) {
	document.getElementById('input').value += x;
}
function clearInput() {
	document.getElementById('input').value = '';
}
function calculateResult() {
	var result = eval(document.getElementById('input').value);
	document.getElementById('input').value = result;
}