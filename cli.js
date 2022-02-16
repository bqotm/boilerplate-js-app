const cac=require('cac')
const main=require('./')

const cli=cac()

cli.command('*', 'new project', (input, flags)=>main(input, flags))

cli.parse()