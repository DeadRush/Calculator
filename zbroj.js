function zbroj() {
    var a = parseInt(document.getElementById("prviBroj").value);
    var b = parseInt(document.getElementById("drugiBroj").value);
    var c = a + b;
    document.getElementById("rezultat").innerHTML = c;
  }