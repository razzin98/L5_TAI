var Complex = /** @class */ (function () {
    function Complex(re, imag) {
        this.re = re;
        this.imag = imag;
    }
    Complex.prototype.getRe = function () {
        return this.re;
    };
    Complex.prototype.getImag = function () {
        return this.imag;
    };
    Complex.prototype.add = function (obj) {
        return new Complex(this.re + obj.re, this.imag + obj.imag);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.re - obj.re, this.imag - obj.imag);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt((this.re * this.re) + (this.imag * this.imag));
    };
    Complex.prototype.write = function () {
        return this;
    };
    return Complex;
}());
var complex1 = new Complex(18, 10);
var complex2 = new Complex(9, 5);
console.log('Dodawanie: ', complex1.getRe(), ', ', complex1.getImag(), 'i + ', complex2.getRe(), ', ', complex2.getImag(), 'i = ', complex1.add(complex2).write());
var sub = complex1.sub(complex2);
console.log('Odejmowanie: ', complex1.getRe(), ', ', complex1.getImag(), 'i - ', complex2.getRe(), ', ', complex2.getImag(), 'i = ', complex1.sub(complex2).write());
console.log("Moduł :", complex1.sub(complex2).mod());
