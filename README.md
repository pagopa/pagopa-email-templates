# pagopa-email-templates

This repo contains the mail templates used by pagoPA, created using [MJML](https://mjml.io/) markup language.

## How to apply changes

To edit them, you can choose among these following options:

- [Online editor](https://mjml.io/try-it-live)
- [Local installation](https://mjml.io/download)
- [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml)

To generate the HTML output you need to install these CLI tools:

1. [MJML](https://github.com/mjmlio/mjml) package:

```shell
$ npm install --g mjml
```

2. [Handlebars CLI](https://github.com/keithamus/hbs-cli) to render handlebars templates (via `npx`, no global install needed)

For the specific commands, take in consideration the local README files:

1. [Receipt · Success](/Receipt_Success/)
2. [Receipt · KO](/Receipt_KO/)

## How to deploy changes

All the mail are sent through [pagopa-notifications-service](https://github.com/pagopa/pagopa-notifications-service), it 
uses the `hbs` templates file to generate all the different variants.
All you need to do is to:
- Copy [Success template](/Receipt_Success/index.hbs) into [Notification Service Success template](https://github.com/pagopa/pagopa-notifications-service/blob/main/src/templates/success/success.template.html)
- Copy [KO template](/Receipt_KO/index.hbs) into [Notification Service Success template](https://github.com/pagopa/pagopa-notifications-service/blob/main/src/templates/ko/ko.template.html)

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
