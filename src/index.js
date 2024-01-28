'use strict'


dividend: for (let num = 2; num <= 100; num++) {
  divider: for (let del = 2; del < num; del++) {
    if (num % del === 0) continue dividend;  
  }
 console.log(num);
}