"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.prateek = "prateek";
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            console.log(this.prateek);
            return;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this.prateek = name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var newUser = new User();
newUser.setName = "gaurang";
newUser.getName;
