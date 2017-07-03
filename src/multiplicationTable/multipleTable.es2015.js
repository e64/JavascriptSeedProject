class multipleTable {
    verify(a, b, c) {
        if (a * b === c) {
            return true;
        }
        return false;
    }

    pickRandom() {
        let a = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        let b = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        return [a, b, a*b];
    }

    getTableOf(number) {
        let table = [];
        for (var i = 0; i <= 10; i++) {
            let row = [number, i, i * number]
            table.push(row);
        }
        return table;
    }

    getRandomFromTableOf(number) {
        let a = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        return Array(number, a, number * a);
    }

}


module.exports = multipleTable;