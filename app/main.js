/* global document */
var size = 64;
var host = '/emojis';
var _ = require('underscore');
var fortune = require('../lib/emoji');
var domready = require('domready');
var domify = require('domify');
var tweet = require('../lib/tweet');
var codes = require('./emoji-code').named;

var emoji = fortune(3, host, size);
var images = '<span>' + _.pluck(emoji, 'image').join('') + '</span>';
var emojiNames = _.chain(emoji).pluck('name').map(function (n) { return n.replace(/:/g, ''); }).value();
var text = emojiNames.join(' ').replace(/_/g, ' ');
var emojiCodes = _.filter(codes, function (codeVal, codeKey) { return _.contains(emojiNames, codeKey); }).join(' ');

domready(function () {
    document.querySelector('#fortune').appendChild(domify(images));
    document.querySelector('#fortuneText').innerHTML = text;
    document.querySelector('#tweetButton').setAttribute('data-text', 'My emoji fortune is "' + text + ' (' + emojiCodes + ')" —');
    tweet(document);
});
