const express=require('express');
const db=express();
let parser=require('body-parser');

db.set('view engine','ejs');
db.use(parser.urlencoded({extended:false}));

 let myfav=[{

    name:'Messi',
    position:'CF'
 },
{
    name:'CR7',
    position:'Striker'
}

]

db.get('/', function(req,res,next)  {
  res.render('index');

})

db.get('/myfav', function(req,res) {
  res.render('myfav', {
      myfav: myfav
  });

})

db.get('/myfav/newplayers' , function(req,res) {
  res.render('newPlayers');
})

db.post('/myfav/newPlayers', function(req,res) {
  let playersData={
    name:req.body.playername,
    position:req.body.playerposition
  }
  myfav.push(playersData);
  res.redirect('/myfav');
})


db.listen('4000', function()  {
console.log('Yess Server is RUNNING!!');

})