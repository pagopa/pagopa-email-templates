# pagopa-email-templates

This repo contains the mail templates used by pagoPA, created using [MJML](https://mjml.io/) markup language.

## Prerequisites

To generate the HTML (or `.txt`) output you will need to install two packages locally, `mjml` and `handlebars`. You can install them with the following command:

```shell
$ npm install
# or
$ yarn
```

To preview the MJML files in your IDE, please install the [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml).

>[!note]
> 🖼️ You can preview each single template by opening the relative image in the `previews` folder **OR** by opening the `index.html` file contained in each template subfolder (after generating the HTML version).

## Generate the receipts

>[!important]
> To apply changes, please note that the appropriate source file is:
> - `index.hbs` for the HTML version
> - `plain.text.hbs` for the `.txt` version

Every template is generated following the same pattern:

* **HTML version**: 
Source file (`.hbs`) → Handlebars compilation using the relative `*.json` data file (if present) → Intermediate file (`*.mjml`) -> Mjml compilation → Final output (`*.html`)
* **Txt version**: 
Source file (`.hbs`) → Handlebars compilation using the relative `*.json` data file (if present) → Final output (`*.txt`)

### Completed payment

```shell
## HTML version (Single cart)
$ yarn generatePaymentCompleted
## HTML version (Multiple cart items)
$ yarn generatePaymentCompleted-multipleItems
### HTML version (Stress test, longer strings)
$ yarn generatePaymentCompleted-stressTest
## .txt version
$ yarn generatePaymentCompleted-txt
```

### Pending payment

```shell
## HTML version
$ yarn generatePaymentPending
## HTML version (Multiple cart items)
$ yarn generatePaymentPending-multipleItems
```

### Refund

```shell
## HTML version
$ yarn generatePaymentRefund
```

### Fail

```shell
## HTML version
$ yarn generateFailedState
## .txt version
$ yarn generateFailedState-txt
```

## How to deploy changes

All the mail are sent through [pagopa-notifications-service](https://github.com/pagopa/pagopa-notifications-service).

## PDF Receipt
If you're looking for the relative PDF receipt, please refer to the [pagopa-template-receipt-pdf](https://github.com/pagopa/pagopa-template-receipt-pdf)

## Compatibility

Templates are compatible with the following clients:

- Apple Mail 13+ (dark mode included)
- Gmail Web app
- OL Office 365 (dark mode included, partially supported on Windows)
- Outlook 2013, 2016, 2019, 2021 (dark mode included, partially supported on Windows)
- Windows 10 Mail (dark mode partially supported)
- Windows 11 Mail
- Gmail App (Android 6+, dark mode partially supported)
- Gmail App (iOS 13.1+, dark mode partially supported)
- iPad (iOS 13.1+)
- iPhone (iOS 13.1+)
- AOL Mail
- Outlook.com Mail (dark mode partially supported)
- Yahoo! Mail

### Related mail templates

- [IO App](https://github.com/pagopa/io-app-email-templates)
- [Area Riservata (former SelfCare)](https://github.com/pagopa/selfcare-email-templates)
- [Piattaforma Notifiche](https://github.com/pagopa/pn-email-templates)
