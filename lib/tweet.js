module.exports = function (d) {
    var s = 'script';
    var id = 'twitter-wjs';
    var js;
    var fjs = d.getElementsByTagName(s)[0];
    var p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
};