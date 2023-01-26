const fs = require('fs')

global.creator = 'إحسان' 
global.apikey = ["Ikhsan", "ShanBots", "Aliyul"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
