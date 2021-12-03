let handler = async m => m.reply(`
MASUK NANTI DAPET BOT FREE
BUAT MASUK GROUP KALIAN

https://chat.whatsapp.com/GkTtHqgh1hV5mWh4uZ0dTO

\`\`\`Jangan lupa join ya kak 🥰\`\`\`
`.trim())
handler.help = ['groupbot']
handler.tags = ['info', 'grup']
handler.command = /^g(c|ro?up)bot$/i

module.exports = handler
