let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2ButtonLoc(m.chat, await (await fetch(yamete)).buffer(), `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰── *DONATE* ──➤ ↶↷* 
╰•͙✩̣̣
⁙┃ *⸙ ુོ➪ *EMONEY*
⁙┃ ુོ THREE  : 62895323241456
⁙┃ ુོ TELKOM : 6281379753850
⁙┃ ુོ GOPAY : 6281379753850
⁙┃ ુོ SHOPEEPAY : 62895323241456
⁙┃ ુོ
⁙┃ *⸙ ુོ➪ *INSTAGRAM OWNER*
⁙┃ ુོ instagram.com/raaihankhadafi8
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), watermark, 'Owner', '.owner', 'Sewa Bot', '.sewa', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
