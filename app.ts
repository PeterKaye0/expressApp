import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser'
import path from 'path'

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

app.get('/api/duck', async (req:Request, res: Response) => {

    try{
    console.log('getting duck')
    let duckraw = await fetch('https://random-d.uk/api/v2/random')
    let duckjson = await duckraw.json();
    res.send(`<html><img src=${duckjson.url}></html>`);
    }
    catch{
        console.log('💩');
    }
});


app.listen(3000, () => {
    console.log('started on localhost');
})

export default app;