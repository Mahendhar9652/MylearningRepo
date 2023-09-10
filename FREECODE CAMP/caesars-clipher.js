function rot13(str) {
    let decoded = "";
  
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) { // Check if uppercase letter
        charCode = ((charCode - 65 + 13) % 26) + 65; // Apply ROT13 transformation
      }
  
      decoded += String.fromCharCode(charCode); // Add transformed character to decoded string
    }
  
    return decoded;
  }
  
  const result = rot13("SERR PBQR PNZC");
  console.log(result); // Output: "FREE CODE CAMP"
  