var detect = require('zepto-detect');

module.exports = function (text) {
    var twitter;

    if (detect.os.ios) {
        twitter = 'twitter://post?message=' + encodeURIComponent(text + ' ' + window.location.href);
    } else {
        twitter = 'https://twitter.com/share?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(text);
    }

    return {twitter: twitter};
};