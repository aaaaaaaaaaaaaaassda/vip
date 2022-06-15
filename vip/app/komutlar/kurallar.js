const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000}));

  let prefix = ayarlar.prefix
  
   
let embed = new Discord.MessageEmbed()
 const rexus = new Discord.MessageEmbed()
 .setDescription(
    `
\   **RULES OF Ψ O L Y M P O S Ψ  **\n
\** • Bu Discord Sunucusuna Giren Herkes Kuralları Okumasa Bile Okumuş Sayılacaktır, Ona Göre Yaptırım Uygulanacaktır:**\n
\** • Küfür ve argo kelimeler ve imalarını kullanmak yasaktır.**\n
\** • Kişisel değerlere hakaret, kişiye hakaret, din, dil, ırk ayrımı ve siyasi tartışmalar yapmak yasaktır.**\n
\** • Spam, Flood yapmak ve caps lock açmak yasaktır.**\n
\** • Sunucu içerisinde olay çıkartmak, üyeleri kışkırtmak ve kaos yaratmak yasaktır.**\n
\** • Yetkililerden rol istemeyin, herkes er ya da geç çeşitli rollere sahip olacak.**\n
\** • Kişisel olaylarınızı discorda yansıtmak yasaktır.**\n
\** • Fotoğrafları, linkleri ve bot komutlarını kendi kanalları dışında bir yere yazmak, yazı kanallarını kasıtlı olarak kirletmek ve amacı dışında kullanmak yasaktır.**\n       
\** • Odaları trollemek, insanları rahatsız etmek, Sesli sohbette bass açmak yasaktır.**\n
\** • Eğer ki bir yetkili size kötü bir şey söylediyse veya hakkınız olanı almak istediyse daha yüksek bir mevkide bulunan yetkililere bildirebilirsiniz.**\n
\** • Sunucu açıp arkadaşlarını sunucusuna davet edemez. Bu tarz bir durumda yöneticilere bildirin.**\n
\** • Her türlü reklam yapmak yasaktır.**\n
\** • Herkes yaptığı hareketten sorumludur, her kural yazılı olmak zorunda değildir.**

`)
 .setImage(`https://cdn.discordapp.com/attachments/971541766970949783/972452473920970793/standard_4.gif`)
 

  .setColor("RED")
  message.channel.send(rexus);
}
module.exports.conf = {
aliases: ['rules']
}

module.exports.help = {
name: "kurallar"
}

