function checkboxEvent(idLeaveChecked) {
  //postavi sve checkboxove na false
  document.getElementById("addCheckbox").checked = false
  document.getElementById("subtractCheckbox").checked = false
  document.getElementById("multiplyCheckbox").checked = false
  document.getElementById("divideCheckbox").checked = false
  //---------------------



  //postavi checkbox ciji je id jednak idLeaveChecked
  console.log(idLeaveChecked)
  document.getElementById(idLeaveChecked).checked = true;
  //------------

}
function zbroj() {
  var a = parseInt(document.getElementById("prviBroj").value);
  var b = parseInt(document.getElementById("drugiBroj").value);
  var c;
  if (document.getElementById("addCheckbox").checked) {
    c = a + b;
  }
  else if (document.getElementById("subtractCheckbox").checked) {
     c = a - b;
  }
  else if (document.getElementById("multiplyCheckbox").checked) {
     c = a * b;
  }
  else if (document.getElementById("divideCheckbox").checked) {
     c = a / b;
  } 
  document.getElementById("rezultat").innerHTML = c;
}


