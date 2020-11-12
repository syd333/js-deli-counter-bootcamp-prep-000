function takeANumber(currentLineOfPeople, name) {
// currentLineOfPeople = array
// name = string
//push name into array
// return welcome message
//"Welcome, Ada. You are number 1 in line."
currentLineOfPeople.push(name)
return 'Welcome, ' + name + '. You are number ' + currentLineOfPeople.length + ' in line.'
}

function nowServing(currentLineOfPeople) {
  // currentLineOfPeople = array
  // returns first person in line & remove individual
  if (currentLineOfPeople.length === 0) {
      return "There is nobody waiting to be served!"
  } else {
    var current = currentLineOfPeople.shift()
      return "Currently serving " + current + '.'
  }
  }

function currentLine(currentLineOfPeople) {
  // array of names
  // returns string in order
  // "The line is currently: 1. Ada, 2. Grace"
  // for (var i =0; i < currentLineOfPeople.length; i++) {
  //   return 'The line is currently: 1. ' + currentLineOfPeople[i] + ', 2. ' + currentLineOfPeople[i + 1] + ', 3. ' + currentLineOfPeople[2]
  // }
  if (currentLineOfPeople.length === 0) {
    return 'The line is currently empty.'
  } else {
    return 'The line is currently: 1. ' + currentLineOfPeople[0] + ', 2. ' + currentLineOfPeople[1] + ', 3. ' + currentLineOfPeople[2]
  }
}
var person = 0;
function newTakeANum(person) {
  // input = number
  //output = number
  // return person ++
  return person + 1;
}
