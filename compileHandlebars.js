import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

const templateFolderName = "templates";
// Parsing command-line arguments for template file path and data
const args = process.argv.slice(2); // Remove the first two elements

const templateDirArgIndex = args.indexOf('--templateDir') + 1;
const templateDir = templateDirArgIndex > 0 ? args[templateDirArgIndex] : null;

const dataArgIndex = args.indexOf('--data') + 1;
const dataFilePath = dataArgIndex > 0 ? args[dataArgIndex] : null;

const txtVersionArgIndex = args.indexOf('--txtVersion');
const txtVersion = txtVersionArgIndex > -1;

if (!templateDir) {
  console.error('HBS · Error: --templateDir argument is required');
  process.exit(1);
}

// Read the Handlebars template file
const templateFilePath = path.join(templateFolderName, templateDir, txtVersion ? "plain-text.hbs" : "index.hbs");
const templateContent = fs.readFileSync(templateFilePath, 'utf8');

// Import and register helpers from the helpers directory
import { eq } from './helpers/eq.js';
import { not } from './helpers/not.js';

// Register the helpers with Handlebars
Handlebars.registerHelper('eq', eq);
Handlebars.registerHelper('not', not);

// Read the data file if provided
let data = {};
if (dataFilePath) {
  const dataFileRootPath = path.join("json", dataFilePath);
  const dataContent = fs.readFileSync(dataFileRootPath, 'utf8');
  data = JSON.parse(dataContent);
}

// Compile the Handlebars template
const template = Handlebars.compile(templateContent);
const htmlOutput = template(data); // Pass the context data here

// Generate the output file path
const outputFilename = txtVersion ? "plain-text.txt" : "index.html";
const outputFilePath = path.join(templateFolderName, templateDir, outputFilename);

// Write the compiled HTML to the output file
fs.writeFileSync(outputFilePath, htmlOutput, 'utf8');

console.log(`HBS · Compiled Handlebars template written to ${outputFilePath}`);