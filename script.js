var names=new Array();
names[0]="Hana";
names[1]="Hardy";
names[2]="Taeeb";
names[3]="Soz";
names[4]="Shene";
names[5]="Khuncha";
names[6]="Lareen";
names[7]="Kani";
names[8]="Kashma";
names[9]="Lilya";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}