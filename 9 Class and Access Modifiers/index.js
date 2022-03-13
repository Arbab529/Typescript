var User = /** @class */ (function () {
    function User() {
        this.name = "";
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function () {
        console.log(this.name);
        this.getNameLength();
    };
    User.prototype.getNameLength = function () {
        console.log(this.name.length);
    };
    return User;
}());
var user = new User();
user.setName("Arbab");
user.getName();
