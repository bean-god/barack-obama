const Discord = require("discord.js")
const client = new Discord.Client()
const { prefix } = require("./config.json");
const colon = ':';
//const express = require('express');
//const app = express();
var anger = 0;
var reset = 0;
var grams;
var moles;
var atoms;
var exponents;
var ElementValid = false;
const MoleE = 602200000000000000000000;
var selectedE;
module.exports = (client, message) => {
	function pwait(iMilliSeconds) {
		var counter = 0
			, start = new Date().getTime()
			, end = 0;
		while (counter < iMilliSeconds) {
			end = new Date().getTime();
			counter = end - start;
		}
	}
	var sent = `${message}`;
	const words = sent.split(' ');
	var element = words[2];

// ----------------- No Bots --------------------
if (message.author.bot) { return }

if(message.content === `Obama you do it`) {message.channel.send(`n!marry`)}

if(message.content.startsWith(`${prefix}GramsToMoles`)) {
		if (!words[1] && !words[2]) {return message.channel.send(`Usage: \n ${prefix}GramsToMoles grams element`)}
		if (!words[1]) {return message.channel.send(`Must include a number!`)}
		console.log(words[1]);
		console.log(words[2]);
		var check = parseInt(words[1])
		grams = words[1];
		 elementCheck();
		calcGramsToMoles()
}
if(message.content.startsWith(`${prefix}MolesToGrams`)) {
		if (!words[1] && !words[2]) {return message.channel.send(`Usage: \n ${prefix}MolesToGrams moles element`)}
		if (!words[1]) {return message.channel.send(`Must include a number!`)}
		console.log(words[1]);
		console.log(words[2]);
		var check = parseInt(words[1])
		moles = words[1];
		 elementCheck();
		calcMolesToGrams()
}
if(message.content.startsWith(`${prefix}AtomsToMoles`)) {
		if (!words[1] && !words[2]) {return message.channel.send(`Usage: \n ${prefix}AtomsToMoles atoms exponent(for scientific notation)`)}
		if (!words[2]) {return message.channel.send(`Must include an exponent!`)}
		console.log(words[1]);
		console.log(words[2]);
		var check = parseInt(words[1])
		check = parseInt(words[2])
		//if(!check) {return message.channel.send(`MuSst be a number!`)}
		ElementValid = true;
		atoms = words[1];
		exponents = words[2];
		calcAtomsToMoles()
}
if(message.content.startsWith(`${prefix}MolesToAtoms`)) {
		if (!words[1] && !words[2]) {return message.channel.send(`Usage: \n ${prefix}MolesToAtoms moles`)}
		console.log(words[1]);
		var check = parseInt(words[1])
		ElementValid = true;
		moles = words[1];
		calcMolesToAtoms()
}
if(message.content.startsWith(`${prefix}GramsToAtoms`)) {
		if (!words[1] && !words[2]) {return message.channel.send(`Usage: \n ${prefix}GramsToMoles grams element`)}
		if (!words[1]) {return message.channel.send(`Must include a number!`)}
		console.log(words[1]);
		console.log(words[2]);
		var check = parseInt(words[1])
		grams = words[1];
		 elementCheck();
		calcGramsToAtoms()
}
function elementCheck() {
switch(element) {
	case "magnesium":
	selectedE = 24.31;
	ElementValid = true;
	break;
	case "lithium":
	selectedE = 6.94;
	ElementValid = true;
	break;
	case "radon":
	selectedE = 222;
	ElementValid = true;
	break;
	case "copper":
	selectedE = 63.55;
	ElementValid = true;
	break;
	case "helium":
	selectedE = 4;
	ElementValid = true;
	break;
	case "calcium":
	selectedE = 40.08;
	ElementValid = true;
	break;
	case "zinc":
	selectedE = 65.38;
	ElementValid = true;
	break;
	case "iron":
	selectedE = 55.85;
	ElementValid = true;
	break;
	case "barium":
	selectedE = 137.33;
	ElementValid = true;
	break;
	case "oxygen":
	selectedE = 16;
	ElementValid = true;
	break;
	case "sodium":
	selectedE = 22.99;
	ElementValid = true;
	break;
	case "aluminum":
	selectedE = 26.98;
	ElementValid = true;
	break;
	case "carbon":
	selectedE = 12;
	ElementValid = true;
	break;
	case "krypton":
	selectedE = 84;
	ElementValid = true;
	break;
	default:
	return message.channel.send(`Must include a valid element!`);
	ElementValid = false;
}
console.log(selectedE)
}
function calcGramsToMoles() {
//if (ElementValid) {
	var moled;
	moled = (grams / selectedE);
	message.channel.send(moled)
	console.log(moled)
	message.channel.send(`Don't forget to round!`)
	ElementValid = false;
//	}
}
function calcMolesToGrams() {
if (ElementValid) {
	var moled1;
	moled1 = (moles * selectedE);
	message.channel.send(moled1)
	console.log(moled1)
	message.channel.send(`Don't forget to round!`)
	ElementValid = false;
	}
}
function calcAtomsToMoles() {
if (ElementValid) {
	var moled2;    
	var moled3;
	var moled4;
	moled3 = (Math.pow(10, exponents));
	console.log(moled3)
	moled4 = atoms * moled3;
	moled2 = (moled4 / MoleE);
	message.channel.send(moled2)
	message.channel.send(`Don't forget to round!`)
	console.log(moled2)
	ElementValid = false;
	}
}
function calcMolesToAtoms() {
if (ElementValid) {
	var moled7;    
	moled7 = MoleE * moles;
	message.channel.send(moled7)
	message.channel.send(`Don't forget to round!`)
	console.log(moled7)
	ElementValid = false;
	}
}
function calcGramsToAtoms() {
if (ElementValid) {
	var moled5;
	var moled6;
	moled5 = (grams / selectedE);
	moled6 = (moled5 * MoleE);
	message.channel.send(moled6)
	message.channel.send(`Don't forget to round!`)
	console.log(moled6)
	ElementValid = false;
	}
}




var y = Math.floor(Math.random() * 2);
  if (message.content.includes("yes or no")) {
    if (y == 1) {message.channel.send(`Yes`)}else {message.channel.send(`No`)}}
const guild = message.guild;
const member = message.member;
const author = message.author;
var adminID;
var moderatorID;
console.log(message.author.username, message.author.discriminator, colon, colon, message.channel.name, colon, message.guild.name, colon, message.content);

/*if (author.username === 'dirt' && author.discriminator === '2253') {if (message.content === `${prefix}hardReset`){hardReset()}}
function hardReset() {app.get("/system/reboot", (req, res)=>{
    setTimeout(function () {
        process.on("exit", function () {
            require("child_process").spawn(process.argv.shift(), process.argv, {
                cwd: process.cwd(),
                detached : true,
                stdio: "inherit"
            });
        });
        process.exit();
    }, 1000);
})}*/
	if(message.content.startsWith(`${prefix}delete`)) {
		BulkDelete()
	}
	if (message.content === `${prefix}roles`) {
	message.delete()
		if (!member.hasPermission('ADMINISTRATOR')) {
	return message.channel.send(`You do not have the permissions to do that.`)}
const adminID2 = message.guild.roles.cache.find(role => role.name === "Admins")
const moderatorID2 = message.guild.roles.cache.find(role => role.name === "Moderator")
	if (!adminID2){adminID = `undefined`}else {adminID = adminID2.id;};
if (!moderatorID2){moderatorID = `undefined`}else {moderatorID = moderatorID2.id;};
	return message.member.send(`admin : ${adminID} \n moderator : ${moderatorID}`);;
	}
	function bann() {
	if (!member.hasPermission('BAN_MEMBERS')) {
	return message.channel.send(`You do not have permission to do that.`)}
	const member = message.mentions.members.first()
    if (!member) {
      return message.channel.send(
        `You must mention a user.`
      )
    }
    if (!member.bannable) {
      return message.channel.send(`I can't ban this user.`)
    }
    return member
      .ban()
      .then(() => message.channel.send(`${member.user.tag} was banned.`))
      .catch(error => message.channel.send(`Sorry, an error occured.`))
	  }
	function kickk() {
	if (!member.hasPermission('KICK_MEMBERS')) { 
	return message.channel.send(`You do not have permission to do that.`)}
	const member = message.mentions.members.first()
    if (!member) {
      return message.channel.send(
        `You must mention a user.`
      )
    }
    if (!member.bannable) {
      return message.channel.send(`I can't kick this user.`)
    }
    return member
      .kick()
      .then(() => message.channel.send(`${member.user.tag} was kicked.`))
      .catch(error => message.channel.send(`Sorry, an error occured.`))
	}
	

	function BulkDelete() {
	if (!member.hasPermission('MANAGE_MESSAGES')) {
	return message.channel.send(`You do not have the permissions to do that.`)
	}
		const words = sent.split(' ');
		if (!words[1]) {return message.channel.send(`Must be a number!`)}
		console.log(words[1]);
		var check = parseInt(words[1])
		if(!check) {return message.channel.send(`Must be a number!`)}
		 var beaned = words[1];
		 if(beaned > 99) {return message.channel.send("Too many requests. Make sure to send below 99!")}                                              
		 //var beaned = parseInt(words) ;
		 //if (!beaned) {return console.log(`big dick error`)}
		 message.delete();
		 message.channel.bulkDelete(beaned).catch(console.error);
	}

function punishment() {
	var p = Math.floor(Math.random()*2)+1;
	if (!hasPermission('MANAGE_ROLES')) {return message.channel.send(`I do not have the permissions to punish you.`) }
	switch(p) {
		case 1:
		message.channel.send("That's it. You are going to Brazil.")
		Brazil();
		break;
		case 2:
		message.channel.send("That's it. You are going to the sex dungeon.")
		SexD();
		break;
		case 3:
		OPrison();
		message.channel.send("That's it. You are going to the Obama Prison.")
		break;
		case 4:

		break;
		default:
		message.channel.send("You are lucky.")
	}
}
if (message.guild){
CBrazil();
CSexD();
COPrison();
}
/*Template for punishment role 
var name = "name";
function Name() { let role = message.guild.roles.cache.find(role => role.name === `name`); var roleID = role.id; member.roles.add([`${roleID}`]).catch(console.error); }
function CName() { let role = message.guild.roles.cache.find(role => role.name === `name`); if (role) {return}; role = guild.roles.create({data:{name: `name`, color: 'GREEN', hoist: 'true'
.catch(console.log) }
*/
function OPrison() { let role = message.guild.roles.cache.find(role => role.name === `Obama Prison`); var roleID = role.id; member.roles.add([`${roleID}`]).catch(console.error); }
function COPrison() { let role = message.guild.roles.cache.find(role => role.name === `Obama Prison`); if (role) {return}; role = guild.roles.create({data:{name: `Obama Prison`, color: 'AQUA', hoist: 'true'}})
.catch(console.log) }

function SexD() { let role = message.guild.roles.cache.find(role => role.name === `Sex Dungeon`); var roleID = role.id; member.roles.add([`${roleID}`]).catch(console.error); }
function CSexD() { let role = message.guild.roles.cache.find(role => role.name === `Sex Dungeon`); if (role) {return}; role = guild.roles.create({data:{name: `Sex Dungeon`, color: 'RED', hoist: 'true'}})
.then(console.log)
.catch(console.log) }

function Brazil() { let role = message.guild.roles.cache.find(role => role.name === "Brazil"); var roleID = role.id; member.roles.add([`${roleID}`]).catch(console.error); }
function CBrazil() { let role = message.guild.roles.cache.find(role => role.name === "Brazil"); if (role) {return}; role = guild.roles.create({data:{name: 'Brazil', color: 'GREEN', hoist: 'true'}})
.then(console.log)
.catch(console.log) 
}

if(message.content===`as`) {punishment()}



reset += 1;
if(reset >= 10){if(anger >= 0){anger -= 1}}
if(message.content === `${prefix}anger`){message.channel.send(`${anger}`)}
//obamafacts();


                                                                                                                                                                                                                  
var x = Math.floor(Math.random() * 24)+1;  
var w = Math.floor(Math.random() * 14)+1;  
var z = Math.floor(Math.random() * 14)+1;  
var a = Math.floor(Math.random() * 23)+1;  
if(message.content.includes("nigger") || message.content.includes("Nigger") || message.content.includes("NIGGER") || message.content.includes("nigga") || message.content.includes("Nigga") || message.content.includes("NIGGA")){message.delete(); obama()}
if(message.content.includes("donald trump") || message.content.includes("Donald Trump") || message.content.includes("Donald trump") ||message.content.includes("donald Trump") || message.content.includes("DONALD TRUMP")){message.delete(); obama(); message.channel.send("Vote for Obama  as your president in 2020!")}

if(message.content === `${prefix}s`){
message.channel.send("jena ljeh alsgjnasglajksegn ljn gklwagn alwneg alwngaw")
}
//jena ljeh alsgjnasglajksegn ljn gklwagn alwneg alwngaw

function obama() {
  switch(anger) {
  case 0:
    if(w==1){message.channel.send("You should know better.")}else
	if(w==2){message.channel.send("This is a warning.")}else
	if(w==3){message.channel.send("Why would you say that?")}else
	if(w==4){message.channel.send("You know better than that.")}else
	if(w==5){message.channel.send("Don't.")}else
	if(w==6){message.channel.send("Be careful about what you say.")}else
	if(w==7){message.channel.send("Do you know who I am?")}else
	if(w==8){message.channel.send("What you are doing is dangerous.")}else
	if(w==9){message.channel.send("Do not say that.")}else
	if(w==10){message.channel.send("No.")}else
	if(w==11){message.channel.send("Be careful.")}else
	if(w==12){message.channel.send("You are making me angry.")}else
	if(w==13){message.channel.send("This is a warning.")}else
	if(w==14){message.channel.send("My anger is rising.")}
	anger = 1;
	reset = 0;
    break;
  case 1:
	if(w==1){message.channel.send("You are testing me.")}else
	if(w==2){message.channel.send("I am getting angry.")}else
	if(w==3){message.channel.send("You don't want to say it again.")}else
	if(w==4){message.channel.send("I am thinking about taking you to Brazil.")}else
	if(w==5){message.channel.send("This is your second warning.")}else
	if(w==6){message.channel.send("I am not happy with this.")}else
	if(w==7){message.channel.send("You don't understand what will happen, do you?")}else
	if(w==8){message.channel.send("You better stop.")}else
	if(w==9){message.channel.send("No.")}else
	if(w==10){message.channel.send("Be careful.")}else
	if(w==11){message.channel.send("Do not say that.")}else
	if(w==12){message.channel.send("Don't")}else
	if(w==13){message.channel.send("I do not approve.")}else
	if(w==14){message.channel.send("jena ljeh alsgjnasglajksegn ljn gklwagn alwneg alwngaw")}
	anger = 2;
	reset = 0;
    break;
	case 2:
	punishment();
	message.member.edit({
      nick: 'Nigger',
    })
	anger = 0;
	reset = 0;
    break;
  default:
    // code block
}
}

	if (message.content === `${prefix}help`) {
		const help = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Commands')
			.addField(`Music`, `${prefix}play \n ${prefix}loop \n ${prefix}stop`)
			.addField(`Moderation`, `${prefix}kick \n ${prefix}ban \n ${prefix}delete`)
			.addField(`Everything else`, `${prefix}speech \n ${prefix}quote \n ${prefix}obamafact`)
		message.channel.send(help)
	}


}