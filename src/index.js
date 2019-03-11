module.exports = function getZerosCount(number, base) {
  // your implementation
  let k = 1;
  let p = 2;
  let b = base;
  while (b%p) {
  b =(b/p) ;
  p++;
 
  }; 
 
  //alert(p);
  while (number/Math.pow(p,k)>1){
k=k+1;

  }
  
  //alert(k);
let m = Math.floor(Math.log(base) / Math.log(p));

//alert(m);

let result = 0;
 for(let i=1; i<k; i++){
   result = result + Math.floor(number/Math.pow(p,i))
 }
 //alert(result);
 result = Math.floor(result/m);
return result;
}