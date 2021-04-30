// Code your solution here
function findMatching(arr,s){
  let m = arr.filter(matching => matching.toLowerCase() === s.toLowerCase());
  return m;
}

function fuzzyMatch(arr,s){
  let l = s.toLowerCase().charAt(0);
  let m = arr.filter(matching => matching.toLowerCase() === l)
  return m
}