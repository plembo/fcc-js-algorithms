// Return array of the largest numbers in each of 4 subarrays

function largestOfFour(arr) {
    var ans = [];
    for(var i=0; i < arr.length; i++) {
        var l = 0;
        for(var s=0; s < arr[i].length; s++) {
            if(arr[i][s] > l) {
                l = arr[i][s];
            }
        }
        ans.push(l);
  }

  return ans;
}

var r = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(r);
