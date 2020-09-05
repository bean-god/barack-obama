const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
client.login("NzUxNjMyMTM2NzU4NjI0Mzc3.X1L5-g.0i5Iqc43JUYESs4YVSLnYd5Osx0")

/*client.on("message", msg => {
	
  })
client.on("message", msg => {
if (msg.content === "spoon") {msg.delete()
msg.reply(`spoon`)
.catch(console.error);} else {
if (msg.content.startsWith("spoon")) {msg.delete()
msg.reply(`spoon`)
.catch(console.error);}
}
}) */













































=======
﻿﻿const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
client.login("NzUwMTkzMjIxNzQ5MTc4NDk4.X0294Q.Xb8Qht7bFWcJmWL_IBaQfY0JmCI")

/*client.on("message", msg => {
	
  })
client.on("message", msg => {
if (msg.content === "spoon") {msg.delete()
msg.reply(`spoon`)
.catch(console.error);} else {
if (msg.content.startsWith("spoon")) {msg.delete()
msg.reply(`spoon`)
.catch(console.error);}
}
}) */













































>>>>>>> 10d0bd929cf7a90f3d88d5f9986aae766aa934e7
