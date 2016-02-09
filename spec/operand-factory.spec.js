describe('Operand Factory', function() {
    describe('First pattern create left', function() {
        var operand;

        beforeEach(function() {
            var operandFactory = new OperandFactory();
            operand = operandFactory.createLeft(1, 1);
        });

        it('should be instanceof StringOperand', function() {
            expect(operand instanceof StringOperand).toBeTruthy();
        });

        it('should be ONE', function() {
            expect(operand.toString()).toEqual('ONE');
        });

    });
    describe('Second pattern create left', function() {
        var operand;

        beforeEach(function() {
            var operandFactory = new OperandFactory();
            operand = operandFactory.createLeft(2, 1);
        });

        it('should be instanceof NumberOperand', function() {
            expect(operand instanceof NumberOperand).toBeTruthy();
        });

        it('should be 1', function() {
            expect(operand.toString()).toEqual('1');
        });

    });
    describe('Fisrt pattern create right', function() {
        var operand;

        beforeEach(function() {
            var operandFactory = new OperandFactory();
            operand = operandFactory.createRight(1, 1);
        });

        it('should be instanceof NumberOperand', function() {
            expect(operand instanceof NumberOperand).toBeTruthy();
        });

        it('should be 1', function() {
            expect(operand.toString()).toEqual('1');
        });
    });

    describe('Second pattern create right', function() {
        var operand;

        beforeEach(function() {
            var operandFactory = new OperandFactory();
            operand = operandFactory.createRight(2, 1);
        });

        it('should be instanceof StringOperand', function() {
            expect(operand instanceof StringOperand).toBeTruthy();
        });

        it('should be ONE', function() {
            expect(operand.toString()).toEqual('ONE');
        });
    });
});
