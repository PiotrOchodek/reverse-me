function reverseMe(str) {
  if (typeof str != 'string') {
    console.log('Parametr musi być typu string');
  } else return str.split('').reverse().join('');
}
