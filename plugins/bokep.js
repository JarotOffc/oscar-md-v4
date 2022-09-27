let handler = async (m, { conn }) => {		
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih', m)
}
handler.help = ['bokep']
handler.tags = ['nsfw']

handler.command = /^(bokep)$/i
handler.premium = true
handler.register = true
handler.limit = false
module.exports = handler