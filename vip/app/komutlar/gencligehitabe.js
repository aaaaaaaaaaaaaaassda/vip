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
\   **Gençliğe Hitabe**\n
\ **Ey Türk gençliği! Birinci vazifen; Türk istiklalini,**
\ **Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.**\n
\**Mevcudiyetinin ve istikbalinin yegâne temeli budur. Bu temel,**
\**senin en kıymetli hazinendir. İstikbalde dahi seni bu hazineden**
\**mahrum etmek isteyecek dâhilî ve haricî bedhahların olacaktır**
\** Bir gün, istiklal ve cumhuriyeti müdafaa mecburiyetine düşersen,**
\**vazifeye atılmak için içinde bulunacağın vaziyetin imkân ve**
\**şeraitini düşünmeyeceksin. Bu imkân ve şerait, çok namüsait bir**
\**mahiyette tezahür edebilir. İstiklal ve cumhuriyetine kastedecek**
\**düşmanlar, bütün dünyada emsali görülmemiş bir galibiyetin**
\**mümessili olabilirler. Cebren ve hile ile aziz vatanın bütün kaleleri**
\**zapt edilmiş, bütün tersanelerine girilmiş, bütün orduları**
\**dağıtılmış ve memleketin her köşesi bilfiil işgal edilmiş olabilir.**
\**Bütün bu şeraitten daha elim ve daha vahim olmak üzere,**
\**memleketin dâhilinde iktidara sahip olanlar, gaflet ve dalalet ve**
\**hatta hıyanet içinde bulunabilirler. Hatta bu iktidar sahipleri, şahsi**
\**menfaatlerini müstevlilerin siyasi emelleriyle tevhit edebilirler.**
\**Millet, fakruzaruret içinde harap ve bitap düşmüş olabilir.**\n
\**Ey Türk istikbalinin evladı! İşte, bu ahval ve şerait içinde dahi**
\**vazifen, Türk istiklal ve cumhuriyetini kurtarmaktır. Muhtaç**
\**olduğun kudret, damarlarındaki asil kanda mevcuttur.**

`)
 .setImage(`https://c.tenor.com/pRpqSEpfPJ0AAAAd/mustafa-kemal-atat%C3%BCrk-atat%C3%BCrk.gif`)
 

  .setColor("RED")
  message.channel.send(rexus);
}
module.exports.conf = {
aliases: ['genclige-hitabe']
}

module.exports.help = {
name: "hitabe"
}

