function designerPdfViewer(h, word) {
    // Write your code here
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


let map1 = new Map();
let arrayWord = [];
  
  
  for(let i = 0; i < h.length; i++){
      map1.set(alphabet[i], h[i]);
    };
    
  
  for(let i = 0; i < word.length; i++){
      arrayWord.push(map1.get(word[i]));
    }
    
  arrayWord.sort();
  
  return arrayWord[arrayWord.length - 1] * arrayWord.length; 
}
