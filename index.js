#!/usr/bin/env node

const sao=require('sao')
const path=require('path')

const generator=path.resolve(__dirname,'./')
const outDir = path.resolve(process.argv[2] || '.')

console.log(`
    >generate fullstack js starter project in ${process.argv[2] ? `./${process.argv[2]}` : `current dir`}
`)

sao({generator, outDir, logLevel: 2}).run().catch(err=>{
    console.trace(err)
    process.exit(1);
})