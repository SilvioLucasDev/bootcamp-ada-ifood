function inverterString(string) {
  console.log('1', string);
  if (string.length <= 1) {
    console.log('3', string);
    return string
  } else {
    console.log('2', string);
    return string.slice(-1) + inverterString(string.slice(0, -1))
  }
}

const stringOriginal = "Hello, World!"
console.log(inverterString(stringOriginal))
