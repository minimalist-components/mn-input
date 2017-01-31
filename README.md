[![npm version](https://badge.fury.io/js/mn-input.svg)](https://badge.fury.io/js/mn-input)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-input.svg)](https://gemnasium.com/github.com/minimalist-components/mn-input)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-input

A input component (type text), with minimalist design.

See the [demo](https://minimalist-components.github.io/mn-input/)

<a href="https://minimalist-components.github.io/mn-input/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-input/master/preview.gif">
</a>

### Install

```sh
npm install --save mn-input
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-input/tree/master/dist) with your preferred tool.

### Usage

And then, in your html, you can use the tag ```mn-input``` i.e.

```html
<mn-input placeholder="Username"></mn-input>
```

The following attributes from inputs are supported in this component

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

### Types

if you need another type of input, like password, or number, see other mn-components like <strong class="tag">mn-password</strong>, or <strong class="tag">mn-number</strong>.

they are in separated, to produce a clean code, and detailed care about UX.

### Tests

Thanks to [BrowserStack](https://www.browserstack.com/) team, we will test using them. They have great tools for unit, and e2e tests.
