[![Bower version](https://badge.fury.io/bo/mn-input.svg)](https://badge.fury.io/bo/mn-input)

# mn-input

A input component (type text, password or email), with minimalist design.

See the [demo](http://codepen.io/darlanmendonca/full/akgXQq)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-input/master/sources/example/mn-input.gif)](http://codepen.io/darlanmendonca/full/akgXQq)

### Install

With bower

```sh
bower install --save mn-input
```

Or just download the main files ```dist/mn-input.css, dist/mn-input.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-input.css">
<script src="path/to/dist/vendor.js.js"></script>
<script src="path/to/dist/mn-input.js"></script>
```

### Usage

And then, in your html, you can use the tag ```mn-input``` i.e.

```html
<mn-input placeholder="Username"></mn-input>
```

By default, the type is text, but you can use:

- text
- password
- email

Example:

```html
<!-- HTML -->
<mn-input type="email" placeholder="Email"></mn-input>
```

```pug
//- PUG/JADE
mn-input(type='email' placeholder='email')
```

The following attributes from inputs are supported in this component

- [type](http://www.w3schools.com/tags/att_input_placeholder.asp) - only text, password and email
- [placeholder](http://www.w3schools.com/tags/att_input_placeholder.asp)
- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [maxlength](http://www.w3schools.com/tags/att_input_maxlength.asp)
- [pattern](http://www.w3schools.com/tags/att_input_pattern.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
- [autocapitalize](https://developers.google.com/web/updates/2015/04/autocapitalize)

### Tests

Thanks to the team [BrowserStack](https://www.browserstack.com/), we will test using them. They have great tools for unit, and e2e tests.
