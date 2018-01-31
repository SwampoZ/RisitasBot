const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!!");
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '!!help', type: 0}});
    console.log("Bot Ready !")
});

bot.login(process.env.TOKEN)

bot.on('message', message => {
    if (message.content === "!!ping"){
        message.reply("Pong !");
        console.log('ping pong');
    }
});

bot.on('message', message => {
    if (message.content === "pd"){
        message.reply("tg sale pd");
        console.log('pd');
    }
});

bot.on('message', message => {
    if (message.content === "Je prie le Saint Risitas"){
        message.reply("Le dieu Risitas vient a toi !");
        console.log('Risitas');
    }
});

bot.on('message', message => {
    if (message.content === "!!nazbols"){
        message.reply("gavou https://cdn.discordapp.com/attachments/403983736233918466/405461164118769685/Nazbol.jpg ");
        console.log('nazbol');
    }
});

bot.on('message', message => {
    if (message.content === "!!komunisme"){
        message.reply("https://cdn.discordapp.com/attachments/403983736233918466/405461554826575882/Communisme.png");
        console.log('komunisme');
    }
});

bot.on('message', message => {
    if (message.content === "issou"){
        message.reply("https://cdn.discordapp.com/attachments/369174214164348930/405412597618442250/issou.jpg");
        console.log('issou');
    }
});

bot.on('message', message => {
    if (message.content === "!!chancla"){
        message.reply("https://cdn.discordapp.com/attachments/369174214164348930/405413547351474176/chancla.jpg");
        console.log('lachancla');
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith(prefix + 'help')) {
                const embed = new Discord.RichEmbed()
                    .setColor('#EC48F2')
                    embed.setTitle('Commandes du bot ')
                    embed.setAuthor('Neancier',)
                    embed.addField('!!help', 'Permet de voir les commandes disponibles')
                    embed.addField('!!ping', 'Permet de recevoir un Pong')
                    embed.addField('Je prie le Saint Risitas', 'La réponse va vous surprendre OMG !')
                    embed.addField('!!nazbols', 'Son avis te surprendra !')
                    embed.addField('pd', 'sale pd')
                    embed.addField('!!komunisme', 'Sale komunist')
                    embed.addField('issou', 'Et le dieu Risitas vient a toi')
                    embed.addField('!!chancla', 'Prions la sainte-Chancla')
                    .setFooter('[Bot en construction]')
                message.reply({embed});
                console.log('help');
    }

});

bot.on('message', message => {

    if (message.content.startsWith(prefix + '8ball')) {
  var truc = ["<:8ball:404631321651052545> Je ne peux rien dire", "<:8ball:404631321651052545> Il semblerait que oui...", "<:8ball:404631321651052545> Tout porte a dire que non", "<:8ball:404631321651052545> Apparement, oui", "<:8ball:404631321651052545> Je... Ne sais pas...", "<:8ball:404631321651052545> Mes visions me disent que non"];
      var truc2 = Math.floor(Math.random()*truc.length);
      console.log('8ball');
  }
  });
