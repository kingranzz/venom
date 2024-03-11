const fs = require('fs');
const chalk = require('chalk');

global.numerodono = "6285920649151";
global.nomedono = "Venom Mods";
global.prefixo = ".";
global.packnome = "feito por:\ncriador:\ncanal:";
global.author = "𝑽𝒆𝒏𝒐𝒎𝑪𝒐𝒍𝒍𝒂𝒃 8𝒌\n6285920649151\nyoutube.com/@AkmalMods";
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