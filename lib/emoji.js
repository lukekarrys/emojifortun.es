var emojiImage = require('emoji-images');
var emojiList = emojiImage.list;
var _ = require('underscore');


module.exports = function (count, host, size) {
    var randomEmoji = _.chain(emojiList).shuffle().sample(count || 3).value();
    return randomEmoji.map(function (emoji) {
        return {
            name: emoji,
            image: emojiImage(emoji, host, size)
        };
    });
};