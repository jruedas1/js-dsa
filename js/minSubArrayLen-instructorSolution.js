   // function minSubArrayLen(nums, sum) {
   //    let total = 0;
   //    let start = 0;
   //    let end = 0;
   //    let minLen = Infinity;
   //
   //    while (start < nums.length) {
   //      // if current window doesn't add up to the given sum then
   //  		// move the window to right
   //      if(total < sum && end < nums.length){
   //        total += nums[end];
   //  			end++;
   //      }
   //      // if current window adds up to at least the sum given then
   //  		// we can shrink the window
   //      else if(total >= sum){
   //        minLen = Math.min(minLen, end-start);
   //  			total -= nums[start];
   //  			start++;
   //      }
   //      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
   //      else {
   //        break;
   //      }
   //    }
   //
   //    return minLen === Infinity ? 0 : minLen;
   //  }

   function minSubArrayLen(nums, sum) {
    // this is a running total
       let total = 0;
       // the window begins the program at just the
       // first element: start 0, end 0
       let start = 0;
       let end = 0;
       // starts the minLen at a value of Infinity,
       // but could as easily be NaN, undefined, or null
       let minLen = Infinity;

       // This solution loops over the entire length of the array

       while (start < nums.length) {
           // --INST: if current window doesn't add up to the given sum then
           // --INST: move the window to right
           // This happens if the total (the sum of elements being counted)
           // is less than the sum passed in, and as long as the end of the window
           // is not past the end of the array.
           // it starts at 0 and 0
           if(total < sum && end < nums.length){
               // as long as that is happening, the element is added to the running total
               // and the end of the window is moved forward by 1
               // then it'll come back around and keep adding until it
               // reaches the value passed in as sum
               total += nums[end];
               end++;
           }
               // --INST: if current window adds up to at least the sum given then
           // --INST: we can shrink the window
               // otherwise, if the running total is equal to or greater than the sum,
               // it subtracts the value of the element at the start, and moves the start
               // forward.
           // Then, if the difference between the end and start of the window --
           // the length of the subarray -- is less than the current minLen,
               // it resets minLen to equal the current window
               // then, it moves the start of the window forward and repeats the loop
           else if(total >= sum){
               minLen = Math.min(minLen, end-start);
               total -= nums[start];
               start++;
           }
           // --INST: current total less than required total but we reach the end, need this or else we'll be in an infinite loop
               // this means it's gotten to the end of the array and not succeeded in
               // adding up the elements to greater than or equal to the array elements
           else {
               // he could also return 0 directly here
               break;
           }
       }

       return minLen === Infinity ? 0 : minLen;
   }