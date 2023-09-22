"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/api/duck', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getting duck');
        let duckraw = yield fetch('https://random-d.uk/api/v2/random');
        let duckjson = yield duckraw.json();
        res.send(`<html><img src=${duckjson.url}></html>`);
    }
    catch (_a) {
        console.log('💩');
    }
}));
app.listen(3000, () => {
    console.log('started on container 3000');
});
exports.default = app;
