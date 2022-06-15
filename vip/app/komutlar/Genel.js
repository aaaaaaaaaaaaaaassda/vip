const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let botadı = ayarlar.botadı



exports.run = function(client, message) {
  
  let prefix = ayarlar.prefix
  
const jsistem = new Discord.MessageEmbed()
.setColor('RED')
.setTitle("Genel Komutları")
.addField(`${prefix}capsengel`,'capslock engel açar.')
.addField(`${prefix}kanalkoruma`,'Kanal korumayı açar ')
.addField(`${prefix}küfürengel aç veya ${prefix} küfürengel kapat `,'küfür engel açar veya kapatır')
.addField(`${prefix}rolkoruma`,'Rol korumayı açar')
.addField(`${prefix}everhere`,'Everyone & Here engel açar')
.addField(`${prefix}reklamengel`,'Reklam engel açar')
.addField(`${prefix}Nuke`,'Yazdığınız kanalı siler ve tekrar oluşturur')
.addField(`${prefix}banlist`,'Banlı sayısı gösterir')
.addField(`${prefix}kullanıcı-bilgi`,'Sizin veya etiketlediğiniz kullanıcının bilgilerini gösterir')
.addField(`${prefix}sunucu-bilgi`,'Sunucunun bilgilerini gösterir')
.addField(`${prefix}hitabe`,'Atatürkün gençliğe hitabesini yazar')
.addField(`${prefix}kurallar`,'Sunucu kurallarını yazar')
.addField(`${prefix}sil`,'Girilen sayı kadar mesaj siler')
.addField("» Server Link ;", ` https://discord.gg/aphrodite`)
.setFooter(`${botadı} Genel Kmoutlar`, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
message.channel.send(jsistem)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'genel',
};