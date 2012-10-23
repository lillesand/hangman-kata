require('../lib/hangman.js');

describe('hangman', function() {
    
    it('should run', function() {
       expect(hangman.hello()).toBe("hang man"); 
    });
    
});