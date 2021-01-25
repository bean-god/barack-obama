﻿const Discord = require("discord.js")
const { prefix } = require("./config.json");
const colon = ':';
//const express = require('express');
//const app = express();
var anger = 0;
var reset = 0;
var health = 4;// -= damage
var damage = 2;// -= health
var speed = 1;// determines who attacks first
module.exports = (client, message) => {
var sent = `${message}`;
const words = sent.split(' ');
var element = words[2];
var grams;
var moles;
var atoms;
var exponents;
var ElementValid = false;
//const MoleE = Math.pow(6.022, 23);
const MoleE = 602200000000000000000000;
var selectedE;

if(message.content === `Obama you do it`) {message.channel.send(`n!marry`)}

if(message.content.startsWith(`${prefix}GramsToMoles`)) {
		if (!words[1] && !words[2]) {return message.channel.send(`Usage: \n ${prefix}GramsToMoles grams element`)}
		if (!words[1]) {return message.channel.send(`Must include a number!`)}
		console.log(words[1]);
		console.log(words[2]);
		var check = parseInt(words[1])
		//if(!check) {return message.channel.send(`Must be a number!`)}
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
		//if(!check) {return message.channel.send(`Must be a number!`)}
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
		//if(!check) {return message.channel.send(`Must be a number!`)}
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
		//if(!check) {return message.channel.send(`Must be a number!`)}
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
		//if(!check) {return message.channel.send(`Must be a number!`)}
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
	if(message.author.bot) {return}
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

	var x = Math.floor(Math.random() * 24) + 1;
	var a = Math.floor(Math.random() * 14) + 1;
	var z = Math.floor(Math.random() * 14) + 1;  
	if (message.content === `${prefix}speech`) {
		message.delete();
		if (x == 1) { message.channel.send("Trade can bring new wealth and opportunities, but also huge disruptions and changing communities. It s a belief that pulsed in the cradle of civilization, and that still beats in the heart of billions. They know we can do better. Wright deliver a sermon called 'The Audacity of Hope.' And during the course of that sermon, he introduced me to someone named Jesus Christ. Politicians routinely exploited fears of crime for their own electoral ends. It requires all Americans to realize that your dreams do not have to come at the expense of my dreams; that investing in the health, welfare, and education of black and brown and white children will ultimately help all of America prosper. Meanwhile, the struggle for women s equality continues in many aspects of American life, and in countries around the world. On economic development, we will create a new corps of business volunteers to partner with counterparts in Muslim-majority countries. Thank you. And may God s peace be upon you.") } else
			if (x == 2) { message.channel.send("In that time, I've had the chance to talk with Americans all across this country. And it's a lesson we need to remember today - as members of another Joshua generation. I chose to run for the presidency at this moment in history because I believe deeply that we cannot solve the challenges of our time unless we solve them together - unless we perfect our union by understanding that we may have different stories, but we hold common hopes; that we may not look the same and we may not have come from the same place, but we all want to move in the same direction - towards a better future for of children and our grandchildren. We are more compassionate than a government that lets veterans sleep on our streets and families slide into poverty; that sits on its hands while a major American city drowns before our eyes. She's the one who taught me about hard work. Words alone cannot meet the needs of our people. That we can tuck in our children at night and know that they are fed and clothed and safe from harm. If you're working forty hours a week, you shouldn't be living in poverty. And it is my first duty as President to protect the American people. But let us be clear: al Qaeda killed nearly 3,000 people on that day.Thank you.") } else
				if (x == 3) { message.channel.send("Hall in East Moline, Ill.. And as a consequence, so did I. That's why organizations are rising up across the country to reclaim the language of faith to bring about change. Instead, they expressed a profoundly distorted view of this country - a view that sees white racism as endemic, and that elevates what is wrong with America above all that we know is right with America; a view that sees the conflicts in the Middle East as rooted primarily in the actions of stalwart allies like Israel, instead of emanating from the perverse and hateful ideologies of radical Islam. He simply says to everyone in the room, 'I am here because of Ashley.' I'll invest in early childhood education. The hope of a skinny kid with a funny name who believes that America has a place for him, too. And it's a testament to what we can achieve when good people with strong convictions stand up for their beliefs. And Ashley said that when she was nine years old, her mother got cancer. Washington's been talking about our oil addiction for the last thirty years, and John McCain has been there for twenty-six of them. More recently, tension has been fed by colonialism that denied rights and opportunities to many Muslims, and a Cold War in which Muslim-majority countries were too often treated as proxies without regard to their own aspirations. Thank you, God Bless you, and God Bless the United States of America.") } else
					if (x == 4) { message.channel.send("That we can say what we think, write what we think, without hearing a sudden knock on the door. There is not a Black America and a White America and Latino America and Asian America - there's the United States of America. And we should close Guantanamo Bay and stop tolerating the torture of our enemies. But the record's clear: John McCain has voted with George Bush ninety percent of the time. Out of work? Tough luck. The fundamentals we use to measure economic strength are whether we are living up to that fundamental promise that has made this country great - a promise that is the only reason I am standing here tonight. The UCC is still listening. And Ashley said that when she was nine years old, her mother got cancer. Because it feeds into the cynicism we all have about government. But all of us must recognize that education and innovation will be the currency of the 21st century, and in too many Muslim communities there remains underinvestment in these areas. The question is whether we spend that time focused on what pushes us apart, or whether we commit ourselves to an effort - a sustained effort - to find common ground, to focus on the future we seek for our children, and to respect the dignity of all human beings. Thank you.") } else
						if (x == 5) { message.channel.send("Wright deliver a sermon called 'The Audacity of Hope.' And during the course of that sermon, he introduced me to someone named Jesus Christ. If John McCain wants to follow George Bush with more tough talk and bad strategy, that is his choice - but it is not the change we need. So America will defend itself respectful of the sovereignty of nations and the rule of law. But we have a responsibility to join together on behalf of the world we seek - a world where extremists no longer threaten our people, and American troops have come home; a world where Israelis and Palestinians are each secure in a state of their own, and nuclear energy is used for peaceful purposes; a world where governments serve their citizens, and the rights of all God's children are respected. I know there are many - Muslim and non-Muslim - who question whether we can forge this new beginning. But if we choose to be bound by the past, we will never move forward.") } else
							if (x == 6) { message.channel.send("It wasn't until after college, when I went to Chicago to work as a community organizer for a group of Christian churches, that I confronted my own spiritual dilemma. It's a promise that says each of us has the freedom to make of our own lives what we will, but that we also have the obligation to treat each other with dignity and respect. For human history has often been a record of nations and tribes subjugating one another to serve their own interests. Rather than remain trapped in the past, I have made it clear to Iran's leaders and people that my country is prepared to move forward.") } else
								if (x == 7) { message.channel.send("We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more. The truth is, on issue after issue that would make a difference in your lives - on health care and education and the economy - Senator McCain has been anything but independent.") } else
									if (x == 8) { message.channel.send("E pluribus unum. This time we want to talk about the fact that the real problem is not that someone who doesn't look like you might take your job; it's that the corporation you work for will ship it overseas for nothing more than a profit. America, we are better than these last eight years. What is that promise? Some are eager to stoke the flames of division, and to stand in the way of progress.") } else
										if (x == 9) { message.channel.send("When we send our young men and women into harm's way, we have a solemn obligation not to fudge the numbers or shade the truth about why they're going, to care for their families while they're gone, to tend to the soldiers upon their return, and to never ever go to war without enough troops to win the war, secure the peace, and earn the respect of the world. A nation of whiners? Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. I'll invest in early childhood education. But what I will not do is suggest that the Senator takes his positions for political purposes. For eighteen long months, you have stood up, one by one, and said enough to the politics of the past.") } else
											if (x == 10) { message.channel.send("At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. Nor is it beyond the sea. That's why I stand here tonight. America, we cannot turn back. The United States has been one of the greatest sources of progress that the world has ever known.") } else
												if (x == 11) { message.channel.send("I've seen it in Washington, when we worked across party lines to open up government and hold lobbyists more accountable, to give better care for our veterans and keep nuclear weapons out of terrorist hands. But let us be clear: al Qaeda killed nearly 3,000 people on that day. But it was not violence that won full and equal rights.") } else
													if (x == 12) { message.channel.send("It's a promise that says the market should reward drive and innovation and generate growth, but that businesses should live up to their responsibilities to create American jobs, look out for American workers, and play by the rules of the road. Don't tell me that Democrats won't keep us safe.") } else
														if (x == 13) { message.channel.send("You know, a while back, I met a young man named Shamus [Seamus?] in a V.F.W. Now, some of you may have heard me talk about the Joshua generation. We will, however, relentlessly confront violent extremists who pose a grave threat to our security. Now is the time for Palestinians to focus on what they can build. This is important because no development strategy can be based only upon what comes out of the ground, nor can it be sustained while young people are out of work.") } else
															if (x == 14) { message.channel.send("And that it's not enough to just believe this - we have to do our part to make it a reality. In the white community, the path to a more perfect union means acknowledging that what ails the African-American community does not just exist in the minds of black people; that the legacy of discrimination - and current incidents of discrimination, while less overt than in the past - are real and must be addressed. He does not say education or the war.") } else
																if (x == 15) { message.channel.send("They held vigils across this country when four little girls were killed in the 16th Street Baptist Church. We can affirm our faith without endangering the separation of church and state, as long as we understand that when we're in the public square, we have to speak in universal terms that everyone can understand. It is easy to point fingers - for Palestinians to point to the displacement brought by Israel's founding, and for Israelis to point to the constant hostility and attacks throughout its history from within its borders as well as beyond. God bless you.") } else
																	if (x == 16) { message.channel.send("And so they need an assurance that somebody out there cares about them, is listening to them - that they are not just destined to travel down that long road toward nothingness. And as a consequence, so did I. And when these battles were overtaken by others and when the wars they opposed were waged and won, these faithful foot soldiers for justice kept marching. So let me spell out exactly what that change would mean if I am President. Without these ingredients, elections alone do not make true democracy.") } else
																		if (x == 17) { message.channel.send("The day after Pearl Harbor my grandfather signed up for duty; joined Patton's army, marched across Europe. It's the hope of slaves sitting around a fire singing freedom songs. I would not be running for President if I didn't believe with all my heart that this is what the vast majority of Americans want for this country. It is not enough to give health care to the sick, or jobs to the jobless, or education to our children. Out of work? Tough luck. Indeed, it suggests the opposite: we must face these tensions squarely.") } else
																			if (x == 18) { message.channel.send("John Edwards calls on us to hope. At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. You don't protect Israel and deter Iran just by talking tough in Washington.") } else
																				if (x == 19) { message.channel.send("And it puts the lie to the notion that the separation of church and state in America means faith should have no role in public life. But if we see this conflict only from one side or the other, then we will be blind to the truth: the only resolution is for the aspirations of both sides to be met through two states, where Israelis and Palestinians each live in peace and security.") } else
																					if (x == 20) { message.channel.send("Because one of the things that we have to change in our politics is the idea that people cannot disagree without challenging each other's character and patriotism. Instead, it is that American spirit - that American promise - that pushes us forward even when the path is uncertain; that binds us together in spite of our differences; that makes us fix our eye not on what is seen, but what is unseen, that better place around the bend. Iraq's sovereignty is its own.") } else
																						if (x == 21) { message.channel.send("And I've found that no matter where I am, or who I'm talking to, there's a common theme that emerges. Many bring up a specific issue. Now is the time to finally keep the promise of affordable, accessible health care for every single American. But let us be clear: al Qaeda killed nearly 3,000 people on that day. The Arab-Israeli conflict should no longer be used to distract the people of Arab nations from other problems.") } else
																							if (x == 22) { message.channel.send("I'm talking about something more substantial. I've seen it in the workers who would rather cut their hours back a day than see their friends lose their jobs, in the soldiers who re-enlist after losing a limb, in the good neighbors who take a stranger in when a hurricane strikes and the floodwaters rise. It was Islam - at places like Al-Azhar University - that carried the light of learning through so many centuries, paving the way for Europe's Renaissance and Enlightenment. They have affiliates in many countries and are trying to expand their reach. We are taking concrete actions to change course. And we will also expand partnerships with Muslim communities to promote child and maternal health.") } else
																								if (x == 23) { message.channel.send("But it is a story that has seared into my genetic makeup the idea that this nation is more than the sum of its parts - that out of many, we are truly one. We can tackle race only as spectacle - as we did in the OJ trial - or in the wake of tragedy, as we did in the aftermath of Katrina - or as fodder for the nightly news. And it is on their behalf that I intend to win this election and keep our promise alive as President of the United States. The United States does not accept the legitimacy of continued Israeli settlements.") } else
																									if (x == 24) { message.channel.send("If there is a child on the south side of Chicago who can't read, that matters to me, even if it's not my child. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. Religious leaders like my friends Rev. Jim Wallis and Rabbi David Saperstein and Nathan Diament are working for justice and fighting for change. We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more. But the failure to respond is a direct result of a broken politics in Washington and the failed policies of George W. Bush. Countries like Japan and South Korea grew their economies while maintaining distinct cultures.") }
	}

	if (message.content === `${prefix}quote`) {
		message.delete();
		if (a == 1) { message.channel.send("If someone is better than you at something, it is likely that they have failed at it more times than you have.") } else
			if (a == 2) { message.channel.send("If I can promise you anything, it would be that you can do anything in this world as long as you're willing to put enough work into it. Nothing in this world is unachievable.") } else
				if (a == 3) { message.channel.send("No one is born with abilities; it comes from practice, persistence and perseverance.") } else
					if (a == 4) { message.channel.send("Intent without dedicated action is simply not enough. Action without a clear intent is a waste. It is when these two powerful forces are aligned that the energy of the universe conspires in your favor.") } else
						if (a == 5) { message.channel.send("Don't be in a hurry to achieve your dreams. Take a day to play with your kids and relax - your dreams will still be there tomorrow.") } else
							if (a == 6) { message.channel.send("While there may be many things in life you wish to harvest not every seed you plant will grow.") } else
								if (a == 6) { message.channel.send("Who you will be in two years from now depends on your choices and focus. So, choose and take action carefully.") } else
									if (a == 7) { message.channel.send("Those who expect opportunities to happen will never get as far as those who make opportunities happen.") } else
										if (a == 8) { message.channel.send("A failure does not make anyone a victim, and certainly you should not feel like one after your first failure. However, if you do not get up after a fall and give it another try, then you will be a real victim.") } else
											if (a == 9) { message.channel.send("The two common characteristics of people who repeatedly fail are hardly ever listening and never learning from past failures.") } else
												if (a == 10) { message.channel.send("People will find transformation and transcendence in a McDonald's hash brown if it's all they've got.") } else
													if (a == 11) { message.channel.send("Why do people say 'grow some balls'? Balls are weak and sensitive. If you wanna be tough, grow a vagina. Those things can take a pounding.") } else
														if (a == 12) { message.channel.send("Tragedy is when I cut my finger. Comedy is when you fall into an open sewer and die.") } else
															if (a == 13) { message.channel.send("Why do people say 'grow some balls'? Balls are weak and sensitive. If you wanna be tough, grow a vagina. Those things can take a pounding.") } else
																if (a == 14) { message.channel.send("I have noticed that the people who are late are often so much jollier than the people who have to wait for them.") } else
																	if (a == 15) { message.channel.send("No one believes a liar. Even when they're telling the truth.") } else
																		if (a == 16) { message.channel.send("If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?") } else
																			if (a == 17) { message.channel.send("It's hard to enjoy practical jokes when your whole life feels like one.") } else
																				if (a == 18) { message.channel.send("If money is your only measure of success, do not be surprised when it is all you have.") } else
																					if (a == 19) { message.channel.send("No amount of regretting can change the past, and no amount of worrying can change the future.") } else
																						if (a == 20) { message.channel.send("It is not because of setbacks that most entrepreneurs do not reach the finishing line, but because of a lack of willpower and motivation.") } else
																							if (a == 21) { message.channel.send("Intelligence is more important than strength, that is why earth is ruled by men and not by animals.") } else
																								if (a == 22) { message.channel.send("Fear is found in the unknown. The more you learn, the less fear you will have. Never stop learning.") } else
																									if (a == 23) { message.channel.send("If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.") }

	}
	//function obamafacts() {
	if (message.content === `${prefix}obamafact`) {
		message.delete();
		if (z == 1) { message.channel.send("Obama is a member of the Democratic Party.") } else
			if (z == 2) { message.channel.send("Obama represented Illinois in the U.S. Senate (2005�08). He was the third African American to be elected to that body since the end of Reconstruction (1877).") } else
				if (z == 3) { message.channel.send("Obama attended Occidental College in suburban Los Angeles for two years before transferring to Columbia University in New York City, where in 1983 he received a bachelor's degree in political science. He later attended Harvard University's law school, graduating magna cum laude in 1991.") } else
					if (z == 4) { message.channel.send("Obama spent his first few years in Hawaii before moving to Jakarta to live with his half sister, his mother, and his stepfather. After spending several years in Jakarta, Obama returned to Hawaii in 1971, and he remained there through his graduation in 1979 from Punahou School, an elite college preparatory academy in Honolulu.") } else
						if (z == 5) { message.channel.send("Obama's father, Barack Obama, Sr., was a teenage goatherd in rural Kenya; he won a scholarship to study in the United States and eventually became a senior economist in the Kenyan government. Obama's mother, S. Ann Dunham, grew up in Kansas, Texas, and Washington state before her family settled in Honolulu. In 1960 she and Barack Sr. met in a Russian language class at the University of Hawaii, and the couple married less than a year later.") } else
							if (z == 6) { message.channel.send("Obama met Chicago native Michelle Robinson while he was working as a summer associate in 1989 at the Chicago law firm of Sidley Austin. At the time, Robinson was a young lawyer at the firm.") } else
								if (z == 7) { message.channel.send("In 2009 Obama received the Nobel Peace Prize 'for his extraordinary efforts to strengthen international diplomacy and cooperation between peoples.' In detailing its reasons for selecting Obama as the recipient of that year's award, the Norwegian Nobel Committee also emphasized Obama's support for nuclear disarmament. The award came after Obama had taken a number of steps that indicated a significant shift in tone from the administration of his predecessor, George W. Bush: Obama signed an executive order that banned excessive interrogation techniques; ordered the closing of the controversial military detention facility in Guant�namo Bay, Cuba, within a year (a deadline that was not met); proposed a 'fresh start' to strained relations with Russia; and traveled to Cairo in June 2009 to deliver a historic speech in which he reached out to the Muslim world.") } else
									if (z == 8) { message.channel.send("Obama won the Grammy Award for best spoken word album in both 2005 and 2007 for his narration of the audio versions of his books 'Dreams from My Father' and 'The Audacity of Hope: Thoughts on Reclaiming the American Dream,' respectively.") } else
										if (z == 9) { message.channel.send("Obama took the oath of office as president on January 20, 2009, and he was reelected to a second term on November 6, 2012.") } else
											if (z == 10) { message.channel.send("Obama majored in political science at Columbia University in New York City, where in 1983 he received a bachelor's degree.") } else
												if (z == 11) { message.channel.send("Obama announced on February 10, 2007, that he would seek the Democratic Party's presidential nomination in 2008. He delivered the announcement at the Old State Capitol in Springfield, Illinois, where Abraham Lincoln had served as a state legislator.") } else
													if (z == 12) { message.channel.send("Obama was elected to the Illinois Senate in 1996; he resigned shortly after winning the presidential election in 2008.") } else
														if (z == 13) { message.channel.send("Obama Never drinks coffee.") } else
															if (z == 14) { message.channel.send("Obama is capable of bench pressing up to 200 lbs.") }
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
if(message.author.bot){return}
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