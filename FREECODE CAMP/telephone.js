function telephoneCheck(str) {
    // Regular expression to match valid US phone numbers
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
    return regex.test(str);
  }
  
  const result = telephoneCheck("555-555-5555");
  console.log(result); // Output: true
  