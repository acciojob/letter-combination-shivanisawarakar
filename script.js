function letterCombinations(input_digit) {
   //Complete the function
	let size = input_digit.length,
       mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
       res = [''];

   for (let i=0; i<size; i++) {
       let currentVal = input_digit[i]-'0';
       if (currentVal > 1 && currentVal < 10) {
           let tmp = [],
               maplen = mapping[currentVal].length,
               reslen = res.length;

           for (let j=0; j<reslen; j++) {
               tmp.push(res[j]);
           }
           res = [];

           for (let j=0; j<reslen; j++) {
               for (let k=0; k<maplen; k++) {
                  res.push(tmp[j] + mapping[currentVal][k]);  
               }
           }
       }
   }

   if (size < 1 || (res.length === 1 && res[0] === '')) {
       return [];
   }

   return res;
}

module.exports = letterCombinations;