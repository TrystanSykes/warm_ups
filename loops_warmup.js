for (var i = 1917; i < 2017; i++) {
   if (i % 4 === 0) {
   console.log(i);
    }
}

var first_found = false
for (var i = 0; i <= 200; i++) {
  if (i % 7 === 0) {
    console.log('multiples: ' + i);
  } if (i % 2 !== 0) {
    if (!first_found) {
      first_found = true;
    } else {
      console.log("2nd odd num: " + i);
      first_found = false;
    } if ()
  }
}