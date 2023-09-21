// && AND
// || OR
// ! NOT

const a = 3
const b = -2
                    
console.log(a > 0 && b > 0)    // TRUE E FALSE = FALSE
console.log(a > 0 || b > 0)    // TRUE OU FALSE = TRUE
console.log(a > 0 && !(b > 0)) // TRUE E TRUE = TRUE

console.log(false && (1/0))    // TRUE E FALSE = FALSE