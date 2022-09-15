# pagopa-email-templates

This repo contains the mail templates used by pagoPA, created using [MJML](https://mjml.io/) markup language.

## How to apply changes

To edit them, you can choose among these following options:

- [Online editor](https://mjml.io/try-it-live)
- [Local installation](https://mjml.io/download)
- [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml)

To generate the HTML output you need to install these CLI tools:

1. [MJML](https://github.com/keithamus/hbs-cli) package:

```shell
$ npm install --g mjml
```

2. [Handlebars CLI](https://github.com/keithamus/hbs-cli) to render handlebars templates:

```shell
$ npm install --g hbs-cli
```

For the specific commands, take in consideration the local README files:

1. [Receipt · Success](/Receipt_Success/)
1. [Receipt · KO](/Receipt_KO/)

## How to deploy changes

All the mail are sent through [pagopa-notifications-service](https://github.com/pagopa/pagopa-notifications-service).

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

- [Area Riservata (former SelfCare)](https://github.com/pagopa/selfcare-email-templates)
- [Piattaforma Notifiche](https://github.com/pagopa/pn-email-templates)
