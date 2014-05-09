var _ = require('underscore');
var emojis = require('emoji-named-characters');
var emojiNames = _.keys(emojis.mapping);
var emojiImage = function (name, url, size) {
    return '<img class="emoji" title="' + name + '" alt="' + name + '" src="' + url + '/' + encodeURIComponent(name) + '.png"' + (size ? (' height="' + size + '"') : '') + ' />';
};
var _ = require('underscore');


module.exports = function (count, host, size) {
    var randomEmoji = _.chain(emojiNames).shuffle().sample(count || 3).value();
    return randomEmoji.map(function (emoji) {
        return {
            character: emojis.mapping[emoji],
            name: emoji,
            image: emojiImage(emoji, host, size)
        };
    });
};