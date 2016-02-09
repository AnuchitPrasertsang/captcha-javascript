describe('String Operand', function () {
  it('should be ONE', function () {
      var stringOperand = new StringOperand(1);
      expect(stringOperand.toString()).toEqual('ONE');
  });
  
  it('should be TWO', function () {
      var stringOperand = new StringOperand(2);
      expect(stringOperand.toString()).toEqual('TWO');
  });

  it('should be NINE', function () {
      var stringOperand = new StringOperand(9);
      expect(stringOperand.toString()).toEqual('NINE');
  });
});
