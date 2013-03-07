var colors = require('colors');

function Logger(scope) {
    this.scope = scope;
}

function zeros(s, l) {
    s = '' + s;
    while (s.length < l) {
        s = '0' + s;
    }
    return s;
}

Logger.prototype.isValid = function(target) {
    this.logAction('isValid', target);
};

Logger.prototype.log = function(msg) {
    var dt = new Date();
    console.log(
        colors.grey(
            zeros(dt.getHours(), 2) + ':' +
            zeros(dt.getMinutes(), 2) + ':' +
            zeros(dt.getSeconds(), 2) + '.' +
            zeros(dt.getMilliseconds(), 3) + ' - '
        ) +
        '[' + colors.blue(this.scope) + '] ' + msg
    );
};

Logger.prototype.logAction = function(action, msg) {
    this.log('[' + colors.green(action) + '] ' + msg);
};

Logger.prototype.subLogger = function(name) {
    return new Logger(this.scope + '/' + name);
};

module.exports = Logger;