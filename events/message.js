const Discord = require('discord.js');
const { prefix } = require("./config.json");
var pizzaStage = 0;
var pizzaChoice1;
var pizzaChoice2;
var pizzaChoice3;
var pizzaChoice4;
function pwait(iMilliSeconds) {
    var counter= 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}
function reset() {pizzaStage = 0; pizzaChoice1 = ""; pizzaChoice2 = ""; pizzaChoice3 = ""; pizzaChoice4 = "";}
module.exports = (client, message) => {
if(message.author.bot){return}




function stage0() {
message.channel.send(`Choose your Sauce (!pizza (number) )`)
message.channel.send(`(1) Classic Marinara`)
message.channel.send(`(2) BBQ Sauce`)
message.channel.send(`(3) Chocolate`)
message.channel.send(`(4) None`)
}
function stage1() {
if(message.content.includes("1")){pizzaChoice1 = ('Classic Marinara'); message.channel.send(`You chose ${pizzaChoice1}`); pizzaStage = 2} else
if(message.content.includes(`2`)){pizzaChoice1 = ('BBQ Sauce'); message.channel.send(`You chose ${pizzaChoice1}`); pizzaStage = 2} else
if(message.content.includes(`3`)){pizzaChoice1 = ('Chocolate'); message.channel.send(`You chose ${pizzaChoice1}`); pizzaStage = 2} else
if(message.content.includes(`4`)){pizzaChoice1 = ('No sauce'); message.channel.send(`You chose ${pizzaChoice1}`); pizzaStage = 2} else {reset(); return}
message.channel.send(`Choose your Cheese (!pizza (number) )`)
message.channel.send(`(1) Classic Mozzarella`)
message.channel.send(`(2) Cheddar`)
message.channel.send(`(3) None`)
}
function stage2() {
if(message.content.includes("1")){pizzaChoice2 = ('Classic Mozzarella'); message.channel.send(`You chose ${pizzaChoice2}`); pizzaStage = 3} else
if(message.content.includes(`2`)){pizzaChoice2 = ('Cheddar'); message.channel.send(`You chose ${pizzaChoice2}`); pizzaStage = 3} else
if(message.content.includes(`3`)){pizzaChoice2 = ('No Cheese'); message.channel.send(`You chose ${pizzaChoice2}`); pizzaStage = 3} else {reset(); return}
message.channel.send(`Please wait`)
pwait(5000)
message.channel.send(`Choose your first Topping (!pizza (number) )`)
message.channel.send(`(1) Pepperoni`)
message.channel.send(`(2) Chicken`)
message.channel.send(`(3) Bacon`)
message.channel.send(`(4) Sausage`)
}
function stage3() {
if(message.content.includes("1")){pizzaChoice3 = ('Pepperoni'); message.channel.send(`You chose ${pizzaChoice3}`); pizzaStage = 4} else
if(message.content.includes(`2`)){pizzaChoice3 = ('Chicken'); message.channel.send(`You chose ${pizzaChoice3}`); pizzaStage = 4} else
if(message.content.includes(`3`)){pizzaChoice3 = ('Bacon'); message.channel.send(`You chose ${pizzaChoice3}`); pizzaStage = 4} else
if(message.content.includes(`4`)){pizzaChoice3 = ('Sausage'); message.channel.send(`You chose ${pizzaChoice3}`); pizzaStage = 4} else {reset(); return}
message.channel.send(`Choose your second Topping (!pizza (number) )`)
message.channel.send(`(1) Spinach`)
message.channel.send(`(2) Olive`)
message.channel.send(`(3) Onion`)
message.channel.send(`(4) Mushroom`)
}
function stage4() {
if(message.content.includes("1")){pizzaChoice4 = ('Spinach'); message.channel.send(`You chose ${pizzaChoice4}`); pizzaStage = 5; stage5()} else
if(message.content.includes(`2`)){pizzaChoice4 = ('Olive'); message.channel.send(`You chose ${pizzaChoice4}`); pizzaStage = 5; stage5()} else
if(message.content.includes(`3`)){pizzaChoice4 = ('Onion'); message.channel.send(`You chose ${pizzaChoice4}`); pizzaStage = 5; stage5()} else
if(message.content.includes(`4`)){pizzaChoice4 = ('Mushroom'); message.channel.send(`You chose ${pizzaChoice4}`); pizzaStage = 5; stage5()} else {reset(); return}
}
function stage5(){
	const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Your finished pizza')
	.addFields(
		{ name: 'Sauce', value: `${pizzaChoice1}` },
		{ name: 'Cheese', value: `${pizzaChoice2}` },
		{ name: 'First topping', value: `${pizzaChoice3}` },
		{ name: 'Second topping', value: `${pizzaChoice4}` },
		{ name: '\u200B', value: '\u200B' }
	)
	.setTimestamp()
	.setFooter('This took a while to make. Do it again?');

	message.channel.send(exampleEmbed)
}
if(message.content.includes(`${prefix}pizza`)){makePizza()}

function makePizza() {
	switch(pizzaStage) {
	case 0:
	stage0();
	pwait(1000)
	pizzaStage = 1;
	break;
	case 1:
	stage1();
	pwait(1000)
	break;
	case 2:
	stage2();
	pwait(1000)
	break;
	case 3:
	stage3();
	pwait(1000)
	break;
	case 4:
	stage4();
	pwait(1000)
	break;
	case 5:
	stage5();
	pwait(1000)
	break;
	default:
	message.channel.send(`Error at stage ${pizzaStage}`)
	}
}



}