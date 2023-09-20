export {};
const express = require('express');

const app: any = express()

app.get('/', (req: any, res: any) => {
    res.send("Hello World");
    
});

app.listen(3000, () => {

    console.log('started on container 3000')
})