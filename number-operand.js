(function(global) {
    'use strict';

    var instance = function(number) {
        return new NumberOperand(number);
    };

    instance.prototype = {
        toString: function() {
            return this.number.toString();
        }
    };

    function NumberOperand(number) {
        this.number = number;
    }

    NumberOperand.prototype = instance.prototype;
    global.NumberOperand = instance;

}(window));
