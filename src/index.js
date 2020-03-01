
exports.min = function min (array) {
  if ((Array.isArray(array))&&(array.length>0)){
    array.sort((a, b)=> a - b);    
    return (array[0])}
  else return 0;
}

exports.max = function max (array) {
  if ((Array.isArray(array))&&(array.length>0)){
    array.sort((a, b)=> a - b);    
    return array[array.length-1]}
  else return 0;
}

exports.avg = function avg (array) {
  if ((Array.isArray(array))&&(array.length>0)){
    let sum=array.reduce((x,y)=>x+y) 
    return (sum/array.length)}
  else return 0;

}
