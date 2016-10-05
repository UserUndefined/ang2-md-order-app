**webpack_production_build**
When Webpack production builds are kicked off, the build runs OK but when the code is hosted the browser kicks back the following error message: 

_Uncaught TypeError: t.match is not a function_

To fix, find file _url_resolver.js_ in _node_modules/_ and edit function function _split(uri) to add the line _uri += ''_ so it looks like:

_function _split(uri) {
    uri += '';
    return uri.match(_splitRe);
}_

Fix suggested from, https://github.com/AngularClass/angular2-webpack-starter/issues/958
