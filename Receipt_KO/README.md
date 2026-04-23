## Usage

### Generate the plain text version:

```shell
$ npx hbs-cli --data ./ko.json -o ./ -e txt -- ./plain-text.hbs
```

### Generate the HTML version:

Update the original `mjml` file and generate the final HTML file through the following command:

```shell
$ mjml index.mjml -o index.hbs --config.keepComments true --config.allowIncludes true --config.includePath '["../partials","../"]' && npx hbs-cli --data ./ko.json -e html -- ./index.hbs
```
