## Generate the plain text version:

#### Authenticated

```shell
$ hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Multiple cart items)

```shell
$ hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-multiple-cart-items.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Legacy payment method)

```shell
$ hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-legacy-method.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Apple Pay)

```shell
$ hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-apple-pay.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Extra fee)

```shell
$ hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-extra-fee.json -o ./ -e txt -- ./plain-text.hbs
```

#### Guest

```shell
$ hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./guest.json -o ./ -e txt -- ./plain-text.hbs
```

## Generate the HTML version:

Update the original `mjml` file and generate the final HTML file through the following command, based on different user scenarios:

#### Authenticated

```shell
$ mjml index.mjml -o index.hbs --config.keepComments=0 && hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated.json -e html -- ./index.hbs
```

#### Authenticated (Multiple cart items)

```shell
$ mjml index.mjml -o index.hbs --config.keepComments=0 && hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-multiple-cart-items.json -e html -- ./index.hbs
```

#### Authenticated (Legacy payment method)

```shell
$ mjml index.mjml -o index.hbs --config.keepComments=0 && hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-legacy-method.json -e html -- ./index.hbs
```

#### Authenticated (Apple Pay)

```shell
$ mjml index.mjml -o index.hbs --config.keepComments=0 && hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-apple-pay.json -e html -- ./index.hbs
```

#### Authenticated (Extra fee)

```shell
$ mjml index.mjml -o index.hbs --config.keepComments=0 && hbs -H ./helpers/eq.js -H ./helpers/not.js --data ./authenticated-extra-fee.json -e html -- ./index.hbs
```
