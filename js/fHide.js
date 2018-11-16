//CACHER BOUTTON DIRECTION
document.getElementById("bd").onclick = function() {
  i++;
  var dir = document.getElementsByClassName("dirButton");
  var z;
  for (z = 0; z < dir.length; z++) {
    dir[z].style.display = "none";}
  video();
};

document.getElementById("bg").onclick = function() {
  i=i+100;
  var dir = document.getElementsByClassName("dirButton");
  var z;
  for (z = 0; z < dir.length; z++) {
    dir[z].style.display = "none";}
  video();
};

//CACHER BOUTTON CAFET
document.getElementById("parapluie").onclick = function() {
  i++;
  var caf = document.getElementsByClassName("cafet");
  var q;
  for (q = 0; q < caf.length; q++) {
    caf[q].style.display = "none";
  }
  document.getElementById("decor").style.display = "none";
  video();
};

document.getElementById("echarpe").onclick = function() {
  i=i+50;
  var caf = document.getElementsByClassName("cafet");
  var q;
  for (q = 0; q < caf.length; q++) {
    caf[q].style.display = "none";
  }
  document.getElementById("decor").style.display = "none";
  video();
};

document.getElementById("machine").onclick = function() {
  i=i+100;
  var caf = document.getElementsByClassName("cafet");
  var q;
  for (q = 0; q < caf.length; q++) {
    caf[q].style.display = "none";
  }
  document.getElementById("decor").style.display = "none";
  video();
};

//CACHER BOUTTON COMBAT 1
document.getElementById("down").onclick = function() {
  i++;
  var com = document.getElementsByClassName("combat");
  var k;
  for (k = 0; k < com.length; k++) {
    com[k].style.display = "none";}
  video();
};

document.getElementById("up").onclick = function() {
  i=i+100;
  var com = document.getElementsByClassName("combat");
  var k;
  for (k = 0; k < com.length; k++) {
    com[k].style.display = "none";}
  video();
};

//CACHER BOUTTON COMBAT 2
document.getElementById("up2").onclick = function() {
  i++;
  var comb = document.getElementsByClassName("combat2");
  var l;
  for (l = 0; l < comb.length; l++) {
    comb[l].style.display = "none";}
  video();
};

document.getElementById("down2").onclick = function() {
  i=i+100;
  var comb = document.getElementsByClassName("combat2");
  var l;
  for (l = 0; l < comb.length; l++) {
    comb[l].style.display = "none";}
  video();
};


function noneNom() {
  document.getElementById("nom").style.display = "none";
}

function nonePause() {
  document.getElementById("pause").style.display = "none";
}

function noneCircle() {
  document.getElementById('header').style.display = "none";
}

function nonePara() {
  document.getElementById("img-para").style.display = "none";
}

function noneEch() {
  document.getElementById("img-ech").style.display = "none";
}
