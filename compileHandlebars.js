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

// Import and register the helpers
import { eq } from './helpers/eq.js';
import { not } from './helpers/not.js';
import { splitAndSpace } from './helpers/splitAndSpace.js';

Handlebars.registerHelper('eq', eq);
Handlebars.registerHelper('not', not);
Handlebars.registerHelper('splitAndSpace', splitAndSpace);

// Import and register the partials
const importPartial = (partialName, partialPath) => {
  const partialContent = fs.readFileSync(path.join('partials', partialPath), 'utf8');
  Handlebars.registerPartial(partialName, partialContent);
}

importPartial('headerTitle', 'header-title.hbs');
importPartial('transactionDetail', 'transaction-detail.hbs');
importPartial('transactionSubject', 'transaction-subject.hbs');

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
const outputFilename = txtVersion ? "plain-text.txt" : "index.mjml";
const outputFilePath = path.join(templateFolderName, templateDir, outputFilename);

// Write the compiled HTML to the output file
fs.writeFileSync(outputFilePath, htmlOutput, 'utf8');

console.log(`HBS · Compiled Handlebars template written to ${outputFilePath}`);