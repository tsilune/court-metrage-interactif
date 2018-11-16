
//Apparition des boutons en cas de Game Over


  vid.addEventListener('ended', function() {
    if (i==1000) {
      var y = document.getElementsByClassName("goButton");
      var x;
      for (x = 0; x < y.length; x++) {
        y[x].style.display = "block";
      }
    }

  })

//Bouton de retour au checkpoint

  document.getElementById('restart').onclick = function(){
    if (c==1) {
      i=0;
      var y = document.getElementsByClassName("goButton");
      var x;
      for (x = 0; x < y.length; x++) {
        y[x].style.display = "none";}
      window.location.assign("main.html");
    }
    else if (c==2) {
      i=3;
      var y = document.getElementsByClassName("goButton");
      var x;
      for (x = 0; x < y.length; x++) {
        y[x].style.display = "none";}
      document.getElementById("circle2").style.backgroundColor="rgba(0,0,0,0.5)";
      document.getElementById("circle3").style.backgroundColor="rgba(0,0,0,0.5)";
      document.getElementById("circle4").style.backgroundColor="rgba(0,0,0,0.5)";
      document.getElementById("img-ech").style.display = "none";
      document.getElementById("img-para").style.display = "none";
      video();
    }
    else {
      i=6
      var y = document.getElementsByClassName("goButton");
      var x;
      for (x = 0; x < y.length; x++) {
        y[x].style.display = "none";}
      document.getElementById("circle5").style.backgroundColor="rgba(0,0,0,0.5)";
      document.getElementById("circle6").style.backgroundColor="rgba(0,0,0,0.5)";
      video();
  }
};

//Bouton de retour au début du jeu
document.getElementById('debut').onclick = function(){
  i=0;
  window.location.assign("index.html");
};
