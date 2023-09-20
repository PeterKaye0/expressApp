const express = require("Express");

const app = express()

app.get('/',(req,res) => {
    res.send('hello world');
    console.log(typeof(res));
})


app.listen(3000, () =>{

    console.log('started on 3000')
})
console.log()