class Personn {
    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    speak(what) {
        var message = 'I want to say : ' + what;
        return message;
    }

    presentme(){
        var message = 'hello i am ' + this.name + ' and i am ' + this.age + ' years old';
        return message;
    }

    walk(nbKm){
        return `I walked ${nbKm} kms`
    }

}

module.exports = Personn;