var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.createEmail = function (name) {
        return console.log("".concat(name, "@gmail.com"));
    };
    return Email;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.addUser = function (name) {
        console.log("".concat(name, "@gmail.com"));
    };
    return Manager;
}(Email));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.addUser = function (name) {
        console.log("".concat(name, "@gmail.com"));
    };
    return Admin;
}(Email));
var user1 = new Manager();
user1.addUser("Arbab");
user1.createEmail("Arbab");
var user2 = new Admin();
user1.addUser("Admin");
user1.createEmail("Admin");
