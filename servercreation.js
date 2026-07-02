const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.send('hello ')
})

app.get('/chikeen',(req,res)=>{
    var cus_chiken={
        name:'Butter chiken',
        weight: 200,
        is_legpiece: true,
        is_naan: true,
    }
    res.send('sure sir, i woould love to serve chiken')
})
app.listen(3000,()=>{
    console.log('listening on port 3000');
});
