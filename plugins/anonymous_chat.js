const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command, usedPrefix }) {
    //if (!global.db.data.settings.anon) throw `Fitur ini tidak aktif`
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        //case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                await this.sendButton(m.chat, '_Kamu tidak sedang berada di anonymous chat_', 'Mau cari patner chating?', 'Cari Partner', `${usedPrefix}start`)
                throw false
            }
            m.reply('_Ok_')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_Partner meninggalkan chat_', 'Mau cari patner chat lagi?', 'Cari Partner', `${usedPrefix}start`)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', 'Mau nunggu apa keluar?', 'Keluar', `${usedPrefix}leave`)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, '_Partner ditemukan!_', 'silahkan chatingan', 'Halo', '👋')
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.b, '_Partner ditemukan!_', 'silahkan chatingan', 'Hai', '👋')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '_Menunggu partner..._', 'Kalo bosan menunggu, klik di bawah!', 'Keluar', `${usedPrefix}leave`)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler
