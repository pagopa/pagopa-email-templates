## Usage

### Generate the plain text version:

#### Authenticated

```shell
$ hbs --data ./authenticated.json -o ./ -e txt -- ./plain-text.hbs
```

### Generate the HTML version:

Update the original `mjml` file and generate the final HTML file through the following command:

```shell
$ mjml index.mjml -o index.hbs --config.keepComments=0 && hbs --data ./ko.json -e html -- ./index.hbs
```
