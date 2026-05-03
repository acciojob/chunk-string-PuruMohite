function stringChop(str, size) {
  // your code here
  let n = str.length;
  let i=0;
  let ans = [];  
  if(str == null || n==0){
	  return [];
  }
  while(i<n){
    if(i+size < n){
        ans.push(str.substring(i, i+size));
        i += size;
    }else{
        ans.push(str.substring(i, n));
        i = n;
    }
  } 
  return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, Number(size)));

