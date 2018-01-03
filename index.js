var express = require('express');
var app = express();

//------------------------------------HOME
app.get('/', function(req,res){
    res.send('Hello world!');
});
//--------------------------------------REVERSE TEXT
app.get('/reverse/:text', function (req, res){
    var text = req.params["text"];
    res.send(text.split("").reverse().join(""));
});
//-------------------------------------- ADD
app.get('/add', function (req, res){
    var a = req.query.a;
    console.log(a)
    var b = req.query.b;
    var numA = parseInt(a);
    var numB = parseInt(b);
    var add = numA + numB;
    var sum = add.toString();
    res.send(sum);
});

//-------------------------------PIGLATIN ISH

app.get('/piglatin/:text', function (req, res){
//----------VARIABLES BEING PULLED FROM INPUT
    var sentence = req.params['text'];
//----------SPACE WHERE + IS
    var saying = sentence.split('+');
//----------REGEX TO FILTER THROUGH LETTTERS
    var translate = saying.map(function(el){
//----------CHECKS FOR VOWELS
        var check = el.search(/[aeiou]/i)
//----------QU RULE
        var cheque = el.search(/(qu)/)
//----------SQU RULE
        var squ = el.search(/(squ)/)
        if(check == 0){
            tag = "yay"
            return el + tag;
        }
        else if(squ == 0){
            tag = el.slice(0,3);
            return el.slice(3) + tag + "ay"
        }
        else if(cheque == 0){
            tag = el.slice(0,2);
            return el.slice(2) + tag + "ay"

        }
        else if(check > 0 ){
            tag = el.slice(0,check);
            return el.slice(check) + tag + "ay"
        }
    })
    res.send(translate.join(" "));
});

//-----------------------------------THE SOURCE OR HOST

app.listen(3000, function (){
    console.log('Example app listening on post 3000!')
});
