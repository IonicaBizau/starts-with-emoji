# starts-with-emoji [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/starts-with-emoji.svg)](https://www.npmjs.com/package/starts-with-emoji) [![Downloads](https://img.shields.io/npm/dt/starts-with-emoji.svg)](https://www.npmjs.com/package/starts-with-emoji) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if a string starts with an emoji.

## Installation

```sh
$ npm i --save starts-with-emoji
```

## Example

```js
const startsWithEmoji = require("starts-with-emoji");

console.log(startsWithEmoji(":house: sweet home!"));
// => true

console.log(startsWithEmoji("What a nice :gift:!"));
// => false
```

## Documentation

### `startsWithEmoji(s)`
Checks if a string starts with emoji.

#### Params
- **String** `s`: The input string.

#### Return
- **Boolean** `true`, if the string starts with `:emoji:` snippet or `false` otherwise.

### `regex()`
Starts with emoji regex.

#### Return
- **RegExp** The regex value.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md