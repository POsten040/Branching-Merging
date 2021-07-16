let x  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumstri";
let y = 100;



function count10(x=0){
  switch (x<10) {
    case true:
      console.log(x+1);
      return count10(x+1)
      break;
    default:
      console.log('done')
  }
}
$(document).ready(function(){
  $('#button').click(function (event){
    count10();
  // console.log(event);
  // console.log('ping')
  });
  $('.parent').click((e)=>{
    // console.log(e);
    // console.log('pong')
  })
});


// $('#button').click(function (event){
//   console.log(event.currentTarget);
//   console.log('ping')
//   //let out = [];
//   // for (let x = 0; x < array.length -1; x++) {
//   //   const element = array[x];
//   //   out.push(element);
//   // }
//   // return out;
// });

function sorted3(arr, out = []){ 
    console.log('start')
    if(arr.length >= 1){
      // console.log(count)
      console.log(arr)
      let bigNum = Math.max(...arr);  
      out.push(bigNum);
      arr.splice(arr.indexOf(bigNum), 1);
      let newArr = arr;
      console.log(out + " " + 'Out before loop')
      console.log(arr + " " + "array before loop")
      sorted3(newArr, out);
      return out;
    } else if(arr.length < 1){
      console.log(out)
      return arr;
      console.log(arr + " " + "array")
    }
}


function Sieve(money, change = {'P': 0, 'N': 0, 'D': 0, 'Q': 0}){
	if(money > 0 ){
  	if(money > .25){
    	change.Q = Math.floor(money/.25);
      let remainingMoney = money - (change.Q * .25) 
      // console.log(change.Q)
      // console.log('money' + remainingMoney)
      return Sieve(remainingMoney, change)
    } else if (money > .10){
    	change.D = Math.floor(money/.10);
      let remainingMoney = money - (change.D * .10) 
      // console.log('change' + ' ' + change.D)
      // console.log('money' + remainingMoney)
      return Sieve(remainingMoney, change)
    } else if (money > .05){
    	change.N = Math.floor(money/.05);
      let remainingMoney = money - (change.N * .05)
      // console.log(change)
      // console.log(remainingMoney)
      return Sieve(remainingMoney, change)
    } else if (money > .01){
    	change.P = Math.floor(money/.01);
      let remainingMoney = (money - (change.P * .01))

      // console.log(remainingMoney)
      return `Your Money's worth ${change.Q} quarters, ${change.D} dimes, ${change.N} nickles, ${change.P} pennies`;
    }
  } else {
  	return 'something went wrong!';
  }
}



//RECURSION
function Reverse(word) {
  let outArr =[]
  let wordArr = word.split('');
  let x = [wordArr.length-1];
  for(let i=0; i<wordArr.length; i++){
    if(wordArr[i] == undefined){
      continue;
    } else {
      
    }
  }
  return outArr.join();
}