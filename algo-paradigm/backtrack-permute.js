const decessions = []
const decession = [];


function traverse(str, pos) {
  // if reached the goal, print the decession path to reach that goal
  if (pos === str.length) {
    decessions.push(Array.from(decession))
    return
  }

  //iterate through all choices, return if all decession selected
  for (let i = 0; i < str.length; i++) {
    //if choice is valid(as per constrain) then put it in decession, make furthur decession, once back remove old decession
    if (!decession.includes(str[i])) {
      decession.push(str[i]);
      traverse(str, pos + 1);
      decession.pop();
    }
  }
}

function permute(str) {
  traverse(str, 0);
}

permute("ab");
console.log(decessions)