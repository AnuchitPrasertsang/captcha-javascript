(function(global) {
    'use strict';

    var instance = function(pattern, left, operator, right) {
        return new Captcha(pattern, left, operator, right);
    };

    var strNum = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
    var strOperator = ['+', '*', '-'];

    instance.prototype = {
        getLeft: function() {
            return this.left;
        },

        getRight: function() {
            return this.right;
        },

        getOperator: function() {
            return strOperator[this.operator - 1];
        }
    };

    function Captcha(pattern, left, operator, right) {
        this.pattern = pattern;
        this.left = new global.OperandFactory().createLeft(pattern, left).toString();
        this.right = new global.OperandFactory().createRight(pattern, right).toString();
        this.operator = operator;
    }

    Captcha.prototype = instance.prototype;
    global.Captcha = instance;

}(window));
