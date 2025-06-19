// console.log("Server is running");

// var add = function(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(2, `1256`)); 

// var add = (a,b) => {
//     return a + b;
// }

// console.log(add(2, `1256989`));

// var fs = require('fs');
// var os = require('os');
// var _ = require('lodash');

// var user = os.userInfo();
// console.log(user);
// console.log(`The user is ${user.username} and the home directory is ${user.homedir}`);

// fs.appendFile('yendu.txt', `The user is ${user.username} and the home directory is ${user.homedir}`, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// const notes = require('./notes');

// var age = notes.age;
// console.log(age);
// var result = notes.addnumber(age+18,0);
// console.log(result);
// console.log("server file is available");

// var books = [" book1", " book2", " book3", 1,2,2,3,4,5,5,5,6,5];
// console.log(_.uniq(books));

// console.log(_.isString(23));
 
// const jsonstring =  {
//     name: "abhi",
//     age: 20,
//     city: "bangalore"
// }

// const jsonstringify = JSON.stringify(jsonstring); // covert the object to string

// console.log(jsonstringify);
// console.log(typeof jsonstringify);

// const parsejson = JSON.parse(jsonstringify); // convert the string to object
// console.log(parsejson);
// console.log(typeof parsejson);


const express = require('express')
// const express = require('express')
const app = express()
const db = require('./db')
const person = require('./modals/persons')
const menuitem = require('./modals/menuitems')
require('dotenv').config()



const port = process.env.PORT || 3000;

const bodyparser = require('body-parser')
app.use(bodyparser.json())


app.get('/', (req, res) => {

  res.send('Welome to my SCHOOL')
})



const menuitemroutes = require('./router/menuitemroutes')
const personroutes = require('./router/personroutes')
app.use('/person', personroutes)
app.use('/menuitem', menuitemroutes)
  


app.listen(port, () => {
  console.log('Example app listening on port 3000!')
})


