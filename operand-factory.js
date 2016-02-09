(function(global) {
    var instance = function() {
        return new OperandFactory();
    };

    instance.prototype = {
        createLeft: function(pattern, value) {
            if (pattern === 1) {
                return new StringOperand(value);
            } else {
                return new NumberOperand(value);
            }
        },
        createRight: function(pattern, value) {
            if (pattern === 1) {
                return new NumberOperand(value);
            } else {
                return new StringOperand(value);
            }
        }
    };

    function OperandFactory() {}

    OperandFactory.prototype = instance.prototype;
    global.OperandFactory = instance;
}(window));
