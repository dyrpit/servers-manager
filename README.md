# Servers Manager

Simple app, that uses my own API, served on heroku. In this app you manage servers statuses.
You can:

- turn **ON** server
- turn **OFF** server
- **REBOOT** server

Working example available [here](https://dyrpit.github.io/servers-manager/).

## Usage

1. clone or download repo
2. npm i
3. npm start

When server is _offline_ you have only one option to turn it on. When server is _online_ you can make it _offline_ or _reboot_ it. The server default behavior is to send response with delay. The delay when _rebooting_ is longer, so there is interval function implemented to fetch new data once per 1000ms.

You can filter servers by server name. Also you can get all _offline_, _online_, _rebooting_ servers by typing corresponding status name.

### Stack

- React
- Context API
- useReducer Hook
- SASS
