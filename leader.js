var addtext = "";
var basictestdoc = ""; 

// Copying logic from main.js

function leader(){
    console.log('leader')
	basictestdoc = document.getElementById('basictest');
    controlLoop()
}

// 10s loop. Might be too slow?

function controlLoop(){
    refreshData()
    setTimeout(controlLoop,10000)
}

function refreshData(){
	
	//addtext += "Hello there";
	//basictestdoc.textContent = addtext;*/
	updateLeaderboard();
}

// Player object

function Player (address, snails) {
	this.address = address;
	this.snails = snails;
}

// Added manually based on activity. Research how to automate this.

var a1 = new Player("0x58e90f6e19563ce82c4a0010cece699b3e1a6723", 0)
var a2 = new Player("0xe84fd91cbba2fcddc22d96965158ae676dd61d28", 0)
var a3 = new Player("0x20c945800de43394f70d789874a4dac9cfa57451", 0)
var a4 = new Player("0x1ec75d8ca166c8f12a3531204923cbcc8f020ed2", 0)
var a5 = new Player("0x922cFfa33A078B4Cc6077923e43447d8467F8B55", 0)

// Is this the right way to do this? Research best practice to enter lots of variables in arrays

var leaderArray = [a1, a2, a3, a4]

// Call hatcherySnail for each address

function updateLeaderboard(){
	addtext = "";
	a1.snails = hatcherySnail(a1.address);
	addtext += a1.address + " has " + hatcherySnail(a1.address) + " snails <br>"
	a2.snails = hatcherySnail(a2.address);
	addtext += a2.address + " has " + a2.snails + " snails <br>"
	a3.snails = hatcherySnail(a3.address);
	addtext += a3.address + " has " + a3.snails + " snails <br>"
	a4.snails = hatcherySnail(a4.address);
	addtext += a4.address + " has " + a4.snails + " snails <br>"
	basictestdoc.innerHTML = addtext;
	/*
	for (i = 0; i < leaderArray.length; i++) {
		leaderArray[i].snails = hatcherySnail(leaderArray[i].address);
		addtext += leaderArray[i].address + " has " + leaderArray[i].snails + " snails <br>";
		basictestdoc.innerHTML = addtext;
	}
	*/
}

// Commented out "callback" in hatcherySnail interface.js function. Does this have any ill effect??

/*function checkSnails(){
    var currentspiderownerdoc = document.getElementById('currentspiderowner')
    hatcherySnail(function(address) {
		currentspiderownerdoc.textContent = address.substring(26, 66);		
	});
}*/