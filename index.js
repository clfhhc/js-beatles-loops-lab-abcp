function theBeatlesPlay(musicians,instruments){
  var array=[]
  for (let i=0; i<musicians.length;i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  let i=0, array=[];
  while (i<facts.length) {
    array.push(facts[i]+"!!!")
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  let array=[];
  do {
    array.push("I love the Beatles!");
    n++
  } while (n<15);
  return array;
}