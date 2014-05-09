/* global document */
var size = 64;
var host = '/emojis';
var _ = require('underscore');
var fortune = require('../lib/emoji');
var domready = require('domready');
var domify = require('domify');
var tweet = require('../lib/tweet');

var emoji = fortune(3, host, size);
var images = '<span>' + _.pluck(emoji, 'image').join('') + '</span>';
var names = _.pluck(emoji, 'name');
var text = names.join(' ').replace(/_/g, ' ');
var characters = _.pluck(emoji, 'character').join(' ');

domready(function () {
    document.querySelector('#fortune').appendChild(domify(images));
    document.querySelector('#fortuneText').innerHTML = text;
    document.querySelector('#tweetButton').setAttribute('data-text', 'My emoji fortune is "' + text + ' (' + characters + ')" —');
    tweet(document);
});
