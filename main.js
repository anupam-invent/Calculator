function calculate(newValue) {
  document.getElementById("display").value += newValue;
}
function reset() {
  document.getElementById("display").value = "";
}
function answer() {
  var a = eval(document.getElementById("display").value);
  document.getElementById("display").value = a;
}
