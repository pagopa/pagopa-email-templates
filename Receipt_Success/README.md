## Generate the plain text version

#### Authenticated

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Multiple cart items)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-multiple-cart-items.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Legacy payment method)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-legacy-method.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Apple Pay)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-apple-pay.json -o ./ -e txt -- ./plain-text.hbs
```

#### Authenticated (Extra fee)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-extra-fee.json -o ./ -e txt -- ./plain-text.hbs
```

#### Guest (Tax code not provided)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/guest.json -o ./ -e txt -- ./plain-text.hbs
```

## Generate the HTML version

Update the original `mjml` file and generate the relative `hbs` template file:

```shell
$ mjml index.mjml -o index.hbs --config.keepComments=0
```

[pagopa-notifications-service](https://github.com/pagopa/pagopa-notifications-service) uses the `hbs` template file to generate all the different variants.

For testing purposes you can generate the final `html` file through the following command, based on different user scenarios:

#### Authenticated

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated.json -e html -- ./index.hbs
```

#### Authenticated (Multiple cart items)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-multiple-cart-items.json -e html -- ./index.hbs
```

#### Authenticated (Legacy payment method)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-legacy-method.json -e html -- ./index.hbs
```

#### Authenticated (Apple Pay)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-apple-pay.json -e html -- ./index.hbs
```

#### Authenticated (Extra fee)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-extra-fee.json -e html -- ./index.hbs
```

#### Guest (Tax code not provided)

```shell
$ npx hbs-cli -H ./helpers/eq.js -H ./helpers/not.js --data ./json/authenticated-extra-fee.json -e html -- ./index.hbs
```
