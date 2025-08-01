import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, Este comando está deshabilitado por mi creador.

> ${dev}`

await conn.sendFile(m.chat, catalogo, "grupos.jpg", grupos, m)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
