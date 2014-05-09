/* global document, ga */
var size = 64;
var host = '/emojis';
var _ = require('underscore');
_.templateSettings = {interpolate: /\{\{(.+?)\}\}/g};
var fortune = require('../lib/emoji');
var domready = require('domready');
var share = require('../lib/share');
var addEvent = require('../lib/event');
var shareTextTmpl =  _.template('My emoji fortune is {{ characters }} ({{ text }}) —');
var $ = function (id) { return document.querySelector('#' + id); };

function doit () {
    var emoji = fortune(3, host, size);
    var images = '<span>' + _.pluck(emoji, 'image').join('') + '</span>';
    var names = _.pluck(emoji, 'name');
    var text = names.join(' ').replace(/_/g, ' ');
    var characters = _.pluck(emoji, 'character').join(' ');
    var shareText = shareTextTmpl({text: text, characters: characters});
    $('fortune').innerHTML = images;
    $('fortuneText').innerHTML = text;
    $('tweetButton').setAttribute('href', share(shareText).twitter);
}

function trackit () {
    doit();
    ga('send', 'pageview');
}

domready(function () {
    doit();
    addEvent($('refresh'), 'click', trackit);
});
