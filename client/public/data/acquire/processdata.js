// let sksectioncurrent =
// let sksectionimgsrc =
// let sksectionoldprice=
// 
let fs = require('fs')

let listimgsrc =         
let listtext=
let listprice=
let listcommentnum=
let listcommentgoodrete=
let listseller=
     
let sksec =[]
for (let i=0;i<listimgsrc.length;i++) {
   let tmp = []
   tmp.push(listimgsrc[i])
   tmp.push(listtext[i])
   tmp.push(listcommentnum[i])
   tmp.push(listcommentgoodrete[i])
   tmp.push(listseller[i])
   tmp.push(listprice[i])
   tmp.push( '1000'+Math.floor(Math.random()*1000000000))
   sksec.push(tmp)
}


sksec  = JSON.stringify(sksec) 
fs.writeFile('./data.js', sksec, { 'flag': 'a' }, function(err) {
       if (err) {
           throw err;
       }
    
       console.log('Hello.');

   });

