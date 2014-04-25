// http://requirebin.com/?gist=10309585

// var size = 100;
// var _ = require('underscore');
// var emoji = require('emoji-images');
// var emojiList = emoji.list;
// var domify = require('domify');
// var insertCSS = require('insert-css');
// var host = "https://andbang-emoji.s3.amazonaws.com";
// var sample = function (n) {
//   return _.chain(emojiList).shuffle().sample(n || 3).value();
// };
// var logImage = function (img) {
//   document.body.appendChild(domify(img));
// };

// insertCSS('body { padding: 50px; text-align: center; height: auto; width: auto; }');
// insertCSS('.requirebin-link { display: none; }');
// document.body.appendChild(domify('<h1>Your emoji fortune:</h1>'));
// sample().forEach(function (e) {
//     logImage(emoji(e, host, size));
// });
