var Build = require('moonboots-static');
var Moonboots = require('moonboots-express');
var express = require('express');
var jade = require('jade');
var fs = require('fs');
var lessitizer = require('lessitizer');

var devMode = process.argv.join(' ').indexOf('--dev') > -1;
var html = function (locals) {
    return jade.compile(fs.readFileSync(appPath + 'index.jade'))(locals);
};
var appPath = __dirname + '/app/';
var config = {
    main: appPath + 'main.js',
    stylesheets: [
        appPath + 'app.css'
    ],
    developmentMode: devMode,
    beforeBuildCSS: function (cb) {
        lessitizer({
            files: appPath + 'app.less',
            outputDir: appPath
        }, cb);
    }
};



if (devMode) {
    var server = express();
    server.use(express.static(__dirname + '/public'));
    new Moonboots({
        server: server,
        moonboots: config,
        render: function (req, res) {
            res.send(html(res.locals));
        }
    });
    server.listen(process.env.PORT || 3000);
} else {
    new Build({
        moonboots: config,
        htmlSource: function (context) {
            return html(context);
        },
        directory: __dirname + '/_built',
        public: __dirname + '/public',
        cb: function (err) {
            console.log(err || 'Built!');
        }
    });
}


