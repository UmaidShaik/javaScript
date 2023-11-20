"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(_fname, _lname) {
        this._fname = _fname;
        this._lname = _lname;
    }
    Customer.prototype.setFname = function (fname) {
        this._fname = fname;
    };
    Customer.prototype.setLname = function (lname) {
        this._lname = lname;
    };
    Customer.prototype.getFname = function () {
        return this._fname;
    };
    Customer.prototype.getLname = function () {
        return this._lname;
    };
    return Customer;
}());
exports.Customer = Customer;
