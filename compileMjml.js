import mjml2html from 'mjml'
import fs from 'fs'
import path from 'path'

// Parsing command-line arguments for template file path
const args = process.argv.slice(2); // Remove the first two elements

const templateDirArgIndex = args.indexOf('--templateDir') + 1;
const templateDir = templateDirArgIndex > 0 ? args[templateDirArgIndex] : null;

const inputFilePath = templateDir ? path.join(templateDir, 'index.mjml') : null;
const outputFilePath = templateDir ? path.join(templateDir, 'index.hbs') : null;

// Read the MJML file
const mjmlContent = fs.readFileSync(inputFilePath, 'utf8')

// Compile the MJML content to HBS
const hbsOutput = mjml2html(mjmlContent, { keepComments: false, filePath: inputFilePath })

// Check if outputFilePath is valid before writing
if (outputFilePath) {
  // Write the compiled HBS to the output file
  fs.writeFileSync(outputFilePath, hbsOutput.html, 'utf8');
  console.log(`MJML · Compiled MJML written to ${outputFilePath}`);
} else {
  console.error('MJML · Template directory is not specified. Output file will not be created.');
}