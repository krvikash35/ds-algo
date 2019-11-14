const decisions = [];
const decision = [];

function traverse(str, level, slot) {
  // if reached the goal, print the decision path to reach that goal
  if (level === slot) {
    //if previous decision already contain this then don't push it as solution
    const curDecision = Array.from(decision).sort().join("");
    const isDuplicate = decisions.some(d => d === curDecision);
    if (!isDuplicate) {
      decisions.push(curDecision);
    }
    return;
  }

  //iterate through all choices, return if all decision selected
  for (let i = 0; i < str.length; i++) {
    //if choice is valid(as per constrain) then put it in decision, make furthur decision, once back remove old decision
    if (!decision.includes(str[i])) { // if repetition allowed then remove this condition
      decision.push(str[i]);
      traverse(str, level + 1, slot);
      decision.pop();
    }
  }
}

function combination(str, slot) {
  traverse(str, 0, slot);
}

combination("abc", 2);
console.log(decisions);
