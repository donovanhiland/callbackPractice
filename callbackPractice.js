/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
  var first = function(names, cb) {
    cb(names[0]);
  }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var last = function(names, cb) {
  cb(names[names.length - 1]);
}




last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(num1, num2, cb) {
  cb(num1 * num2);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

function contains(nameArray, nameToFind, cb) {
  var result = null;
    for (var i = 0; i < nameArray.length; i++) {
    if (nameArray[i] === nameToFind) {
      result = true;
      break;
    } else {
        result = false;
    }
  }
  cb(result);
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    // Code Here for uniq
    var uniq = function(uniqArray, cb) {
      /*
      create a new array
      loop through passed array and push values
      check the new value to see if it's already in the new array
        if it's not .push() it
        if it is, do nothing
      */
      var noDuplicates = [];
      for(var i = 0; i < uniqArray.length; i++) {
        if (noDuplicates.indexOf(uniqArray[i]) === -1) {
          noDuplicates.push(uniqArray[i]);
        }
      }
      cb(noDuplicates);
    }


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    var each = function(nameArr, cb) {
        for (var i = 0; i < nameArr.length; i++) {
          cb(nameArr[i], i);
        }
    }

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
 var getUserById = function(users, userId, cb) {
   for (var i = 0; i < users.length; i++) {
     if (users[i].id === userId) {
       var user = users[i];
     }
   }
   cb(user);
 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',git
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
