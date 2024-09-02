import mjml2html from 'mjml'
import fs from 'fs'
import path from 'path'

// Parsing command-line arguments for template file path
const args = process.argv.slice(2); // Remove the first two elements

const templateDirArgIndex = args.indexOf('--templateDir') + 1;
const templateDir = templateDirArgIndex > 0 ? args[templateDirArgIndex] : null;

const outputFilePath = path.join(path.dirname(templateDir), 'index.hbs')

// Read the MJML file
const mjmlContent = fs.readFileSync(`./${templateDir}/index.mjml`, 'utf8')

// Compile the MJML content to HBS
const hbsOutput = mjml2html(mjmlContent, { keepComments: false })

// Write the compiled HBS to the output file
fs.writeFileSync(outputFilePath, hbsOutput.html, 'utf8')

console.log(`Compiled MJML written to ${outputFilePath}`)