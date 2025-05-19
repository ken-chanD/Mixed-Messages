const names = [
  "Yonito", "Isimiyaki", "Yumisisleidy", "Yinislay", "Dionisio", "Seledonio", "Pancratico", "Tuelfino"
];

// To return a random Name from the names arrays
const randomName = () => {
  const randomNumberTo7 = Math.floor(Math.random() * 8);
  return names[randomNumberTo7];
};

// My idea is to output a sentence that says: Your name in the next life will be.
const funSentence = () => {
  return `Your name in another life will be: ${randomName()}`;
};
console.log(funSentence());