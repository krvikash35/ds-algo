const decision = [];

function traverse(arr, pos) {
  // if reached the goal, print the decession path/steps
  if (pos === arr.length - 1) {
    return console.log(decision);
  }

  // iterate through all choice
  for (let i = pos + 1; i < arr.length; i++) {
      console.log(i)
    if (arr[pos] >= i - pos) { // if valid choice, consider it as decession
      decision.push(i);
      traverse(arr, i); //return when reached goal or no furthur decession possible
      decision.pop(i);
    }
  }
}

function jump(arr) {
  decision.push(0);
  traverse(arr, 0);
}

jump([2, 3, 1, 1, 4]);
