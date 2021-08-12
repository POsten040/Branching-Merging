// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }


//FUNCTIONCAL PLAYER
const player = (name) => {
  return (sport) => {
    const obj = { 
      plays: () => {
        return `${name} plays ${sport}`
      }
    }
    return obj;
  }
}


const tim = player('Tim');
const timTennis = tim('tennis');


//CLASS PLAYER
class Player {
  constructor(name, sport){
    this.name = name;
    this.sport = sport;
  }
  plays(){
    return `${this.name} plays ${this.sport}`
  }
}

const TimClass = new Player('Tim', 'Tennis')

//ADDITIONAL FUNCTION
function TimeOut(){
  return 'time out!'
}


setInterval()
// STATE CLARIFICATIONS

//Function Declaration
function Delcaration(){
  //code;
  return;
}

//Function Expression
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}


//storeState()()  will return an empty object `{}`, the changeStateFunction takes whatever object is set to currentState as an argument

const objWithState = storeState();
//objWithState() returns the same empty object, and will always return that when called this way with no arguments, because the first function call has closed in that variable. It also can take a function as it's first argument which will override the one defined in the argument 
//objWithState(function)

const emptyObj = {};

const stateObj = {
  props: 'values that are used to determine what state the application is in, ie: what is visible, what page a person is on, who is logged in, e.t.c'
}


Object.is(thingWithState, emptyObj) //false
Object.is({}, emptyObj) // true

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const giveName = changeState('name')('Dylan Moran');

objWithState(giveName)

let giveNameExpanded = ('name') => {
  return ('Dylan Moran') => {
    return (state) => ({
      ...state,
      ['name'] : (state['name'] || 0) + 'Dylan Moran'
    })
  }
}
const storeStateEX = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

console.log(Delcaration())


// TWO SUM PROBLEM
//O(n) issue
const twoSum = (nums, target) => {
  let map = {};
  let out = [];
  for(let i=0; i<nums.length; i++){
      map[nums[i]] = i;
  }
  for(let i=0; i<nums.length; i++){
      let diff = target - nums[i];
      if(map[diff] != null && map[diff] != i){
          out.push(i);
          out.push(map[diff]);
      }
  }
  return [out[0], out[1]];
}

const twoSumLOOP = (nums, target) => {
  let map = {};
  let out = [];
  for(let i=0; i<nums.length; i++){
      for (let j = 0; j < nums.length; j++) {
        const el = nums[j];
        if((el + nums[i]) == target){
          return [nums.indexOf(nums[i]), nums.indexOf(nums[j])]
        } else{
          continue;
        }
      }
  }
}

function bigArr(){ 
  let out = []; 
  for(let i=0; i<1000; i++){
    out.push(i);
  }
  return out;
}

function NestedIfs(dollars){
  const costOfShoes = 15;
  if(dollars != null){
    
    if(dollars >= costOfShoes){
      const result = dollars/costOfShoes;
      console.log(('result = ' + result))
      return ('result = ' + result);
    }
  } else {
    console.log('error')
  }
}

const NoNest = (dollars) => {
  if(typeof(dollars) != typeof(1)) {
    console.log('error'); return 'error'
  };
  const costOfShoes = 15;
  if(dollars < costOfShoes) return 'no shoes for you';
  const result = dollars/costOfShoes;
  console.log(('result = ' + result))
  return ('result = ' + result);
}


