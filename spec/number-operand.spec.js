describe("Number Operand", function() {
    it("should be 1", function() {
        var numberOperand = new NumberOperand(1);
        expect(numberOperand.toString()).toEqual('1');
    });

    it("should be 3", function() {
        var numberOperand = new NumberOperand(3);
        expect(numberOperand.toString()).toEqual('3');
    });

    it("should be 9", function() {
        var numberOperand = new NumberOperand(9);
        expect(numberOperand.toString()).toEqual('9');
    });
});
