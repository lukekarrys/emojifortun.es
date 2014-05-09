module.exports = function (elem, event, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(event, fn, false);
    } else {
        elem.attachEvent('on' + event, function () {
            return(fn.call(elem, window.event));
        });
    }
};