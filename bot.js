var mc = require('minecraft-protocol');
var bot = mc.createClient({
  username: process.env.email,
  password: process.env.password,
  host: process.env.ip,
  port: process.env.port,
  version: process.env.version,
});
bot.on('error', err => console.log(err))
