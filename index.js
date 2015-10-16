#! /usr/bin/env node
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

var original = "System.config({ baseURL: 'base' });";
var prepend = 'if ( !System.baseURL ) { ';
var append = ' }';

var prependPath = argv.prepend || '';
var path = './' + prependPath + '/node_modules/karma-jspm/src/adapter.js';

fs.readFile(path , 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    if ( data.indexOf(prepend) === -1 ) {
        data = data.replace(original, prepend + original + append)
        writeModifiedFile(data);
    } else {
        console.log('adapter.js already OK, no need to monkeypatch');
    }
});


function writeModifiedFile(content) {
    fs.writeFile(path, content, function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log('adapter.js monkeypatched!');
    });
}
