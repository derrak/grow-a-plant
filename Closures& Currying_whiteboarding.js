//Practice with Closures and Currying
//https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/whiteboard-practice-closures

//Use a closure to create multiple functions for adding a prefix to a name. 
//The prefix could be Doctor, Duchess, Sir, and so on

// inputs name prefix

function addPrefix(prefix){
  return function(name) {
    return `${prefix} ${name}`
  }
}

const duchess = addPrefix("Duchess");
const sir = addPrefix("Sir");

const prefixSir = addPrefix("Sir");


//Problem #2
//Use a closure to create multiple functions for 
//making various animal noises. For example, it should 
//be possible to do the following:

function soundMaker(sound){
  return function(animal) {
    return `A(n) ${animal} makes the ${sound} sound`
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
const dogSound = soundMaker("woof");

lionSound("lion")
mouseSound("mouse")
dogSound("dog")

//Problem #3 (Harder)
//Use closures to create multiple functions for adding 
//both a prefix and a suffix to a name. For example, 
//it should be possible to do the following:

function nameEnhancer(prefix) {
  return function(suffix) {
      return function (name) {
          return `${prefix} ${name} ${suffix}`
        }
      }
  }

const misterJunior = nameEnhancer("Mister")("Junior");
const misterJuniorWrong = nameEnhancer("Junior")("Mister");
const duchessThird = nameEnhancer("Duchess")("The Third");

//Problem #4 (Harder)
//Use closures to create multiple functions to first 
//add to and then multiply a value. It should be possible 
//to do the following:

function addaMult(addNumber) { 
  return function(multiplyNumber) { 
      return function(inputNumber) { 
          return ((inputNumber+addNumber)*multiplyNumber)
        }
      }
  }

const addTwoMultiplyByThree = addaMult(2)(3);
const addFiveMultiplyByNine = addaMult(5)(9);

const addSix = addaMult(6);





const reverseString = (string) => {
  if (string === "") {
      return "";
  }
  else
  {
    return reverseString(string.splitArray[0]) + splitArray.pop();
    {
      function split(splitArray) {
        {
          const splitArray = string.trim().split(/\s+/);
        }
      }
    }
  }
}