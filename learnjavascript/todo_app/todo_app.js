"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todos = /** @class */ (function () {
    function Todos() {
        this.todos = [
            { title: "Learn JavaScript", category: "work" },
            { title: "Meditate", category: "personal" }
        ];
    }
    Todos.prototype.getAll = function () {
        return this.todos;
    };
    Todos.prototype.getCount = function () {
        return this.todos.length;
    };
    Todos.prototype.add = function (title, category) {
        this.todos.push({ title: title, category: category });
    };
    Todos.prototype.getWork = function () {
        return this.todos.filter(function (todo) { return todo.category === "work"; });
    };
    Todos.prototype.getWorkCount = function () {
        return this.getWork().length;
    };
    Todos.prototype.getPersonal = function () {
        return this.todos.filter(function (todo) { return todo.category === "personal"; });
    };
    Todos.prototype.getPersonalCount = function () {
        return this.getPersonal().length;
    };
    return Todos;
}());
exports.default = Todos;
