const fs = require('fs');
const chalk = require('chalk');

global.numerodono = "6282393734303";
global.nomedono = "Veods";
global.prefixo = ".";
global.packnome = "feito por:\ncriador:\ncanal:";
global.author = "8𝒌\n6285920649151\nyoutube.com/";
global.autoGravar = false;
global.autoDigitar = false;
global.autoreDigitarGravar = false;
global.autoVisualizarMsg = false;
global.autobio = true;
global.autovisualizar_status = false;
global.antilink_grupo = true;


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`configurar.js foi atualizado!`))
    delete require.cache[file]
    require(file)
})
