const RecursiveLoopExit = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    
  }
}

const uniquenessChecker = (string) => {
  for (let i = 0; i < string.length; i++){
    for ( let j = i +1; j < string.length; j++){
      if (string[i] === string[j]){
        return false;
      }
    }
  }
  return true;
}

const UniqueOrNot = (iterableThing) => {
  if(iterableThing === null || iterableThing === undefined){
    return `Expected a string, array, or object. But recieved ${iterableThing}!`
  }
  if(typeof(iterableThing) == 'string'){
    const arr = iterableThing.split("")
    console.log(arr);
    return UniqueOrNot(arr)
  }
  console.log(iterableThing)
  const objMap = iterableThing.reduce((target, current)=>{
    return {
      ...target,
      [iterableThing.indexOf(current)]: current,
    }
  }, {})
  console.log(objMap)
  for (let i = 0; i < objMap.length; i++) {
    const el = objMap[i];
    if(iterableThing.includes(el)){
      return 'Not Unique';
    }
  }
  return 'Unique!'
  };