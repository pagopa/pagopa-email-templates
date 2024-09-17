import mjml2html from 'mjml'
import fs from 'fs'
import path from 'path'
import beautify from 'js-beautify';

const templateFolderName = "templates";
const args = process.argv.slice(2); // Remove the first two elements

const templateDirArgIndex = args.indexOf('--templateDir') + 1;
const templateDir = templateDirArgIndex > 0 ? args[templateDirArgIndex] : null;

const inputFilePath = templateDir ? path.join(templateFolderName, templateDir, 'index.mjml') : null;
const outputFilePath = templateDir ? path.join(templateFolderName, templateDir, 'index.html') : null;

// Read the MJML file
const mjmlContent = fs.readFileSync(inputFilePath, 'utf8')

// Compile the MJML content to HTML
const hbsOutput = mjml2html(mjmlContent, { keepComments: false, filePath: inputFilePath })

// Beautify the HTML output
const beautifiedHtml = beautify.html(hbsOutput.html, {
  indent_size: 2,
  end_with_newline: true,
  wrap_line_length: 80,
});

hbsOutput.html = beautifiedHtml;

// Check if outputFilePath is valid before writing
if (outputFilePath) {
  // Write the compiled HBS to the output file
  fs.writeFileSync(outputFilePath, hbsOutput.html, 'utf8');
  console.log(`MJML · Compiled MJML written to ${outputFilePath}`);
} else {
  console.error('MJML · Template directory is not specified. Output file will not be created.');
}