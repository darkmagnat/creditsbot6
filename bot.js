const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "508240875072126997"; // ايدي السررفر
var channel = "508667278137753600";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , cazanova spam , ')
    },305);
})

client.on('guildMemberAdd', Sal => {
    var embed = new Discord.RichEmbed()
    .setTitle('Welcome')
    .setDescription('- Welcome To Universe Town - !  ')
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('general','Here.')
    if (!channel) return;
    channel.send({embed : embed});
    });

client.login(process.env.BOT_TOKEN);
