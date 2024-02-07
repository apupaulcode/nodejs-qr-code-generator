const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path')
const qrcode = require('qrcode');
const port = process.env.port || 3000


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.get('/',(req,res,next)=>{
    res.render('index');
});
app.post('/scan',(req,res,next)=>{
    const inputText = req.body.text;
    console.log(inputText);
    qrcode.toDataURL(inputText,(err,src)=>{
        res.render('scan',{
            qrSource:src,
        });
    })
})

app.listen(port,console.log(`Listening on port ${port}`));