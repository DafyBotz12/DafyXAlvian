let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu mau kirim pesan ke owner pake perintah ini\n\ncontoh:\n${usedPrefix + command} pesan kamu, jika ingin sertakan teks panjan <copy/tag pesannya>`
    if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|konfirm?)$/i
module.exports = handler