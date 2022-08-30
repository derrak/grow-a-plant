// const recurseReverse = (string) => {
//   if (string === "") {
//     return "";
//   } else {
//     return recurseReverse(string.substring(1)) + string[0];
//   }
// }


const recurseReverse = (string) => {
  
  if (string === "") {
    return "";
  } 
  else {
    const wordArray = string.trim().split(/\s+/);
    const firstWord = wordArray.shift().toString();
    console.log(firstWord);
    const string2 = wordArray.join(" ").toString();
    return recurseReverse(string2) + firstWord + (" ");
  }
}



const wordArray = "I am a cat".trim().split(/\s+/);


recurseReverse() {
  return "f";
  recurseReverse() {
    return "e";
    recurseReverse() {
      return "r";
      recurseReverse() {
        return "n";
        recurseReverse() {
          return "";
        }
      }
    }
  }