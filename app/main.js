var size = 100;
var host = 'https://raw.githubusercontent.com/HenrikJoreteg/emoji-images/master/pngs';
var _ = require('underscore');
var fortune = require('../lib/emoji');
var domready = require('domready');
var domify = require('domify');

var emoji = fortune(3, host, size);
var images = '<span>' + _.pluck(emoji, 'image').join('') + '</span>';
var text = _.pluck(emoji, 'name').join(' ').replace(/:/g, '').replace(/_/g, ' ').toUpperCase();

domready(function () {
    document.querySelector('#fortune').appendChild(domify(images));
    document.querySelector('#fortuneText').innerHTML = text;
});