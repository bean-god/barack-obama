const Discord = require("discord.js")
const client = new Discord.Client()
const { prefix } = require("./config.json");
const colon = ':';
//const express = require('express');
//const app = express();
var anger = 0;
var reset = 0;
var peepeepoopoo;
function pwait(iMilliSeconds) {
    var counter= 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}
module.exports = (client, message) => {
const guild = message.guild;
const member = message.member;
const author = message.author;
var adminID;
var moderatorID;
console.log(message.author.username, message.author.discriminator, colon, message.content, colon, message.channel.name, colon, message.guild.name);

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
if(message.content === `${prefix}help`) {
const help = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Commands')
	.addField(`Pizza`, `${prefix}pizza \n ${prefix}code`)
	.addField(`Music`, `${prefix}play \n ${prefix}loop \n ${prefix}stop`)
	.addField(`Moderation`, `${prefix}kick \n ${prefix}ban \n ${prefix}delete`)
	.addField(`Everything else`, `${prefix}speech \n ${prefix}quote \n ${prefix}obamafact \n ${prefix}recipe \n ${prefix}bread \n ${prefix}cheese`)
	message.channel.send(help)}
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
      return message.reply(
        `You must mention a user.`
      )
    }
    if (!member.bannable) {
      return message.reply(`I can't ban this user.`)
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
      return message.reply(
        `You must mention a user.`
      )
    }
    if (!member.bannable) {
      return message.reply(`I can't kick this user.`)
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
	var sent = `${message}`;
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
}
/*Template for punishment role 
var name = "name";
function Name() { let role = message.guild.roles.cache.find(role => role.name === `name`); var roleID = role.id; member.roles.set([`${roleID}`]).catch(console.error); }
function CName() { let role = message.guild.roles.cache.find(role => role.name === `name`); if (role) {return}; role = guild.roles.create({data:{name: `name`, color: 'GREEN', hoist: 'true'
.catch(console.log) }
*/

function SexD() { let role = message.guild.roles.cache.find(role => role.name === `Sex Dungeon`); var roleID = role.id; member.roles.set([`${roleID}`]).catch(console.error); }
function CSexD() { let role = message.guild.roles.cache.find(role => role.name === `Sex Dungeon`); if (role) {return}; role = guild.roles.create({data:{name: `Sex Dungeon`, color: 'RED', hoist: 'true'}})
.then(console.log)
.catch(console.log) }

function Brazil() { let role = message.guild.roles.cache.find(role => role.name === "Brazil"); var roleID = role.id; member.roles.set([`${roleID}`]).catch(console.error); }
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
if(message.content ===`${prefix}quote`){
message.delete();
	if(a==1){message.reply("If someone is better than you at something, it is likely that they have failed at it more times than you have.")}else
	if(a==2){message.reply("If I can promise you anything, it would be that you can do anything in this world as long as you're willing to put enough work into it. Nothing in this world is unachievable.")}else
	if(a==3){message.reply("No one is born with abilities; it comes from practice, persistence and perseverance.")}else
	if(a==4){message.reply("Intent without dedicated action is simply not enough. Action without a clear intent is a waste. It is when these two powerful forces are aligned that the energy of the universe conspires in your favor.")}else
	if(a==5){message.reply("Don't be in a hurry to achieve your dreams. Take a day to play with your kids and relax - your dreams will still be there tomorrow.")}else
	if(a==6){message.reply("While there may be many things in life you wish to harvest not every seed you plant will grow.")}else
	if(a==6){message.reply("Who you will be in two years from now depends on your choices and focus. So, choose and take action carefully.")}else
	if(a==7){message.reply("Those who expect opportunities to happen will never get as far as those who make opportunities happen.")}else
	if(a==8){message.reply("A failure does not make anyone a victim, and certainly you should not feel like one after your first failure. However, if you do not get up after a fall and give it another try, then you will be a real victim.")}else
	if(a==9){message.reply("The two common characteristics of people who repeatedly fail are hardly ever listening and never learning from past failures.")}else
	if(a==10){message.reply("People will find transformation and transcendence in a McDonald's hash brown if it's all they've got.")}else
	if(a==11){message.reply("Why do people say 'grow some balls'? Balls are weak and sensitive. If you wanna be tough, grow a vagina. Those things can take a pounding.")}else
	if(a==12){message.reply("Tragedy is when I cut my finger. Comedy is when you fall into an open sewer and die.")}else
	if(a==13){message.reply("Why do people say 'grow some balls'? Balls are weak and sensitive. If you wanna be tough, grow a vagina. Those things can take a pounding.")}else
	if(a==14){message.reply("I have noticed that the people who are late are often so much jollier than the people who have to wait for them.")}else
	if(a==15){message.reply("No one believes a liar. Even when they're telling the truth.")}else
	if(a==16){message.reply("If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?")}else
	if(a==17){message.reply("It's hard to enjoy practical jokes when your whole life feels like one.")}else
	if(a==18){message.reply("If money is your only measure of success, do not be surprised when it is all you have.")}else
	if(a==19){message.reply("No amount of regretting can change the past, and no amount of worrying can change the future.")}else
	if(a==20){message.reply("It is not because of setbacks that most entrepreneurs do not reach the finishing line, but because of a lack of willpower and motivation.")}else
	if(a==21){message.reply("Intelligence is more important than strength, that is why earth is ruled by men and not by animals.")}else
	if(a==22){message.reply("Fear is found in the unknown. The more you learn, the less fear you will have. Never stop learning.")}else
	if(a==23){message.reply("If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.")}

}
//function obamafacts() {
	if(message.content === `${prefix}obamafact`){
	message.delete();
		if(z==1){message.reply("Obama is a member of the Democratic Party.")}else
		if(z==2){message.reply("Obama represented Illinois in the U.S. Senate (2005–08). He was the third African American to be elected to that body since the end of Reconstruction (1877).")}else
		if(z==3){message.reply("Obama attended Occidental College in suburban Los Angeles for two years before transferring to Columbia University in New York City, where in 1983 he received a bachelor's degree in political science. He later attended Harvard University's law school, graduating magna cum laude in 1991.")}else
		if(z==4){message.reply("Obama spent his first few years in Hawaii before moving to Jakarta to live with his half sister, his mother, and his stepfather. After spending several years in Jakarta, Obama returned to Hawaii in 1971, and he remained there through his graduation in 1979 from Punahou School, an elite college preparatory academy in Honolulu.")}else
		if(z==5){message.reply("Obama's father, Barack Obama, Sr., was a teenage goatherd in rural Kenya; he won a scholarship to study in the United States and eventually became a senior economist in the Kenyan government. Obama's mother, S. Ann Dunham, grew up in Kansas, Texas, and Washington state before her family settled in Honolulu. In 1960 she and Barack Sr. met in a Russian language class at the University of Hawaii, and the couple married less than a year later.")}else
		if(z==6){message.reply("Obama met Chicago native Michelle Robinson while he was working as a summer associate in 1989 at the Chicago law firm of Sidley Austin. At the time, Robinson was a young lawyer at the firm.")}else
		if(z==7){message.reply("In 2009 Obama received the Nobel Peace Prize 'for his extraordinary efforts to strengthen international diplomacy and cooperation between peoples.' In detailing its reasons for selecting Obama as the recipient of that year's award, the Norwegian Nobel Committee also emphasized Obama's support for nuclear disarmament. The award came after Obama had taken a number of steps that indicated a significant shift in tone from the administration of his predecessor, George W. Bush: Obama signed an executive order that banned excessive interrogation techniques; ordered the closing of the controversial military detention facility in Guantánamo Bay, Cuba, within a year (a deadline that was not met); proposed a 'fresh start' to strained relations with Russia; and traveled to Cairo in June 2009 to deliver a historic speech in which he reached out to the Muslim world.")}else
		if(z==8){message.reply("Obama won the Grammy Award for best spoken word album in both 2005 and 2007 for his narration of the audio versions of his books 'Dreams from My Father' and 'The Audacity of Hope: Thoughts on Reclaiming the American Dream,' respectively.")}else
		if(z==9){message.reply("Obama took the oath of office as president on January 20, 2009, and he was reelected to a second term on November 6, 2012.")}else
		if(z==10){message.reply("Obama majored in political science at Columbia University in New York City, where in 1983 he received a bachelor's degree.")}else
		if(z==11){message.reply("Obama announced on February 10, 2007, that he would seek the Democratic Party's presidential nomination in 2008. He delivered the announcement at the Old State Capitol in Springfield, Illinois, where Abraham Lincoln had served as a state legislator.")}else
		if(z==12){message.reply("Obama was elected to the Illinois Senate in 1996; he resigned shortly after winning the presidential election in 2008.")}else
		if(z==13){message.reply("Obama Never drinks coffee.")}else
		if(z==14){message.reply("Obama is capable of bench pressing up to 200 lbs.")}
	}
//}
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
if(message.content === `${prefix}speech`){
message.delete();
if(x==1){message.channel.send("Trade can bring new wealth and opportunities, but also huge disruptions and changing communities. It s a belief that pulsed in the cradle of civilization, and that still beats in the heart of billions. They know we can do better. Wright deliver a sermon called 'The Audacity of Hope.' And during the course of that sermon, he introduced me to someone named Jesus Christ. Politicians routinely exploited fears of crime for their own electoral ends. It requires all Americans to realize that your dreams do not have to come at the expense of my dreams; that investing in the health, welfare, and education of black and brown and white children will ultimately help all of America prosper. Meanwhile, the struggle for women s equality continues in many aspects of American life, and in countries around the world. On economic development, we will create a new corps of business volunteers to partner with counterparts in Muslim-majority countries. Thank you. And may God s peace be upon you.")}else
if(x==2){message.channel.send("In that time, I've had the chance to talk with Americans all across this country. And it's a lesson we need to remember today - as members of another Joshua generation. I chose to run for the presidency at this moment in history because I believe deeply that we cannot solve the challenges of our time unless we solve them together - unless we perfect our union by understanding that we may have different stories, but we hold common hopes; that we may not look the same and we may not have come from the same place, but we all want to move in the same direction - towards a better future for of children and our grandchildren. We are more compassionate than a government that lets veterans sleep on our streets and families slide into poverty; that sits on its hands while a major American city drowns before our eyes. She's the one who taught me about hard work. Words alone cannot meet the needs of our people. That we can tuck in our children at night and know that they are fed and clothed and safe from harm. If you're working forty hours a week, you shouldn't be living in poverty. And it is my first duty as President to protect the American people. But let us be clear: al Qaeda killed nearly 3,000 people on that day.Thank you.")}else
if(x==3){message.channel.send("Hall in East Moline, Ill.. And as a consequence, so did I. That's why organizations are rising up across the country to reclaim the language of faith to bring about change. Instead, they expressed a profoundly distorted view of this country - a view that sees white racism as endemic, and that elevates what is wrong with America above all that we know is right with America; a view that sees the conflicts in the Middle East as rooted primarily in the actions of stalwart allies like Israel, instead of emanating from the perverse and hateful ideologies of radical Islam. He simply says to everyone in the room, 'I am here because of Ashley.' I'll invest in early childhood education. The hope of a skinny kid with a funny name who believes that America has a place for him, too. And it's a testament to what we can achieve when good people with strong convictions stand up for their beliefs. And Ashley said that when she was nine years old, her mother got cancer. Washington's been talking about our oil addiction for the last thirty years, and John McCain has been there for twenty-six of them. More recently, tension has been fed by colonialism that denied rights and opportunities to many Muslims, and a Cold War in which Muslim-majority countries were too often treated as proxies without regard to their own aspirations. Thank you, God Bless you, and God Bless the United States of America.")}else
if(x==4){message.channel.send("That we can say what we think, write what we think, without hearing a sudden knock on the door. There is not a Black America and a White America and Latino America and Asian America - there's the United States of America. And we should close Guantanamo Bay and stop tolerating the torture of our enemies. But the record's clear: John McCain has voted with George Bush ninety percent of the time. Out of work? Tough luck. The fundamentals we use to measure economic strength are whether we are living up to that fundamental promise that has made this country great - a promise that is the only reason I am standing here tonight. The UCC is still listening. And Ashley said that when she was nine years old, her mother got cancer. Because it feeds into the cynicism we all have about government. But all of us must recognize that education and innovation will be the currency of the 21st century, and in too many Muslim communities there remains underinvestment in these areas. The question is whether we spend that time focused on what pushes us apart, or whether we commit ourselves to an effort - a sustained effort - to find common ground, to focus on the future we seek for our children, and to respect the dignity of all human beings. Thank you.")}else
if(x==5){message.channel.send("Wright deliver a sermon called 'The Audacity of Hope.' And during the course of that sermon, he introduced me to someone named Jesus Christ. If John McCain wants to follow George Bush with more tough talk and bad strategy, that is his choice - but it is not the change we need. So America will defend itself respectful of the sovereignty of nations and the rule of law. But we have a responsibility to join together on behalf of the world we seek - a world where extremists no longer threaten our people, and American troops have come home; a world where Israelis and Palestinians are each secure in a state of their own, and nuclear energy is used for peaceful purposes; a world where governments serve their citizens, and the rights of all God's children are respected. I know there are many - Muslim and non-Muslim - who question whether we can forge this new beginning. But if we choose to be bound by the past, we will never move forward.")}else
if(x==6){message.channel.send("It wasn't until after college, when I went to Chicago to work as a community organizer for a group of Christian churches, that I confronted my own spiritual dilemma. It's a promise that says each of us has the freedom to make of our own lives what we will, but that we also have the obligation to treat each other with dignity and respect. For human history has often been a record of nations and tribes subjugating one another to serve their own interests. Rather than remain trapped in the past, I have made it clear to Iran's leaders and people that my country is prepared to move forward.")}else
if(x==7){message.channel.send("We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more. The truth is, on issue after issue that would make a difference in your lives - on health care and education and the economy - Senator McCain has been anything but independent.")}else
if(x==8){message.channel.send("E pluribus unum. This time we want to talk about the fact that the real problem is not that someone who doesn't look like you might take your job; it's that the corporation you work for will ship it overseas for nothing more than a profit. America, we are better than these last eight years. What is that promise? Some are eager to stoke the flames of division, and to stand in the way of progress.")}else
if(x==9){message.channel.send("When we send our young men and women into harm's way, we have a solemn obligation not to fudge the numbers or shade the truth about why they're going, to care for their families while they're gone, to tend to the soldiers upon their return, and to never ever go to war without enough troops to win the war, secure the peace, and earn the respect of the world. A nation of whiners? Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. I'll invest in early childhood education. But what I will not do is suggest that the Senator takes his positions for political purposes. For eighteen long months, you have stood up, one by one, and said enough to the politics of the past.")}else
if(x==10){message.channel.send("At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. Nor is it beyond the sea. That's why I stand here tonight. America, we cannot turn back. The United States has been one of the greatest sources of progress that the world has ever known.")}else
if(x==11){message.channel.send("I've seen it in Washington, when we worked across party lines to open up government and hold lobbyists more accountable, to give better care for our veterans and keep nuclear weapons out of terrorist hands. But let us be clear: al Qaeda killed nearly 3,000 people on that day. But it was not violence that won full and equal rights.")}else
if(x==12){message.channel.send("It's a promise that says the market should reward drive and innovation and generate growth, but that businesses should live up to their responsibilities to create American jobs, look out for American workers, and play by the rules of the road. Don't tell me that Democrats won't keep us safe.")}else
if(x==13){message.channel.send("You know, a while back, I met a young man named Shamus [Seamus?] in a V.F.W. Now, some of you may have heard me talk about the Joshua generation. We will, however, relentlessly confront violent extremists who pose a grave threat to our security. Now is the time for Palestinians to focus on what they can build. This is important because no development strategy can be based only upon what comes out of the ground, nor can it be sustained while young people are out of work.")}else
if(x==14){message.channel.send("And that it's not enough to just believe this - we have to do our part to make it a reality. In the white community, the path to a more perfect union means acknowledging that what ails the African-American community does not just exist in the minds of black people; that the legacy of discrimination - and current incidents of discrimination, while less overt than in the past - are real and must be addressed. He does not say education or the war.")}else
if(x==15){message.channel.send("They held vigils across this country when four little girls were killed in the 16th Street Baptist Church. We can affirm our faith without endangering the separation of church and state, as long as we understand that when we're in the public square, we have to speak in universal terms that everyone can understand. It is easy to point fingers - for Palestinians to point to the displacement brought by Israel's founding, and for Israelis to point to the constant hostility and attacks throughout its history from within its borders as well as beyond. God bless you.")}else
if(x==16){message.channel.send("And so they need an assurance that somebody out there cares about them, is listening to them - that they are not just destined to travel down that long road toward nothingness. And as a consequence, so did I. And when these battles were overtaken by others and when the wars they opposed were waged and won, these faithful foot soldiers for justice kept marching. So let me spell out exactly what that change would mean if I am President. Without these ingredients, elections alone do not make true democracy.")}else
if(x==17){message.channel.send("The day after Pearl Harbor my grandfather signed up for duty; joined Patton's army, marched across Europe. It's the hope of slaves sitting around a fire singing freedom songs. I would not be running for President if I didn't believe with all my heart that this is what the vast majority of Americans want for this country. It is not enough to give health care to the sick, or jobs to the jobless, or education to our children. Out of work? Tough luck. Indeed, it suggests the opposite: we must face these tensions squarely.")}else
if(x==18){message.channel.send("John Edwards calls on us to hope. At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. You don't protect Israel and deter Iran just by talking tough in Washington.")}else
if(x==19){message.channel.send("And it puts the lie to the notion that the separation of church and state in America means faith should have no role in public life. But if we see this conflict only from one side or the other, then we will be blind to the truth: the only resolution is for the aspirations of both sides to be met through two states, where Israelis and Palestinians each live in peace and security.")}else
if(x==20){message.channel.send("Because one of the things that we have to change in our politics is the idea that people cannot disagree without challenging each other's character and patriotism. Instead, it is that American spirit - that American promise - that pushes us forward even when the path is uncertain; that binds us together in spite of our differences; that makes us fix our eye not on what is seen, but what is unseen, that better place around the bend. Iraq's sovereignty is its own.")}else
if(x==21){message.channel.send("And I've found that no matter where I am, or who I'm talking to, there's a common theme that emerges. Many bring up a specific issue. Now is the time to finally keep the promise of affordable, accessible health care for every single American. But let us be clear: al Qaeda killed nearly 3,000 people on that day. The Arab-Israeli conflict should no longer be used to distract the people of Arab nations from other problems.")}else
if(x==22){message.channel.send("I'm talking about something more substantial. I've seen it in the workers who would rather cut their hours back a day than see their friends lose their jobs, in the soldiers who re-enlist after losing a limb, in the good neighbors who take a stranger in when a hurricane strikes and the floodwaters rise. It was Islam - at places like Al-Azhar University - that carried the light of learning through so many centuries, paving the way for Europe's Renaissance and Enlightenment. They have affiliates in many countries and are trying to expand their reach. We are taking concrete actions to change course. And we will also expand partnerships with Muslim communities to promote child and maternal health.")}else
if(x==23){message.channel.send("But it is a story that has seared into my genetic makeup the idea that this nation is more than the sum of its parts - that out of many, we are truly one. We can tackle race only as spectacle - as we did in the OJ trial - or in the wake of tragedy, as we did in the aftermath of Katrina - or as fodder for the nightly news. And it is on their behalf that I intend to win this election and keep our promise alive as President of the United States. The United States does not accept the legitimacy of continued Israeli settlements.")}else
if(x==24){message.channel.send("If there is a child on the south side of Chicago who can't read, that matters to me, even if it's not my child. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. Religious leaders like my friends Rev. Jim Wallis and Rabbi David Saperstein and Nathan Diament are working for justice and fighting for change. We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more. But the failure to respond is a direct result of a broken politics in Washington and the failed policies of George W. Bush. Countries like Japan and South Korea grew their economies while maintaining distinct cultures.")}
}
/*
function warning() {
if(anger == 0){
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
	} else {angry()}
	}
	function angry() {
	if(anger == 1){
	if(w==1){message.channel.send("d")}else
	if(w==2){message.channel.send("d")}else
	if(w==3){message.channel.send("d")}else
	if(w==4){message.channel.send("d")}else
	if(w==5){message.channel.send("s")}else
	if(w==6){message.channel.send("h")}else
	if(w==7){message.channel.send("k")}else
	if(w==8){message.channel.send("k")}else
	if(w==9){message.channel.send("k")}else
	if(w==10){message.channel.send("k")}else
	if(w==11){message.channel.send("k")}else
	if(w==12){message.channel.send("k")}else
	if(w==13){message.channel.send("k")}else
	if(w==14){message.channel.send("k")}
	anger = 2;
	}else if(anger==2){rage}
	}
	function rage() {
	if(anger == 2){
	if(w==1){message.channel.send("")}else
	if(w==2){message.channel.send("")}else
	if(w==3){message.channel.send("")}else
	if(w==4){message.channel.send("")}else
	if(w==5){message.channel.send("")}else
	if(w==6){message.channel.send("")}else
	if(w==7){message.channel.send("")}else
	if(w==8){message.channel.send("")}else
	if(w==9){message.channel.send("")}else
	if(w==10){message.channel.send("")}else
	if(w==11){message.channel.send("")}else
	if(w==12){message.channel.send("")}else
	if(w==13){message.channel.send("")}else
	if(w==14){message.channel.send("")}
	anger = 3;
	}
	}
	function blindrage() {
	if(anger == 3){

	anger = 0;
	} else{warning()}
	}*/


var pizzaStage = 0;
var pizzaCode;
var pizzaChoice1 = "undefined";
var pizzaChoice2 = "undefined";
var pizzaChoice3 = "undefined";
var pizzaChoice4 = "undefined";
var codeChoice1=0;
var codeChoice2=0;
var codeChoice3=0;
var codeChoice4=0;
var finalstats = {health:`${health}`, damage:`${damage}`, speed:`${speed}`};
var health = 4;// -= damage
var damage = 2;// -= health
var speed = 1;// determines who attacks first
var cloned = false;
function reset() {cloned = false; pizzaStage = 0; pizzaChoice1 = "undefined"; pizzaChoice2 = "undefined"; pizzaChoice3 = "undefined"; pizzaChoice4 = "undefined"; pizzaCode = "undefined"; codeChoice1 = 0; codeChoice2 = 0; codeChoice3 = 0; codeChoice4 = 0; speed = 1; damage = 2; defense = 2; health = 4; finalstats = {health:`${health}`, damage:`${damage}`, speed:`${speed}`}}
function statReset() {speed = 1; damage = 2; defense = 2; health = 4}
// ....................................










if (message.content === "!recipe"){
	if(y==1){message.channel.send("How to make omelets! 1. Place the pieces of paper along the side of the omelette and roll them out as much as they will go and put them into the top drawer of your box with a rolled-up paper towel wrapped around them. 2. Take the paper towels and fold them over to form the lid of your box. 2. Place the omelettes, rolled out and glued together along the sides of the box. 2. Gently tilt the box so that the omelettes are up and down each side. 2. Put the omelettes on the lid of the box and turn them to seal. 2. You have a custom designed and cut omelette that you can put on any box you want!! 2. You can also customize these to match your box! 2. Make sure to give the paper towels to your librarians office to keep them from getting wet or wet out. Enjoy!")}else
	if(y==2){message.channel.send("How to make triple chocolate brownies: Step 1. Combine the flour, sugar, baking soda, salt and eggs in a bowl. Add the milk, milk mixture and cornstarch mixture and whisk until the dough pulls away from the sides of the bowl. Try to hold it by the sides with your hands. Do not force it. Step 2. Using your hands, form the dough into discs, about 3 mm thick. Wrap each disc around your hands and pinch them together to form into chocolate cookie cutter. Bake at 350 degrees for 35-40 minutes. Bake as directed. Step 3. Once the cookie cutter turns golden brown and has set on top of the cupcake, put into the refrigerator for 10 minutes, then remove from the refrigerator. After the second cookie cutter has set on top of the cupcake, use a fork to remove the chocolate brownie from the refrigerator to clean and cool completely. Step 4. Once cool, frost the chocolate brownies and enjoy! Tips and notes: I would not recommend this as an all-purpose recipe. You can replace the egg whites with your favorite egg whites, but Id be interested in hearing feedback on that.")}else
	if(y==3){message.channel.send("How to make the quadruple chocolate brownie cake: Step 1: Whisk the flour, baking powder, salt, cocoa powder and milk together in a medium-sized bowl. Stir in the egg whites and mix until smooth and smooth. Add the milk and mix until incorporated. Add the dry ingredients and mix until incorporated. Turn it into the wet ingredients and add about half the flour mixture until all the dry ingredients are incorporated. Step 2: Use a large spatula to fold the dough into the batter. Using a 1 1/2 cup spoon, pour the batter into the cupcake tin. Bake for about 25 minutes. Note: If the batter is so wet that it falls apart, add a generous amount of water to make sure it doesnt burn. Step 3: Use a knife to top each cupcake with some chocolate filling. Allow them to cool completely. Serve warm.")}else 
	if(y==4){message.channel.send("How to make Banana Bread Step 1. Combine banana slices with bread yeast. Step 2. Combine water and salt in blender. Step 3. Process until blended and smooth. Pour into a 1/2 cup loaf pan and bake for 15 minutes. Let stand, about 30 minutes. Step 4. Drain and place inside a saucepan with ice, cover. Step 5. Place ice in refrigerator and allow to thaw, about 5 minutes.  Step 6. Cover and chill in an air-tight container up to 2 months. Step 7. Cool and transfer to an air-tight container.  Step 8. When ready to use, take out 2 tablespoons of mixture and add the remaining remaining 3 tablespoons.  Serve with sweet bread crumbs and enjoy!")}else
	if(y==5){message.channel.send("How to make Pizza. Step 1. Take a pizza dough and cut the dough into 1 inch squares. Step 2. Add 2 tsp of olive oil and fry the 1 inch squares in 2 Tbsp of olive oil for 10 minutes. Step 3. Remove from the pan and set aside. Step 4. With a spatula, spread the olive oil over the 1 inch pieces of dough. Step 5. Cut the 1 inch pieces into 1/2 inch long slices, place them on a plate, cover them with paper and let them rest for 20 minutes. Step 6. Take the slices and divide the dough into 6 equal portions. Now take the 6 slices and lay them into the 2 medium size pizza baking dishes, place them in the preheated oven at 40C/180F. Step 7. With a spatula, squeeze the dough together and make an indentation in the middle and press it down with your thumb, making sure that there is no air bubbles. Step 8. Remove the 2 layers of pizza dishes from the oven, place them on a paper towel and leave for about 10 minutes. Step 9. Take a piece of baking paper and smooth the edges of the pizza dishes by using your hands. Step 10. Take the dough and place it in a piping bag with a little bit of tomato paste. Step 11. Pipe a few layers of 1 inch strips of pizza in a little bit of pepperoni filling in the crust.")}else
	if(y==6){message.channel.send("How to make mozzarella cheese. Creamy mozzarella cheese is a common part of everyday diet. However, if you are not accustomed to adding creaminess to your mozzarella, you will be surprised by the flavor you get when you make this cheese. It is not really cream cheese but something much more creamy than traditional mozzarella cheese. Sieve the mozzarella cheese in a bowl and sprinkle it with the sugar. Beat the sugar and pinchiness together till it becomes a paste. Add the garlic and mix well till it forms breadlike paste. Add the mozzarella cheese and mix well till it becomes a dough. Mix flour, olive oil and salt to make a dough that resembles a crumbly. Cover the makedissle with plastic wrap and let it rise in fridge for a few hours. Remove the dough from the heat. Wash up the dough in clean water and pat dry, let it sit for 10 minutes to soften it and then press it in the pan or your baking sheet. Add the mozzarella and let it sit for 30 minutes and then mix it. Bake at 375 Celsius 150F for 1 hour. When it is finished, flip over and you can enjoy your homemade")}else
	if(y==7){message.channel.send("1. Peel the bananas 2. Add enough warm peanut sauce for you sauce to dissolve in the milk 2. Mix peanut jelly powder on all sides in your kitchen sink until it all dissolves but it does not go down with hot!   So this should be your warm version too, if they come, keep adding at first B  If possible take it away from boiling in boiling water then refrigerate them and make batter 2. Cut pieces you use into thin stripes, for more color for later when to eat and you know   that to go through all your fresh buns! or maybe use 1 more thin strip of the peanut mix so   to cut a little hole, if it was too hard  please keep some hot and pour into your bowl at first but to take it away the more it cut by this small pie like hole for later To use make banana jam using all fresh jambon !!!!!!!! 2. Fill out a square of peanut dough as it are, with all raw peanut sauce you want from your baking ingredients and set on top Using the leftover jambon as small pie hole you are all good but you will get so cute!! it comes together so pretty when used properly like this !! :D but please not use for dessert, for something so cute, not for buns!!! use a few little slices as for bun but more should have used for more! 2. Use 1 piece the rest into your baking bong!!! , please only to keep the amount in for another ime 2. Cut some small hole from left of edge of peanut dough with butter , this ike very tiny too so use very good scissors! 2. Pour  peanut and mix over to each one side which ones of my 2 holes will go the the other !   You ite are getting to this now or ick you need these holes for ime too much  ive thought ive always needed the hole right at this ids edge i got the perfect place where my pie would fit, but now i wont be in such big hurry to bake more for so much as to cut so the hole could grow as its growing i just want you to notice i just put one inch above edge of my pit!! and no other pieces on them in this isnt the hole its a perfect  perfect to have!   Now I can put a lot as for to this because we have already")}
}









	var x = Math.floor(Math.random() * 51)+1;
	if (message.content.includes("bread")) {
	if(x == 1) {message.reply(`Toast`)}
	if(x == 2) {message.reply(`Sourdough`)}
	if(x == 3) {message.reply(`Brioche`)}
	if(x == 4) {message.reply(`Banana Bread`)}
	if(x == 5) {message.reply(`Baguette`)}
	if(x == 6) {message.reply(`Rye Bread`)}
	if(x == 7) {message.reply(`Small Bread`)}
	if(x == 8) {message.reply(`White Bread`)}
	if(x == 9) {message.reply(`Pita Bread`)}
	if(x == 10) {message.reply(`Naan Bread`)}
	if(x == 11) {message.reply(`Ciabatta`)}
	if(x == 12) {message.reply(`Buns`)}
	if(x == 13) {message.reply(`Brown Bread`)}
	if(x == 14) {message.reply(`Whole Wheat`)}
	if(x == 15) {message.reply(`Focaccia`)}
	if(x == 16) {message.reply(`Biscuit`)}
	if(x == 17) {message.reply(`Bagel`)}
	if(x == 18) {message.reply(`Cornbread`)}
	if(x == 19) {message.reply(`Lavash`)}
	if(x == 20) {message.reply(`Tortilla`)}
	if(x == 21) {message.reply(`Pretzel`)}
	if(x == 22) {message.reply(`Flatbread`)}
	if(x == 23) {message.reply(`Challah`)}
	if(x == 24) {message.reply(`Crouton`)}
	if(x == 25) {message.reply(`Portugese Sweet Bread`)}
	if(x == 26) {message.reply(`English Muffin`)}
	if(x == 27) {message.reply(`Pumpernickel`)}
	if(x == 28) {message.reply(`Gluten Free`)}
	if(x == 29) {message.reply(`Llonguet`)}
	if(x == 30) {message.reply(`Scone`)}
	if(x == 31) {message.reply(`Chapati`)}
	if(x == 32) {message.reply(`Texas Toast`)}
	if(x == 33) {message.reply(`Parotha`)}
	if(x == 34) {message.reply(`Melonpan`)}
	if(x == 35) {message.reply(`Bannock`)}
	if(x == 36) {message.reply(`Matzo`)}
	if(x == 37) {message.reply(`Matzo`)}
	if(x == 38) {message.reply(`Breadstick`)}
	if(x == 39) {message.reply(`Crispbread`)}
	if(x == 40) {message.reply(`Pandesal`)}
	if(x == 41) {message.reply(`Boule`)}
	if(x == 42) {message.reply(`Anpan`)}
	if(x == 43) {message.reply(`Tiger Bread`)}
	if(x == 44) {message.reply(`Mantou`)}
	if(x == 45) {message.reply(`Fougasse`)}
	if(x == 46) {message.reply(`Kifli`)}
	if(x == 47) {message.reply(`Panettone`)}
	if(x == 48) {message.reply(`Barbari Bread`)}
	if(x == 49) {message.reply(`Multigrain bread`)}
	if(x == 50) {message.reply(`Teacake`)}
	if(x == 51) {message.reply(`Bazlama`)}
	}












if(message.content.includes("cheese") || message.content.includes("Cheese")){
cheesed = Math.floor(Math.random() * 105) + 1;
if(cheesed==1){message.channel.send("Gouda")}else
if(cheesed==2){message.channel.send("American Cheese")}else
if(cheesed==3){message.channel.send("Pecorino Romano")}else
if(cheesed==4){message.channel.send("Cheddar")}else
if(cheesed==5){message.channel.send("Manchengo")}else
if(cheesed==6){message.channel.send("Smoked Gouda")}else
if(cheesed==7){message.channel.send("Camembert")}else
if(cheesed==8){message.channel.send("Provolone")}else
if(cheesed==9){message.channel.send("Babybel")}else
if(cheesed==10){message.channel.send("Parmesan")}else
if(cheesed==11){message.channel.send("Mascarpone")}else
if(cheesed==12){message.channel.send("Mozzarella")}else
if(cheesed==13){message.channel.send("Asiago")}else
if(cheesed==14){message.channel.send("Feta")}else
if(cheesed==15){message.channel.send("Le Gruyere AOP")}else
if(cheesed==16){message.channel.send("Gorgonzola")}else
if(cheesed==17){message.channel.send("Montery Jack")}else
if(cheesed==18){message.channel.send("Stilton")}else
if(cheesed==19){message.channel.send("Abbaye de Belloc")}else
if(cheesed==20){message.channel.send("Taleggio")}else
if(cheesed==21){message.channel.send("Grana Padano")}else
if(cheesed==22){message.channel.send("Swiss")}else
if(cheesed==23){message.channel.send("Boursin")}else
if(cheesed==24){message.channel.send("Cotija")}else
if(cheesed==25){message.channel.send("Fontina Val d'Aosta")}else
if(cheesed==26){message.channel.send("Roquefort")}else
if(cheesed==27){message.channel.send("Blue Vein Cheese")}else
if(cheesed==28){message.channel.send("Emmental")}else
if(cheesed==29){message.channel.send("Grana")}else
if(cheesed==30){message.channel.send("Jarlsberg")}else
if(cheesed==31){message.channel.send("Mozzarella di Bufala")}else
if(cheesed==32){message.channel.send("Pepper Jack")}else
if(cheesed==33){message.channel.send("Munster")}else
if(cheesed==34){message.channel.send("Bocconcini")}else
if(cheesed==35){message.channel.send("Fromage Frais")}else
if(cheesed==36){message.channel.send("Ricotta Salata")}else
if(cheesed==37){message.channel.send("Cream Havarti")}else
if(cheesed==38){message.channel.send("Scamorza")}else
if(cheesed==39){message.channel.send("Fromage a Raclette")}else
if(cheesed==40){message.channel.send("Chevre")}else
if(cheesed==41){message.channel.send("Pecorino")}else
if(cheesed==42){message.channel.send("Burrata")}else
if(cheesed==43){message.channel.send("Halloumi")}else
if(cheesed==44){message.channel.send("Aged Gouda")}else
if(cheesed==45){message.channel.send("Fresh Mozzarella")}else
if(cheesed==46){message.channel.send("Colby")}else
if(cheesed==47){message.channel.send("Limburger")}else
if(cheesed==48){message.channel.send("Paneer")}else
if(cheesed==49){message.channel.send("Queso Blanco")}else
if(cheesed==50){message.channel.send("Port-Salut")}else
if(cheesed==51){message.channel.send("Adelost")}else
if(cheesed==52){message.channel.send("Abondance")}else
if(cheesed==53){message.channel.send("Butterkase")}else
if(cheesed==54){message.channel.send("Brillat-Savarin")}else
if(cheesed==55){message.channel.send("Comte")}else
if(cheesed==56){message.channel.send("Camembert de Normandie")}else
if(cheesed==57){message.channel.send("Reblochon")}else
if(cheesed==58){message.channel.send("Longhorn")}else
if(cheesed==59){message.channel.send("Oaxaca")}else
if(cheesed==60){message.channel.send("Airag")}else
if(cheesed==61){message.channel.send("Abbaye du Mont des Cats")}else
if(cheesed==62){message.channel.send("Saint Agur")}else
if(cheesed==63){message.channel.send("Cottage Cheese")}else
if(cheesed==64){message.channel.send("Panela")}else
if(cheesed==65){message.channel.send("Acapella")}else
if(cheesed==66){message.channel.send("Red Leicester")}else
if(cheesed==67){message.channel.send("Abbaye de Citeaux")}else
if(cheesed==68){message.channel.send("Colby-Jack")}else
if(cheesed==69){message.channel.send("Caciocavallo")}else
if(cheesed==70){message.channel.send("Crottin de Chavignol")}else
if(cheesed==71){message.channel.send("Cream Cheese")}else
if(cheesed==72){message.channel.send("Zanetti Parmigiano Reggiano")}else
if(cheesed==73){message.channel.send("Juustoleipa")}else
if(cheesed==74){message.channel.send("Baby Swiss")}else
if(cheesed==75){message.channel.send("Le Roule")}else
if(cheesed==76){message.channel.send("Brie de Meaux")}else
if(cheesed==77){message.channel.send("Berkswell")}else
if(cheesed==78){message.channel.send("Fresh Ricotta")}else
if(cheesed==79){message.channel.send("maasdam")}else
if(cheesed==80){message.channel.send("Canadian Cheddar")}else
if(cheesed==81){message.channel.send("Ambert")}else
if(cheesed==82){message.channel.send("Tommes")}else
if(cheesed==83){message.channel.send("Cantal")}else
if(cheesed==84){message.channel.send("Menonita")}else
if(cheesed==85){message.channel.send("Crescenza")}else
if(cheesed==86){message.channel.send("Queso Iberico")}else
if(cheesed==87){message.channel.send("Crema Mexicana")}else
if(cheesed==88){message.channel.send("Sage Derby")}else
if(cheesed==89){message.channel.send("Geitost")}else
if(cheesed==90){message.channel.send("Brick")}else
if(cheesed==91){message.channel.send("Kasseri")}else
if(cheesed==92){message.channel.send("Bel Paese")}else
if(cheesed==93){message.channel.send("Affidelice au Chablis")}else
if(cheesed==94){message.channel.send("Pave d'Affinois")}else
if(cheesed==95){message.channel.send("Muenster")}else
if(cheesed==96){message.channel.send("Wensleydale")}else
if(cheesed==97){message.channel.send("Romano")}else
if(cheesed==98){message.channel.send("Fresh Truffles")}else
if(cheesed==99){message.channel.send("Double Gloucester")}else
if(cheesed==100){message.channel.send("Juustoleipa")}
}
























if(message.content.includes(`${prefix}pizza`)){makePizza()}
if(message.content.includes(`${prefix}reset`)){reset()}
if(message.content.includes(`${prefix}code`)){codeRedeem()}
function clone(){
	message.channel.clone()
}

function stage0() {
message.channel.send(`Choose your Sauce (!pizza (number) )`)
message.channel.send(`(1) Classic Marinara (+1 health)`)
message.channel.send(`(2) Chocolate (+1 speed)`)
message.channel.send(`(3) None (+1 damage)`)
pizzaStage = 1;
}

function stage1() {
if(message.content.includes("1")){pizzaChoice1 = ('Classic Marinara'); message.channel.send(`You chose ${pizzaChoice1}`); health+=1; codeChoice1 = 1; pizzaStage = 2} else
if(message.content.includes(`2`)){pizzaChoice1 = ('Chocolate'); message.channel.send(`You chose ${pizzaChoice1}`); damage+=1; codeChoice1 = 2; pizzaStage = 2} else
if(message.content.includes(`3`)){pizzaChoice1 = ('No sauce'); message.channel.send(`You chose ${pizzaChoice1}`); speed+=1; codeChoice1 = 3; pizzaStage = 2} else {reset(); return}
message.channel.send(`Choose your Cheese (!pizza (number) )`)
message.channel.send(`(1) Classic Mozzarella (+1 health)`)
message.channel.send(`(2) Cheddar (+1 damage)`)
message.channel.send(`(3) None (+1 speed)`)
}

function stage2() {
if(message.content.includes("1")){pizzaChoice2 = ('Classic Mozzarella'); message.channel.send(`You chose ${pizzaChoice2}`); health+=1; codeChoice2 = 1; pizzaStage = 3} else
if(message.content.includes(`2`)){pizzaChoice2 = ('Cheddar'); message.channel.send(`You chose ${pizzaChoice2}`); damage+=1; codeChoice2 = 2; pizzaStage = 3} else
if(message.content.includes(`3`)){pizzaChoice2 = ('No Cheese'); message.channel.send(`You chose ${pizzaChoice2}`); speed+=1; codeChoice2 = 3; pizzaStage = 3} else {reset(); return}
pwait(5000)
message.channel.send(`Choose your Topping (!pizza (number) )`)
message.channel.send(`(1) Pepperoni (+1 damage)`)
message.channel.send(`(2) Chicken (+1 health)`)
message.channel.send(`(3) Bacon (+1 speed)`)
}

function stage3() {
if(message.content.includes("1")){pizzaChoice3 = ('Pepperoni'); message.channel.send(`You chose ${pizzaChoice3}`); damage+=1; codeChoice3 = 1; pizzaStage = 4} else
if(message.content.includes(`2`)){pizzaChoice3 = ('Chicken'); message.channel.send(`You chose ${pizzaChoice3}`); health+=1; codeChoice3 = 2; pizzaStage = 4} else
if(message.content.includes(`3`)){pizzaChoice3 = ('Bacon'); message.channel.send(`You chose ${pizzaChoice3}`); speed+=1; codeChoice3 = 3; pizzaStage = 4} else {reset(); return}
message.channel.send(`Choose your second Topping (!pizza (number) )`)
message.channel.send(`(1) Onion (+1 health)`)
message.channel.send(`(2) Olive (+1 speed)`)
message.channel.send(`(3) Mushroom (+1 damage)`)
}

function stage4() {
if(message.content.includes("1")){pizzaChoice4 = ('Onion'); message.channel.send(`You chose ${pizzaChoice4}`); health+=1; codeChoice4 = 1; pizzaStage = 5; stage5()} else
if(message.content.includes(`2`)){pizzaChoice4 = ('Olive'); message.channel.send(`You chose ${pizzaChoice4}`); speed+=1; codeChoice4 = 2; pizzaStage = 5; stage5()} else
if(message.content.includes(`3`)){pizzaChoice4 = ('Mushroom'); message.channel.send(`You chose ${pizzaChoice4}`); damage+=1; codeChoice4 = 3; pizzaStage = 5; stage5()} else {reset(); return}
}

function makePizza() {
	switch(pizzaStage) {
	case 0:
	stage0();
	pizzaStage = 1;
	break;
	case 1:
	stage1();
	break;
	case 2:
	stage2();
	break;
	case 3:
	stage3();
	break;
	case 4:
	stage4();
	break;
	case 5:
	stage5();
	break;
	default:
	message.channel.send(`Error at stage ${pizzaStage}`)
	}
}


function setChoiceToString() {
		if(codeChoice1==1){codeChoice1="Classic Marinara"} 
		if(codeChoice1==2){codeChoice1="Chocolate"} 
		if(codeChoice1==3){codeChoice1="None"}

		if(codeChoice2==1){codeChoice2="Classic Mozzarella"} 
		if(codeChoice2==2){codeChoice2="Cheddar"} 
		if(codeChoice2==3){codeChoice2="None"}

		if(codeChoice3==1){codeChoice3="Pepperoni"} 
		if(codeChoice3==2){codeChoice3="Chicken"} 
		if(codeChoice3==3){codeChoice3="Bacon"}

		if(codeChoice4==1){codeChoice4="Onion"} 
		if(codeChoice4==2){codeChoice4="Olive"} 
		if(codeChoice4==3){codeChoice4="Mushroom"}
		setStringToValue()
	}
	function setStringToValue() {
	//hsd hds dhs hsd
	statReset();
		if(codeChoice1=="Classic Marinara"){health += 1}
		if(codeChoice1=="Chocolate"){speed += 1}
		if(codeChoice1=="None"){damage += 1}

		if(codeChoice2=="Classic Mozzarella"){health += 1}
		if(codeChoice2=="Cheddar"){damage += 1}
		if(codeChoice2=="None"){speed += 1}
		
		if(codeChoice3=="Pepperoni"){damage += 1}
		if(codeChoice3=="Chicken") {health += 1}
		if(codeChoice3=="Bacon"){speed += 1}

		if(codeChoice4=="Onion"){health += 1}
		if(codeChoice4=="Olive"){speed += 1}
		if(codeChoice4=="Mushroom"){damage += 1}
	}
	function stage5(){
	if (cloned) {stageCode(); return};
	code();
	const finale = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Your finished pizza')
	.addFields(
		{ name: 'Sauce', value: `${pizzaChoice1} ` },
		{ name: 'Cheese', value: `${pizzaChoice2} ` },
		{ name: 'First topping', value: `${pizzaChoice3} ` },
		{ name: 'Second topping', value: `${pizzaChoice4} ` },
		{ name: 'Stats', value: ` Health: ${health} \n Speed: ${speed} \n Damage: ${damage}` },
		{ name: 'Pizza Code', value: `${pizzaCode}` } ,
		{ name: '\u200B', value: '\u200B' }
	)
	.setTimestamp()
	.setFooter('This took a while to make. Do it again?');

	message.channel.send(finale)
}
function stageCode(){
	setChoiceToString();
	const creet = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Your exported pizza')
	.addFields(
		{ name: 'Sauce', value: `${codeChoice1} ` },
		{ name: 'Cheese', value: `${codeChoice2} ` },
		{ name: 'First topping', value: `${codeChoice3} ` },
		{ name: 'Second topping', value: `${codeChoice4} ` },
		{ name: 'Stats', value: ` Health: ${health} \n Speed: ${speed} \n Damage: ${damage}` },
		{ name: 'Pizza Code', value: `${pizzaCode}` } ,
		{ name: '\u200B', value: '\u200B' }
	)
	.setTimestamp()
	.setFooter('This took even longer to make. Do it again?');

	message.channel.send(creet)
}


function codeRedeem() {
if(message.content.includes(`.1.`)){pizzaCode = 1} else
if(message.content.includes(`.2.`)){pizzaCode = (2)} else
if(message.content.includes(`.3.`)){pizzaCode = (3)} else
if(message.content.includes(`.4.`)){pizzaCode = (4)} else
if(message.content.includes(`.5.`)){pizzaCode = (5)} else
if(message.content.includes(`.6.`)){pizzaCode = (6)} else
if(message.content.includes(`.7.`)){pizzaCode = (7)} else
if(message.content.includes(`.8.`)){pizzaCode = (7)} else
if(message.content.includes(`.9.`)){pizzaCode = (9)} else
if(message.content.includes(`.10.`)){pizzaCode = (10)} else
if(message.content.includes(`.11.`)){pizzaCode = (11)} else
if(message.content.includes(`.12.`)){pizzaCode = (12)} else
if(message.content.includes(`.13.`)){pizzaCode = (13)} else
if(message.content.includes(`.14.`)){pizzaCode = (14)} else
if(message.content.includes(`.15.`)){pizzaCode = (15)} else
if(message.content.includes(`.16.`)){pizzaCode = (16)} else
if(message.content.includes(`.17.`)){pizzaCode = (17)} else
if(message.content.includes(`.18.`)){pizzaCode = (18)} else
if(message.content.includes(`.19.`)){pizzaCode = (19)} else
if(message.content.includes(`.20.`)){pizzaCode = (20)} else
if(message.content.includes(`.21.`)){pizzaCode = (21)} else
if(message.content.includes(`.22.`)){pizzaCode = (22)} else
if(message.content.includes(`.23.`)){pizzaCode = (23)} else
if(message.content.includes(`.24.`)){pizzaCode = (24)} else
if(message.content.includes(`.25.`)){pizzaCode = (25)} else
if(message.content.includes(`.26.`)){pizzaCode = (26)} else
if(message.content.includes(`.27.`)){pizzaCode = (27)} else
if(message.content.includes(`.28.`)){pizzaCode = (28)} else
if(message.content.includes(`.29.`)){pizzaCode = (29)} else
if(message.content.includes(`.30.`)){pizzaCode = (30)} else
if(message.content.includes(`.31.`)){pizzaCode = (31)} else
if(message.content.includes(`.32.`)){pizzaCode = (32)} else
if(message.content.includes(`.33.`)){pizzaCode = (33)} else
if(message.content.includes(`.34.`)){pizzaCode = (34)} else
if(message.content.includes(`.35.`)){pizzaCode = (35)} else
if(message.content.includes(`.36.`)){pizzaCode = (36)} else
if(message.content.includes(`.37.`)){pizzaCode = (37)} else
if(message.content.includes(`.38.`)){pizzaCode = (38)} else
if(message.content.includes(`.39.`)){pizzaCode = (39)} else
if(message.content.includes(`.40.`)){pizzaCode = (40)} else
if(message.content.includes(`.41.`)){pizzaCode = (41)} else
if(message.content.includes(`.42.`)){pizzaCode = (42)} else
if(message.content.includes(`.43.`)){pizzaCode = (43)} else
if(message.content.includes(`.44.`)){pizzaCode = (44)} else
if(message.content.includes(`.45.`)){pizzaCode = (45)} else
if(message.content.includes(`.46.`)){pizzaCode = (46)} else
if(message.content.includes(`.47.`)){pizzaCode = (47)} else
if(message.content.includes(`.48.`)){pizzaCode = (48)} else
if(message.content.includes(`.49.`)){pizzaCode = (49)} else
if(message.content.includes(`.50.`)){pizzaCode = (50)} else
if(message.content.includes(`.51.`)){pizzaCode = (51)} else
if(message.content.includes(`.52.`)){pizzaCode = (52)} else
if(message.content.includes(`.53.`)){pizzaCode = (53)} else
if(message.content.includes(`.54.`)){pizzaCode = (54)} else
if(message.content.includes(`.55.`)){pizzaCode = (55)} else
if(message.content.includes(`.56.`)){pizzaCode = (56)} else
if(message.content.includes(`.57.`)){pizzaCode = (57)} else
if(message.content.includes(`.58.`)){pizzaCode = (58)} else
if(message.content.includes(`.59.`)){pizzaCode = (59)} else
if(message.content.includes(`.60.`)){pizzaCode = (60)} else
if(message.content.includes(`.61.`)){pizzaCode = (61)} else
if(message.content.includes(`.62.`)){pizzaCode = (62)} else
if(message.content.includes(`.63.`)){pizzaCode = (63)} else
if(message.content.includes(`.64.`)){pizzaCode = (64)} else
if(message.content.includes(`.65.`)){pizzaCode = (65)} else
if(message.content.includes(`.66.`)){pizzaCode = (66)} else
if(message.content.includes(`.67.`)){pizzaCode = (67)} else
if(message.content.includes(`.68.`)){pizzaCode = (68)} else
if(message.content.includes(`.69.`)){pizzaCode = (69)} else
if(message.content.includes(`.70.`)){pizzaCode = (70)} else
if(message.content.includes(`.71.`)){pizzaCode = (71)} else
if(message.content.includes(`.72.`)){pizzaCode = (72)} else
if(message.content.includes(`.73.`)){pizzaCode = (73)} else
if(message.content.includes(`.74.`)){pizzaCode = (74)} else
if(message.content.includes(`.75.`)){pizzaCode = (75)} else
if(message.content.includes(`.76.`)){pizzaCode = (76)} else
if(message.content.includes(`.77.`)){pizzaCode = (77)} else
if(message.content.includes(`.78.`)){pizzaCode = (78)} else
if(message.content.includes(`.79.`)){pizzaCode = (79)} else
if(message.content.includes(`.80.`)){pizzaCode = (80)} else
if(message.content.includes(`.81.`)){pizzaCode = (81)} else {
message.channel.send("Please include your pizza number inbetween two periods, like this: \n .64.")
return}
codeSet()
if (!cloned) {
cloned = true;
pizzaStage = 5;
}
}

function codeSet() {
	if(pizzaCode==1){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==2){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==3){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==4){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==5){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==6){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==7){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==8){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==9){ codeChoice1 = (1); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==10){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==11){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==12){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==13){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==14){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==15){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==16){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==17){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==18){ codeChoice1 = (1); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==19){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==20){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==21){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==22){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==23){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==24){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==25){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==26){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==27){ codeChoice1 = (1); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==28){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==29){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==30){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==31){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==32){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==33){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==34){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==35){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==36){ codeChoice1 = (2); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==37){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==38){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==39){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==40){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==41){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==42){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==43){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==44){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==45){ codeChoice1 = (2); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==46){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==47){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==48){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==49){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==50){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==51){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==52){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==53){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==54){ codeChoice1 = (2); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==55){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==56){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==57){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==58){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==59){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==60){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==61){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==62){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==63){ codeChoice1 = (3); codeChoice2 = (1); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==64){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==65){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==66){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==67){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==68){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==69){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==70){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==71){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==72){ codeChoice1 = (3); codeChoice2 = (2); codeChoice3 = (3); codeChoice4 = (3);}
	if(pizzaCode==73){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (1);}
	if(pizzaCode==74){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (2);}
	if(pizzaCode==75){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (1); codeChoice4 = (3);}
	if(pizzaCode==76){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (1);}
	if(pizzaCode==77){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (2);}
	if(pizzaCode==78){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (2); codeChoice4 = (3);}
	if(pizzaCode==79){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (1);}
	if(pizzaCode==80){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (2);}
	if(pizzaCode==81){ codeChoice1 = (3); codeChoice2 = (3); codeChoice3 = (3); codeChoice4 = (3);}
	stageCode();
	}

	

function code() { 
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (1)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (2)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (3)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (4)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (5)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (6)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (7)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (8)} else
if(codeChoice1 == (1) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (9)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (10)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (11)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (12)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (13)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (14)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (15)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (16)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (17)} else
if(codeChoice1 == (1) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (18)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (19)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (20)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (21)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (22)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (23)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (24)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (25)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (26)} else
if(codeChoice1 == (1) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (27)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (28)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (29)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (30)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (31)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (32)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (33)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (34)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (35)} else
if(codeChoice1 == (2) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (36)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (37)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (38)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (39)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (40)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (41)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (42)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (43)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (44)} else
if(codeChoice1 == (2) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (45)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (46)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (47)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (48)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (49)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (50)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (51)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (52)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (53)} else
if(codeChoice1 == (2) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (54)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (55)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (56)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (57)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (58)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (59)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (60)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (61)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (62)} else
if(codeChoice1 == (3) && codeChoice2 == (1)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (63)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (64)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (65)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (66)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (67)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (68)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (69)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (70)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (71)} else
if(codeChoice1 == (3) && codeChoice2 == (2)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (72)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (1) ) {pizzaCode = (73)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (2) ) {pizzaCode = (74)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (1)  && codeChoice4 == (3) ) {pizzaCode = (75)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (1) ) {pizzaCode = (76)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (2) ) {pizzaCode = (77)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (2)  && codeChoice4 == (3) ) {pizzaCode = (78)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (1) ) {pizzaCode = (79)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (2) ) {pizzaCode = (80)} else
if(codeChoice1 == (3) && codeChoice2 == (3)  && codeChoice3 == (3)  && codeChoice4 == (3) ) {pizzaCode = (81)} else {message.channel.send("bread error")}
}
}