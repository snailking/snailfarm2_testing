var addtext = "";
var basictestdoc = ""; 
var leadernumber = 0;

// ABI with nothing but hatcherySnail

var abi = [ {
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "hatcherySnail",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "adr",
				"type": "address"
			}
		],
		"name": "ComputeEggsSinceLastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

var contractAddress="0xeb93E12E23aCD78f622FcDB6B51906B7ba0AeD2b"

// hatcherySnail function modified to output what we want

function hatcherySnail(address, callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatcherySnail.getData(address);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //callback(web3.toDecimal(result));
			addtext += address + " = " + web3.toDecimal(result) + " snails<br>";
        }
        else{
            console.log('error :(');
        }
    });
}

function ComputeEggsSinceLastHatch(address,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.ComputeEggsSinceLastHatch.getData(address);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //callback(web3.toDecimal(result))
			var displayeggs = (web3.toDecimal(result)) / 86400;
			addtext += address + " = " + displayeggs + " eggs<br><br>";
        }
        else{
            console.log('error :(')
        }
    });
}

// Copying logic from main.js

function leader(){
    console.log('leader');
	basictestdoc = document.getElementById('basictest');
    controlLoop();
}

// 10s loop. Might be too slow?

function controlLoop(){
    refreshData();
    setInterval(refreshData,10000);
}

function refreshData(){
	updateLeaderboard();
	/*if (leadernumber < (leaderArray.length - 1) ) {
		leadernumber++;
	} else {
		leadernumber = 0;
		addtext = "";
	}*/
}

// Check a specific address
function Hunt(){
	addtext = "";
	var hunted = document.getElementById("hunted").value;
	hatcherySnail(hunted);
	basictestdoc.innerHTML = addtext;
}

// Player object

function Player (address, snails, eggs) {
	this.address = address;
	this.snails = snails;
	this.eggs = eggs;
}

// Added manually based on activity. Research how to automate this.
// Only players above 10k snails for visibility, but keep addresses in code for easy CTRL-F when adding new ones

var a1 = new Player("0xe84fd91cbba2fcddc22d96965158ae676dd61d28", 0, 0)
var a5 = new Player("0x922cFfa33A078B4Cc6077923e43447d8467F8B55", 0, 0)
var a7 = new Player("0x58e90f6e19563ce82c4a0010cece699b3e1a6723", 0, 0)
var a8 = new Player("0x1ec75d8ca166c8f12a3531204923cbcc8f020ed2", 0, 0)
var a9 = new Player("0xb38094d492af4fffff760707f36869713bfb2250", 0, 0)
var a10 = new Player("0x87d641600c7962ab5cd87802b15b97ade5b73b2a", 0, 0)
var a2 = new Player("0xbd66141cdde50b703d7c6dfd0a91628922398719", 0, 0)
var a4 = new Player("0x0aaaa59124654904583a4a58b1bac0409ac358ce", 0, 0)
var a6 = new Player("0x78785d883012467e3c2b01fa4f87d91346eaa25d", 0, 0)
var a11 = new Player("0x7e474fe5cfb720804860215f407111183cbc2f85", 0, 0)
var a3 = new Player("0x268e83c26934e868182a82a0f740fc577fb0830d", 0, 0)

var leaderArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];

// Call hatcherySnail for each address

function updateLeaderboard(){
	/*leaderArray[leadernumber].snails = hatcherySnail(leaderArray[leadernumber].address);
	var leaderprevious = leadernumber - 1;
	if(leaderprevious < 0) { leaderprevious = 0; }
	addtext += leaderArray[leaderprevious].address + " has " + leaderArray[leadernumber].snails + " snails <br>";
	basictestdoc.innerHTML = addtext;*/
	/*
	a2.snails = hatcherySnail(a2.address);
	addtext += a2.address + " has " + a2.snails + " snails <br>"
	a3.snails = hatcherySnail(a3.address);
	addtext += a3.address + " has " + a3.snails + " snails <br>"
	a4.snails = hatcherySnail(a4.address);
	addtext += a4.address + " has " + a4.snails + " snails <br>"
	basictestdoc.innerHTML = addtext;*/

	for (i = 0; i < leaderArray.length; i++) {
		hatcherySnail(leaderArray[i].address);
		//ComputeEggsSinceLastHatch(leaderArray[i].address);
		//addtext += leaderArray[i].address + " has " + leaderArray[i].snails + " snails <br>";
		basictestdoc.innerHTML = addtext;
	}
	addtext = "";
}


/*function checkSnails(){
    var currentspiderownerdoc = document.getElementById('currentspiderowner')
    hatcherySnail(function(address) {
		currentspiderownerdoc.textContent = address.substring(26, 66);		
	});
}*/