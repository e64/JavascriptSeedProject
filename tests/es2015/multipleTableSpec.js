describe("tables de multiplication", function () {
    var multipleTable = require('../../src/multipleTable.es2015');
    beforeEach(function () {
        calc = new multipleTable();
    });
    describe("je verifie une entree", function () {
        it("3*7 = 21'", function () {
            expect(calc.verify(3, 7, 21)).toBe(true);
        });

        it("3*7 = 22'", function () {
            expect(calc.verify(3, 7, 22)).toBe(false);
        });
    });
    describe("Je tire un nombre au hasard", function () {
        it("les deux nombres doivent être inférieurs à 10", function () {
            for (var i = 0; i < 100; i++) {
                let numbers = calc.pickRandom();
                expect(numbers[0]).toBeLessThan(11);
                expect(numbers[1]).toBeLessThan(11);
            }
        });
    });
    describe("récupérer une table", function () {
        it("la table de 3", function () {

            let the3MultiplicationTable = calc.getTableOf(3);
            expect(the3MultiplicationTable[0][2]).toBe(0);
            expect(the3MultiplicationTable[1][2]).toBe(3);
            expect(the3MultiplicationTable[2][2]).toBe(6);
            expect(the3MultiplicationTable[3][2]).toBe(9);
            expect(the3MultiplicationTable[4][2]).toBe(12);
            expect(the3MultiplicationTable[5][2]).toBe(15);
            expect(the3MultiplicationTable[6][2]).toBe(18);
            expect(the3MultiplicationTable[7][2]).toBe(21);
            expect(the3MultiplicationTable[8][2]).toBe(24);
            expect(the3MultiplicationTable[9][2]).toBe(27);
            expect(the3MultiplicationTable[10][2]).toBe(30);
        });
    });
    describe("tirer un nombre aléatoirement dans une table", function () {
        it("la table de 3", function () {
            for (var i = 0; i < 100; i++) {
                let randomFromTableOf3 = calc.getRandomFromTableOf(3);
                expect(Array(0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30)).toContain(randomFromTableOf3[2]);
            }

        });
    });
});