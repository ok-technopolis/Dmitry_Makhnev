const assert = require('assert');


function normalizeFloatPart(number, floatSize) {
    if (number === 0) {
        return number;
    }

    var cof = number < 0
        ? -1
        : 1;
    var preparedNumber = cof * number;

    var intPart = Math.floor(preparedNumber);
    var floatPart = preparedNumber - intPart;

    if (floatPart) {
        if (floatSize == null) {
            floatSize = 2;
        }
        var tenPow = Math.pow(10, floatSize);
        var rounded = Math.round(floatPart * tenPow) / tenPow;

        return cof * (intPart + rounded);
    }

    return number;
}

describe('normalizeFloatPart', () => {

    it('base', () => {
        assert.strictEqual(normalizeFloatPart(.3 + .6), 0.9);
    });

    it('negative', () => {
        assert.strictEqual(normalizeFloatPart(-.3 + -.6), -0.9);
    });

    it('zero', () => {
        assert.strictEqual(normalizeFloatPart(0), 1);
    });

});




// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() {
//         return `My name is ${this.name}`;
//     }
// }
//
// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     sayName() {
//         return `Mur. ${super.sayName()}`
//     }
// }
//
// var Tom = new Cat('Tom');
// console.log(Tom.sayName());

// var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
//
// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//
// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
//
// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//
// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//
// var Animal = function () {
//     function Animal(name) {
//         _classCallCheck(this, Animal);
//
//         this.name = name;
//     }
//
//     _createClass(Animal, [{
//         key: 'sayName',
//         value: function sayName() {
//             return 'My name is ' + this.name;
//         }
//     }]);
//
//     return Animal;
// }();
//
// var Cat = function (_Animal) {
//     _inherits(Cat, _Animal);
//
//     function Cat(name) {
//         _classCallCheck(this, Cat);
//
//         return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name));
//     }
//
//     _createClass(Cat, [{
//         key: 'sayName',
//         value: function sayName() {
//             return 'Mur. ' + _get(Cat.prototype.__proto__ || Object.getPrototypeOf(Cat.prototype), 'sayName', this).call(this);
//         }
//     }]);
//
//     return Cat;
// }(Animal);
//
// var Tom = new Cat('Tom');
// console.log(Tom.sayName());