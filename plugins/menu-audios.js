const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `

`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'wa.me/+79531126750', 'СОЗДАТЕЛЬ', null, null, [
['МЕНЮ', '#меню']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^()$/i
handler.fail = null
export default  handler
