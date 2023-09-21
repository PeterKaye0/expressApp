"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
let booksList = [{ title: 'title1', author: 'author1' }, { title: 'title2', author: 'author2' }];
class Book {
    constructor(author, title) {
        this.author = '';
        this.title = '';
    }
}
app.get('/', (req, res) => {
    res.send("Welcome");
});
app.get('/api/books', (req, res) => {
    res.send(booksList);
});
app.get('/api/book/:id', (req, res) => {
    let id = parseInt(req.params.id);
    res.send(booksList[id - 1]);
});
app.post('/api/books/addbook', (req, res) => {
    booksList.push({ title: req.body.title, author: req.body.author });
    res.send(booksList);
});
app.listen(3000, () => {
    console.log('started on container 3000');
});
exports.default = app;
