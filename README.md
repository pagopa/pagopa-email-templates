# pagopa-email-templates

This repo contains the mail templates used by pagoPA, created using [MJML](https://mjml.io/) markup language.

## Prerequisites

To generate the HTML (or `.txt`) output you will need to install two packages locally, `mjml` and `handlebars`. You can install them with the following command:

```shell
$ npm install
# or
$ yarn
```

To preview the MJML files in your IDE, please install the [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml)

## Generate the receipts

>[!note]
> To apply changes, please note that the appropriate source file is:
> - `index.mjml` for the HTML version
> - `plain.text.hbs` for the `.txt` version

### Failed state

```shell
## HTML version
$ yarn generateReceiptKO
## .txt version
$ yarn generateReceiptKO-txt
```

For the specific commands, take in consideration the local README files:
1. [Receipt · KO](/Receipt_KO/)

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
