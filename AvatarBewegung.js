//.Tiny
	$=function(id){return(document.getElementById(id));};

var AvatarBild=0;

AvatarBildWechsel=function(Richtung){
	switch(AvatarBild){
		case (0):
			$('Avatar').src='AV'+Richtung+'2.png';
			break;
		case (1):
			$('Avatar').src='AV'+Richtung+'3.png';
			break;
		case (2):
			$('Avatar').src='AV'+Richtung+'4.png';
			break;
		case 3:
			$('Avatar').src='AV'+Richtung+'1.png';
			break;
	}
	AvatarBild+=1;
	if(AvatarBild>3){
		AvatarBild=0;
	}
}
//Steuerung mit Tastatur
TasteGedrueckt=function(Ereignis){
		if(!Ereignis){
			Ereignis=window.event;
		}
		if(Ereignis.which){
			Tastencode=Ereignis.which;
		}else if(Ereignis.keyCode){
			Tastencode=Ereignis.keyCode;
		}
		Tastenpruefung(Tastencode);
}

Tastenpruefung=function(welchetaste){
	if($('theBackground').offsetLeft+$('theBackground').offsetWidth<$('AvatarContainer').offsetLeft){

		if(AktuelleKarte.toString().length==7){
			AktuellerBuchstabe=AktuelleKarte.toString()[5];
			AktuelleZahl=AktuelleKarte.toString()[6];
		}

		for(all in KartenTeil1){
			if(AktuellerBuchstabe==KartenTeil1[all]){
				WelcherBuchstabe=KartenTeil1[eval(all++)];
				NeueKarte='Karte'+KartenTeil1[eval(all++)]+AktuelleZahl;
			}
		}
		for(all in KartenArray){
			if(NeueKarte==KartenArray[all]){
				JaEsGibtSieUndZwarNR=all;
			}
		}

		if(NeueKarte==KartenArray[JaEsGibtSieUndZwarNR]){
			GibtEsDieKarte=true;
		}else{
			GibtEsDieKarte=false;
		}

		if(GibtEsDieKarte==true){
			Player.PositionX=5;
			Player.PositionY=100/(($('Welt').offsetHeight)/($('AvatarContainer').offsetTop));
			KartenLader(NeueKarte);
		}else

		if(GibtEsDieKarte==false){
			alert('nischts');
		}
	}
	else

	if($('theBackground').offsetTop+$('theBackground').offsetHeight<$('AvatarContainer').offsetTop){

		if(AktuelleKarte.toString().length==7){
			AktuellerBuchstabe=AktuelleKarte.toString()[5];
			AktuelleZahl=AktuelleKarte.toString()[6];
		}

		for(all in KartenTeil2){
			if(AktuelleZahl==KartenTeil2[all]){
				WelcheZahl=KartenTeil2[eval(all++)];
				NeueKarte='Karte'+AktuellerBuchstabe+KartenTeil2[eval(all++)];
			}
		}

		for(all in KartenArray){
			if(NeueKarte==KartenArray[all]){
				JaEsGibtSieUndZwarNR=all;
			}
		}

		if(NeueKarte==KartenArray[JaEsGibtSieUndZwarNR]){
			GibtEsDieKarte=true;
		}else{
			GibtEsDieKarte=false;
		}
		if(GibtEsDieKarte==true){
			Player.PositionX=100/(($('Welt').offsetWidth)/($('AvatarContainer').offsetLeft));
			Player.PositionY=5;
			KartenLader(NeueKarte);
		}else

		if(GibtEsDieKarte==false){
			alert('nischts');
		}
	}else
	if($('theBackground').offsetLeft>$('AvatarContainer').offsetLeft){

	if(AktuelleKarte.toString().length==7){
		AktuellerBuchstabe=AktuelleKarte.toString()[5];
		AktuelleZahl=AktuelleKarte.toString()[6];
	}

		for(all in KartenTeil1){
			if(AktuellerBuchstabe==KartenTeil1[all]){
				WelcherBuchstabe=KartenTeil1[eval(all--)];
				NeueKarte='Karte'+KartenTeil1[eval(all--)]+AktuelleZahl;
			}
		}

		for(all in KartenArray){
			if(NeueKarte==KartenArray[all]){
				JaEsGibtSieUndZwarNR=all;
			}
		}

		if(NeueKarte==KartenArray[JaEsGibtSieUndZwarNR]){
			GibtEsDieKarte=true;
		}else{
			GibtEsDieKarte=false;
		}
		if(GibtEsDieKarte==true){
			Player.PositionX=95;
			Player.PositionY=100/(($('Welt').offsetHeight)/($('AvatarContainer').offsetTop));
			KartenLader(NeueKarte);
		}else

		if(GibtEsDieKarte==false){
			alert('nischts');
		}
	}else
	if($('theBackground').offsetTop>$('AvatarContainer').offsetTop){

	if(AktuelleKarte.toString().length==7){
		AktuellerBuchstabe=AktuelleKarte.toString()[5];
		AktuelleZahl=AktuelleKarte.toString()[6];
	}

		for(all in KartenTeil2){
			if(AktuelleZahl==KartenTeil2[all]){
				WelcheZahl=KartenTeil2[eval(all--)];
				NeueKarte='Karte'+AktuellerBuchstabe+KartenTeil2[eval(all--)];
			}
		}

		for(all in KartenArray){
			if(NeueKarte==KartenArray[all]){
				JaEsGibtSieUndZwarNR=all;
			}
		}

		if(NeueKarte==KartenArray[JaEsGibtSieUndZwarNR]){
			GibtEsDieKarte=true;
		}else{
			GibtEsDieKarte=false;
		}
		if(GibtEsDieKarte==true){
			Player.PositionX=100/(($('Welt').offsetWidth)/($('AvatarContainer').offsetLeft));
			Player.PositionY=95;
			KartenLader(NeueKarte);
		}else

		if(GibtEsDieKarte==false){
			alert('nischts');
		}
	}
	else{
		switch (welchetaste) {
			case (65):
			InventorySortierer('Kopf');
			break;
			case (87):
			InventorySortierer('Ausruestung');
			break;
			case (83):
			InventorySortierer('HandRechts');
			break;
			case (68):
			InventorySortierer('Fuesse');
			break;
			case (49):
			WeltHoehe=337;
			break;
			case (50):
			WeltHoehe=360;
			break;
			case (51):
			WeltHoehe=435;
			break;
			case (52):
			WeltHoehe=480;
			break;
			case (53):
			WeltHoehe=730;
			break;
			case (54):
			WeltHoehe=750;
			break;
			case(116):
			// Leer um zu verhindern, dass F5 (ASCII-Code: 116) alles zerrockt
			break;
		}
	}
}

if(document.addEventListener){
	document.addEventListener("keydown",TasteGedrueckt,true);
}else{
	document.onkeydown=TasteGedrueckt;//IE
}