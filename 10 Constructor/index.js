var User = /** @class */ (function () {
    function User(name, age, address) {
        this.name = "";
        this.age = 0;
        this.address = "";
        this.name = name;
        this.age = age;
        this.address = address;
    }
    User.prototype.getData = function () {
        console.log(this.name, this.age, this.address);
    };
    return User;
}());
// Second Option for Constructor
var User1 = /** @class */ (function () {
    function User1(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    User1.prototype.getData = function () {
        console.log(this.name, this.age, this.address);
    };
    return User1;
}());
var u = new User("Arbab", 22, "Pak");
var u1 = new User1("Arbab", 22, "Pak");
u.getData();
u1.getData();
