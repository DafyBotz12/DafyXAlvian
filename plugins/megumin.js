let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  //conn.sendFile(m.chat, json.url, '', watermark, m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Meguminnya bwank', watermark, 'Get Again', '/megumin', m)
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
//ftwrr 
//rasel button gabut 🗿
module.exports = handler