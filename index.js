const Discord = require("discord.js")
const client = new Discord.Client()
const { prefix, token } = require("./config.json");
const ytdl = require("ytdl-core");
const queue = new Map();
var loop = 0;
var triggered = false;
var fuckme;
var fuckme2;
var endit = 0;
var dotime = 0;
const fs = require("fs")
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
client.login(token);



//fuckme2 can replace fuckme... fuck
client.on("message", message => {
fuckme = message.content;
fuckme2 = message;
if (message.content === `${prefix}loop` && triggered == false) {onoff()}else if (triggered = true) {
var timer = 0;
timer++;
if (timer >= 1) {triggered = false; timer = 0}
}
onoff(message);
})
function onoff(message) {
    switch(loop) {
      case 0:
      if (fuckme === `${prefix}loop`) {if(triggered == true){return}loop = 1; triggered = true; fuckme2.reply(`loop is ON`); endit=1}
      break;
      case 1:
      if (fuckme === `${prefix}loop`) {if(triggered == true){return}loop = 0; triggered = true; fuckme2.reply(`loop is OFF`)}
      break;
      default: 
      }
}






client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}loop`)) {
    return;
  } else {
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}
function cancer(serverQueue) {
       if(endit==1){serverQueue.connection.dispatcher.end(); endit=0}
	
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
        //cancer(serverQueue);
        if(loop == 0){serverQueue.songs.shift()}
        play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Playing: **${song.title}**`);

}





























































