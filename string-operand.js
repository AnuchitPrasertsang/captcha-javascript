(function(global) {
    'use strict';

    var instance = function(number) {
        return new StringOperand(number);
    };

    var strNum = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
    instance.prototype = {
        toString: function() {
            return strNum[this.number - 1];
        }
    };

    function StringOperand(number) {
        this.number = number;
    }

    StringOperand.prototype = instance.prototype;
    global.StringOperand = instance;
}(window));
