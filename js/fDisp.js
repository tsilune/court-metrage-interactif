//FONCTION APPARITION

function dispButton() {
  var dir = document.getElementsByClassName("dirButton");
  var z;
  for (z = 0; z < dir.length; z++) {
    dir[z].style.display = "block";
  }
}

function dispCaf() {
  var caf = document.getElementsByClassName("cafet");
  var q;
  for (q = 0; q < caf.length; q++) {
    caf[q].style.display = "block";
  }
}

function dispCom() {
  var com = document.getElementsByClassName("combat");
  var k;
  for (k = 0; k < com.length; k++) {
    com[k].style.display = "block";
  }
}

function dispCom2() {
  var comb = document.getElementsByClassName("combat2");
  var l;
  for (l = 0; l < comb.length; l++) {
    comb[l].style.display = "block";
  }
}

function dispTexte() {
  document.getElementById("decor").style.display = "block";
}

function dispNom() {
  document.getElementById("nom").style.display = "block";
}

function dispReal() {
  document.getElementById("real").style.display = "block";
}

function dispImgPara() {
  document.getElementById("img-para").style.display = "block";
}

function dispImgEch() {
  document.getElementById("img-ech").style.display = "block";
}




appButton = setTimeout(dispButton, 29050);
