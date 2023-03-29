let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙱𝙸𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾*')
} else throw `*[❗] ВВЕДИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ. ИСПОЛЬЗУЯ:*\n*- @номер (упоминание)*\n*- @номер (название группы)*\n*- @номер (Представтесь пожалуйста голосовым сообщением!!!Внимательно читаем правила группы в шапке прфиля)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['приветствие'] 
handler.admin = true
export default handler
