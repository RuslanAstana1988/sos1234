import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*[❗ИНФО❗] ВВЕДИТЕ ТЕКСТ ДЛЯ ПРЕОБРОЗОВАНИЯ 𝚀𝚁*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(ツ)_/¯', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^код(code)?$/i
export default handler
