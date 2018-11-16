//FONCTION LANCEMENT VIDÉO

function video() {

  //Bonnes issues

  //Amphi
  if(i==100) {
    i=i-98;
    document.getElementById('videoDebut').src="video/amphi.mp4";
    document.getElementById('vid').load();
    appButton = setTimeout(dispButton, 38240);//38240
    document.getElementById("circle0").style.backgroundColor="lawngreen";
  }

  //Escalier
  else if (i==3) {
    document.getElementById('videoDebut').src="video/cafeteria.mp4";
    document.getElementById('vid').load();
    appCaf = setTimeout(dispCaf, 10120);
    document.getElementById("circle1").style.backgroundColor="lawngreen";
    appTexte = setTimeout(dispTexte, 10120);
  }

  //Parapluie
  else if (i==4) {
    document.getElementById('videoDebut').src="video/caf_para_couloir.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle2").style.backgroundColor="lawngreen";
    appButton = setTimeout(dispButton, 13170);
    appPara = setTimeout(dispImgPara, 5400);

  }

  //Écharpe
  else if (i==53) {
    document.getElementById('videoDebut').src="video/caf_ech_couloir.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle2").style.backgroundColor="lawngreen";
    appButton = setTimeout(dispButton, 12300);
    appEch = setTimeout(dispImgEch, 5400);
  }

  //Ascenceur
  else if (i==54 || i== 5) {
    document.getElementById('videoDebut').src="video/ascenceur.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle3").style.backgroundColor="lawngreen";
    appButton = setTimeout(dispButton, 30030);//30030
  }

  //Passerelle + parapluie -> coup jambe anto
  else if (i==6) {
    document.getElementById('videoDebut').src="video/combat_parapluie_anto.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle4").style.backgroundColor="lawngreen";
    appCom = setTimeout(dispCom, 16030);
  }


  //Déploiement parapluie
  else if (i==7) {
    document.getElementById('videoDebut').src="video/combat_parapluie_say.mp4";
    document.getElementById('vid').load();
    appCombat = setTimeout(dispCom2, 6010);
    document.getElementById("circle5").style.backgroundColor="lawngreen";
  }

  else if (i==8) {
    document.getElementById('videoDebut').src="video/fin.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle6").style.backgroundColor="lawngreen";
    appNom = setTimeout(dispNom, 19500);
    cacheNom = setTimeout(noneNom, 23250);
    cachePause = setTimeout(nonePause, 23250);
    cacheCircle = setTimeout(noneCircle, 23250);
    cachePara = setTimeout(nonePara, 23250);
    cacheEch = setTimeout(noneEch, 23250);
    appReal = setTimeout(dispReal, 23750);
  }



  //Mauvaises issues

  //Toilettes
  else if (i==1) {
    i=1000;
    document.getElementById('videoDebut').src="video/toilettes_bolossage.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle0").style.backgroundColor="lawngreen";
    c=1;
  }

  //Ascenceur
  else if (i==102) {
    i=1000;
    document.getElementById('videoDebut').src="video/ascenceur_bolossage.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle1").style.backgroundColor="lawngreen";
    c=1;
  }

  //Machine
  else if (i==103) {
    i=1000;
    document.getElementById('videoDebut').src="video/caf_bolossage.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle2").style.backgroundColor="lawngreen";
    c=2;
  }

  //Sortie
  else if (i==153 || i==104) {
    i=1000;
    document.getElementById('videoDebut').src="video/sortie_bolossage.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle3").style.backgroundColor="lawngreen";
    c=2;
  }

  //Batiment parapluie ou écharpe
  else if (i==154 || i==105) {
    i=1000;
    document.getElementById('videoDebut').src="video/passerelle_bolossage.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle4").style.backgroundColor="lawngreen";
    c=2;
  }

  //Passerelle + écharpe ->
  else if (i==55) {
    i=1000;
    document.getElementById('videoDebut').src="video/combat_echarpe.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle4").style.backgroundColor="lawngreen";
    c=2;
  }

  //Coup tête
  else if (i==106) {
    i=1000;
    document.getElementById('videoDebut').src="video/parapluie_bolossage.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle5").style.backgroundColor="lawngreen";
    c=3;
  }

  //Coup jambe
  else if (i==107) {
    i=1000;
    document.getElementById('videoDebut').src="video/parapluie_bolossage_2.mp4";
    document.getElementById('vid').load();
    document.getElementById("circle6").style.backgroundColor="lawngreen";
    c=3;
  }



}//fin video()
