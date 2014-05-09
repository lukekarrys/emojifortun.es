module.exports = function (text) {
    return {
        twitter: 'https://twitter.com/share?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(text)
    };
};