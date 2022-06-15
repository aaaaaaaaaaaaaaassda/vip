const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

 if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(m => m.delete(5000));

let channel = message.mentions.channels.first() || message.channel;

const uyg = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("Bekleyiniz!")
 message.channel.send(uyg);
  
  const nuke = new Discord.MessageEmbed()
    .setAuthor(`Nuke Atma Başarılı!`)
    .setColor('RED')
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => { msg.setPosition(position);msg.send(nuke);});}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};