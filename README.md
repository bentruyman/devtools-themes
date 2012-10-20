# Chrome Developer Tools Themes

*(still buggy)*

A collection of themes for Chrome's Developer Tools.

The theme files are written in [LESS](http://lesscss.org/) and make use of
simple features such as variables, nested selectors, and mixins. This makes
adding your own custom theme much easier.

# Getting Started

In order to compile stylesheets, this project makes use of
[Grunt](http://gruntjs.com/). This can easily be installed via
[npm](https://npmjs.org/). Npm is provided with most distributions of
[node.js](http://nodejs.org/).

To install Grunt: `npm install -g grunt`

Once you've installed Grunt, you'll need to ensure you have all of the Grunt
task dependencies.

To download these dependencies, run the following from the root of this project:
`npm install`

## Installation

Grunt automatically creates a build task for each of the theme stylesheets in
the `themes` directory. To build the `monokai-dark` theme, simple run:
`grunt build:monokai-dark`. A compiled `Custom.css` file will be created at the
root of this project.

Depending on your platform, you'll need to install the `Custom.css` file into
your Chrome's User Stylesheet's directory:

* **Mac:** ~/Library/Application Support/Google/Chrome/Default/User StyleSheets/Custom.css
* **PC:** C:\Users\YourUsername\AppData\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css
* **Ubuntu (Chromium):** ~/.config/chromium/Default/User\ StyleSheets/Custom.css

## Contributing

Feel free to fork and add your own themes! Just follow existing coding style and
conventions.

## Examples 

![Monokai Dark](https://raw.github.com/bentruyman/devtools-themes/master/examples/monokai-dark.png)
![Tomorrow Night](https://raw.github.com/bentruyman/devtools-themes/master/examples/tomorrow-night.png)

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
