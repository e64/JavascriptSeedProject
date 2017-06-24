//import Personn from '../src/personn.es2015';
// Specs
describe("La librairie de Personn", function() {
    var Person = require('../src/personn.es2015');
    beforeEach(function() {
        personn = new Person('john Doe', 43);
    });
    describe("je parle", function() {

        it("'Devrait dire hello i am john Doe and i am 43 old'", function() {
            expect(personn.presentme()).toBe('hello i am john Doe and i am 43 years old');
        });

        it("'Devrait dire 'I want to say : hello world'", function() {
            expect(personn.speak('hello world')).toBe('I want to say : hello world');
        });
    });
});