const Discord = require("discord.js")
const discord = require("discord.js")
const client = new Discord.Client()
const { prefix, token } = require("./config.json");
const config = require("./config.json");
const ytdl = require("ytdl-core");
const queue = new Map();
const queue2 = new Map();
const fs = require("fs")
const search = require('youtube-search');
const opts = {
    maxResults: 25,
    key: `AIzaSyBLWJUJJfzOGTiBCLtfCQrwyUtYT4bLrw4`,
    type: 'video'
};
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
client.login(token);
var loop = 0;
var triggered = false;
var fuckme;
var fuckme2;
var endit = 0;
var dotime = 0;
var polishtoilet = `https://www.youtube.com/watch?v=zecnwqXe850 `;
var polishcow = `https://www.youtube.com/watch?v=wLItgSOZNnk `;
var africanduck = `https://www.youtube.com/watch?v=n8ItgETgpB8 `;
var crystal = `https://www.youtube.com/watch?v=yxx3fXv1uY0 `;
var hell = `https://www.youtube.com/watch?v=1Zrq8FiKS6A `;
var hellb = `https://www.youtube.com/watch?v=zsJSdfaPpkk `;
function pwait(iMilliSeconds) {
    var counter = 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}


const ytsr = require('ytsr');


async function customSong(searchResults, choice, message) {
    songInfo = await ytdl.getInfo(searchResults.items[choice].link);
    song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url
    }
    console.log(song)
    const serverQueue = queue.get(message.guild.id);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) { return message.channel.send("You need to be in a voice channel to play music!"); }
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

//client.on("debug", debug => { console.log(debug)})
client.on("message", message => {
    var args;
    var args1;
    if (message.author.bot) { return }
    if (message.content.startsWith(`${prefix}search `)) {
        args = message.content.split(`${prefix}search `);
        args1 = args[1];
    } else { return }
    if (!args1) {return message.channel.send(`Command: \n ${prefix}search (video search)`)}
    let filter;
    ytsr.getFilters('github').then(async filters1 => {
        console.log(args1)
        const filters2 = await ytsr.getFilters(args1);
        filter2 = filters2.get('Duration').find(o => o.name.startsWith('Short'));
        filter1 = filters2.get('Type').find(o => o.name === 'Video');
        const options = {
            limit: 5,
            safeSearch: false,
            nextpageRef: filter2.ref,
        }
        const searchResults = await ytsr(null, options);
        message.channel.send(`Reply with 1 to 5 (video results)`)
        const d = new Discord.MessageEmbed()
            .setColor(`#0099ff`)
            .setTitle(`Videos`)
            .addField(`1.`, `${searchResults.items[0].title}`)
            .addField(`2.`, `${searchResults.items[1].title}`)
            .addField(`3.`, `${searchResults.items[2].title}`)
            .addField(`4.`, `${searchResults.items[3].title}`)
            .addField(`5.`, `${searchResults.items[4].title}`)
        message.channel.send(d);
        
                message.channel.awaitMessages(m => m.author.id == message.author.id,
                    { max: 1, time: 30000 }).then(collected => {
                        if (collected.first().content === '1' || collected.first().content === '2' || collected.first().content === '3' || collected.first().content === '4' || collected.first().content === '5') {

                            var choice = collected.first().content;
                            searchResults.items.unshift(collected.first().content);
                            console.log()
                            var title = searchResults.items[choice].title;
                            var link = searchResults.items[choice].link;
                            var nail = searchResults.items[choice].thumbnail;

                            const result = new Discord.MessageEmbed()
                                .setColor(`#0099ff`)
                                .setTitle(`${title}`)
                                .addField(`Link`, `${link}`)
                                .addField(`Description`, searchResults.items[choice].description)
                                .setImage(`${nail}`)
                                .addField(`Do you want to play the video?`, 'yes / no')


                            message.channel.send(result);

                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                                { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().content === 'yes') { customSong(searchResults, choice, message) } else { return };
                                
                    }).catch(error => {
                        message.reply(`The following error occured: ${error}`);
                    });


                        }

                    }).catch(error => {
                        message.reply(`The following error occured: ${error}`);
                    });

        
    }).catch(err => {
        console.error(err);
    });
})










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
    var args1 = message.content.split(`${prefix}play >`);
    args1.shift();
    console.log(args)
    console.log(args1)
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
    var songInfo;
    var song;
    switch (args1[0]) {
        case 'polishcow':
            songInfo = await ytdl.getInfo(polishcow);
            song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
            break;
        case 'polishtoilet':
            songInfo = await ytdl.getInfo(polishtoilet);
            song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
            break;
        case 'africanduck':
            songInfo = await ytdl.getInfo(africanduck);
            song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
            break;
        case 'crystal':
            songInfo = await ytdl.getInfo(crystal);
            song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
            break;
        case 'hell':
            songInfo = await ytdl.getInfo(hell);
            song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
            break
        case 'hellb':   
            songInfo = await ytdl.getInfo(hellb);
            song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
        break;
        default:
        songInfo = await ytdl.getInfo(args[1]);
        song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url
        };
    }


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















