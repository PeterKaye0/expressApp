"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
var booksList = [{ title: 'title1', author: 'author1' }, { title: 'title2', author: 'author2' }];
var Book = /** @class */ (function () {
    function Book(author, title) {
        this.author = '';
        this.title = '';
    }
    return Book;
}());
app.get('/', function (req, res) {
    res.send("local");
});
app.get('/api/books', function (req, res) {
    res.send(booksList);
});
app.get('/api/book/:id', function (req, res) {
    var id = parseInt(req.params.id);
    res.send(booksList[id - 1]);
});
app.post('/api/books/addbook', function (req, res) {
    booksList.push({ title: req.body.title, author: req.body.author });
    res.send(booksList);
});
app.listen(3000, function () {
    console.log('started on container 3000');
});
exports.default = app;
