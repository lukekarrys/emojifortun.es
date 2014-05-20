var _ = require('underscore');
var emojis = require('emoji-named-characters');
var emojiNames = _.keys(emojis.mapping);
var imgSrc = function (name, url) {
    return url + '/' + encodeURIComponent(name) + '.png';
};
var emojiImage = function (name, url, size) {
    return '<img class="emoji" title="' + name + '" alt="' + name + '" src="' + imgSrc(name, url) + '"' + (size ? (' height="' + size + '"') : '') + ' />';
};
var _ = require('underscore');

var mapEmoji = function (host, size) {
    return function (emoji) {
        return {
            character: emojis.mapping[emoji],
            name: emoji,
            image: emojiImage(emoji, host, size),
            imgsrc: imgSrc(emoji, host)
        };
    };
};

exports.fortune = function (count, host, size) {
    var randomEmoji = _.chain(emojiNames).shuffle().sample(count || 3).value();
    return randomEmoji.map(mapEmoji(host, size));
};

var countSyllables = function (sentence) {
    var total = 0;
    var count = function (word) {
        var check = word.replace(/[^a-zA-Z]/g, '');
        if (!check) {
            return 0;
        }
        check = check.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
        var syllables = check.match(/[aeiouy]{1,2}/g);
        return syllables ? syllables.length : 0;
    };

    sentence.split(/[\W]+/).forEach(function (word) {
        total += count(word);
    });

    return total;
};

var fetchSyllables = function (count) {
    var result = [];
    var current = 0;
    var randomEmoji, emojiCount;

    while (current < count) {
        randomEmoji = _.chain(emojiNames).shuffle().sample().value();
        emojiCount = countSyllables(randomEmoji);

        if ((current + emojiCount) > count) {
            continue;
        }

        result.push(randomEmoji);
        current += emojiCount;
    }

    return result;
};

exports.haiku = function (host, size) {
    var result = [];

    result.push(fetchSyllables(5).map(mapEmoji(host, size)));
    result.push(fetchSyllables(7).map(mapEmoji(host, size)));
    result.push(fetchSyllables(5).map(mapEmoji(host, size)));

    return result;
};
