import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser'

const app: any = express()
app.use(bodyParser.json());

let booksList: object[]= [{title: 'title1', author: 'author1'}, {title: 'title2',author: 'author2'}];

class Book {
    author:string;
    title:string;
    
    constructor(author: string, title: string){
        this.author = '';
        this.title = '';
    }
}


app.get('/', (req: Request, res: Response) => {
    res.send("Welcome");
});

app.get('/api/books', (req: Request, res: Response) => {
    res.send(booksList);
});

app.get('/api/book/:id', (req: Request, res: Response)=> {
    let id: number = parseInt(req.params.id);
    res.send(booksList[id-1]);
    
});

app.post('/api/books/addbook', (req: Request, res: Response) => {
    booksList.push({title: req.body.title, author: req.body.author} )
    res.send(booksList)
});


app.listen(3000, () => {

    console.log('started on container 3000')
})

export default app;