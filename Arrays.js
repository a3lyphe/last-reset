KartenTeil1=['A','B','C','D','E','F'];//
KartenTeil2=['0','1','2','3','4','5','6'];//

//Die SechzehnFaltigkeit der Flaechen
	ObenWert=[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3];
	UntenWert=[0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3];
	LinksWert=[0,4,0,4,8,12,8,12,0,4,0,4,8,12,8,12];
	RechtsWert=[0,0,4,4,0,0,4,4,8,8,12,12,8,8,12,12];

//Die festen Werte der Rand-Stueckchen
	RandNamenArray=['RandOben','Randunten','RandLinks','RandRechts'];
	InventoryRandNamenArray=['InventoryRandOben','InventoryRandunten','InventoryRandLinks','InventoryRandRechts'];
	ChatBoxRandNamenArray=['ChatBoxRandOben','ChatBoxRandunten','ChatBoxRandLinks','ChatBoxRandRechts'];
	CharakterBoxRandNamenArray=['CharakterBoxRandOben','CharakterBoxRandunten','CharakterBoxRandLinks','CharakterBoxRandRechts'];
	AvatarWerteBoxRandNamenArray=['AvatarWerteBoxRandOben','AvatarWerteBoxRandunten','AvatarWerteBoxRandLinks','AvatarWerteBoxRandRechts'];
	RandLeftArray=[0,0,0,96];
	RandTopArray=[0,96,0,0];
	RandWidthArray=[100,100,4,4];
	RandHeightArray=[4,4,100,100];

//Alle Möglichen Aditativ-Werte aus den entsprechenden X und Y Werten
	KonstantenNRArray=[0,2,5,7,8,10,13,15];

//Alle moeglichen FlaechenWerte und die entsprechenden BildNummern der A-Flaeche.
	FlaecheAXWert=[0,2,0,0,3,3,1,3];
	FlaecheAYWert=[0,12,0,4,8,12,0,12];
	BildA=[0,10,1,3,12,14,5,15];

//Alle moeglichen FlaechenWerte und die entsprechenden BildNummern der B-Flaeche.
	FlaecheBXWert=[2,0,2,2,1,1,3,1];
	FlaecheBYWert=[8,4,8,12,0,4,8,4];
	BildB=[8,2,9,11,4,6,13,7];

//AlleEbenen
	EbenenArray=['ErsteEbene','ZweiteEbene','DritteEbene','VierteEbene','FuenfteEbene','SechsteEbene'];
	EbenenUeberOrdnerArray=['Matsch3','Stein3','Stein1','Matsch4','Stein2','Matsch4'];
	EbenenMaterieArray=['Land','Land','Land','Land','Land','Land'];
	BGMaterieArray=['WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB'];

//KartenArray
	KartenArray=['KarteA0','KarteA1','KarteA2','KarteA3','KarteA4','KarteA5','KarteA6','KarteA7','KarteB0','KarteB1','KarteB2','KarteB3','KarteB4','KarteB5','KarteB6','KarteB7','KarteC0','KarteC1','KarteC2','KarteC3','KarteC4','KarteC5','KarteC6','KarteC7','KarteD0','KarteD1','KarteD2','KarteD3','KarteD4','KarteD5','KarteD6','KarteD7','KarteE0','KarteE1','KarteE2','KarteE3','KarteE4','KarteE5','KarteE6','KarteE7','KarteF0','KarteF1','KarteF2','KarteF3','KarteF4','KarteF5','KarteF6','KarteF7'];
	BGMaterieArray=['WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WieseB','Wueste','WuesteB','WuesteB','WuesteB','WuesteB','WuesteB','WuesteB','WuesteB','WuesteB'];

//Grund-Positionierung-Variablen der Ebenen
	EbenenVaryLeft=4+'%';
	EbenenVaryTop=4+'%';
	EbenenVaryWidth=92+'%';
	EbenenVaryHeight=92+'%';

//Einstellungen fuer die Heufigkeit der TeilStuecke der Ebenen.
	ErsteEbeneKonstantenArray=[.0,.99,.99,.99,.99,.99,.0,.99];
	ZweiteEbeneKonstantenArray=[.5,.5,.5,.5,.5,.5,.5,.5];
	DritteEbeneKonstantenArray=[.5,.5,.5,.5,.5,.5,.5,.5];
	VierteEbeneKonstantenArray=[.5,.5,.5,.5,.5,.5,.5,.5];
	FuenfteEbeneKonstantenArray=[.5,.5,.5,.5,.5,.5,.5,.5];
	SechsteEbeneKonstantenArray=[.5,.5,.5,.5,.5,.5,.5,.5];

//0=kein Teil,1=Teil
	ErsteEbeneTeilCounterArray=[0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1];
	ZweiteEbeneTeilCounterArray=[1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0];
	DritteEbeneTeilCounterArray=[0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0];
	VierteEbeneTeilCounterArray=[0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0];
	FuenfteEbeneTeilCounterArray=[0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0];
	SechsteEbeneTeilCounterArray=[0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0];

//Array´s fuer die Variation der Teile.
	ErsteEbeneTeilCounterVariationenArray=[0,1,2,1,2,1,0,0,2,0,1,0,2,2,1,2,1,0,1,0,0,2,2,1,0,1,2,2,0,2,0,1];
	ZweiteEbeneTeilCounterVariationenArray=[0,1,2,1,2,1,0,0,2,0,1,0,2,2,1,2,1,0,1,0,0,2,2,1,0,1,2,2,0,2,0,1];
	DritteEbeneTeilCounterVariationenArray=[0,1,2,1,2,1,0,0,2,0,1,0,2,2,1,2,1,0,1,0,0,2,2,1,0,1,2,2,0,2,0,1];
	VierteEbeneTeilCounterVariationenArray=[0,1,2,1,2,1,0,0,2,0,1,0,2,2,1,2,1,0,1,0,0,2,2,1,0,1,2,2,0,2,0,1];
	FuenfteEbeneTeilCounterVariationenArray=[0,1,2,1,2,1,0,0,2,0,1,0,2,2,1,2,1,0,1,0,0,2,2,1,0,1,2,2,0,2,0,1];
	SechsteEbeneTeilCounterVariationenArray=[0,1,2,1,2,1,0,0,2,0,1,0,2,2,1,2,1,0,1,0,0,2,2,1,0,1,2,2,0,2,0,1];
