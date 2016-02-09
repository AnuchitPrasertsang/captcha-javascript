describe('Captcha', function() {
    describe('First Pattern Left', function() {
        it('should be ONE', function() {
            var captcha = new Captcha(1, 1, 1, 1);
            expect(captcha.getLeft()).toEqual('ONE');
        });

        it('should be TWO', function() {
            var captcha = new Captcha(1, 2, 1, 1);
            expect(captcha.getLeft()).toEqual('TWO');
        });

        it('should be NINE', function() {
            var captcha = new Captcha(1, 9, 1, 1);
            expect(captcha.getLeft()).toEqual('NINE');
        });
    });

    describe('Second pattern Left', function() {
        it('should be ONE', function() {
            var captcha = new Captcha(2, 1, 1, 1);
            expect(captcha.getLeft()).toEqual('1');
        });
    });

    describe('Second pattern Right', function() {
        it('should be ONE', function() {
            var captcha = new Captcha(2, 1, 1, 1);
            expect(captcha.getRight()).toEqual('ONE');
        });
    });

    describe('First pattern Right', function() {
        it('should be 1', function() {
            var captcha = new Captcha(1, 1, 1, 1);
            expect(captcha.getRight()).toEqual('1');
        });
    });

    describe('Operator', function() {
        it('should be +', function() {
            var captcha = new Captcha(1, 1, 1, 1);
            expect(captcha.getOperator()).toEqual('+');
        });

        it('should be *', function() {
            var captcha = new Captcha(1, 1, 2, 1);
            expect(captcha.getOperator()).toEqual('*');
        });
        
        it('should be -', function() {
            var captcha = new Captcha(1, 1, 3, 1);
            expect(captcha.getOperator()).toEqual('-');
        });
    });
});
