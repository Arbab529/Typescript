var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.sum = function () {
        return 2 + 3;
    };
    return App;
}());
var app = new App();
console.log(app.sum());
