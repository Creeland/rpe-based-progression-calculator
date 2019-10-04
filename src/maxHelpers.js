const maxCalc = (weight, reps) => weight / (1.0278 - 0.0278 * reps);
const repMax = (weight, reps) => weight * (1.0278 - 0.0278 * reps);
const rpeModifiedReps = (reps, rpe) => {
  return reps + (10 - rpe);
};

// console.log("TABLE", Math.floor(getMaxTwenty(100, 7)));
// console.log("FUNCS", maxCalc(100, rpeModifiedReps(20, 7)));
// console.log(
//   "REP MAX",
//   repMax(maxCalc(100, rpeModifiedReps(20, 7)), rpeModifiedReps(15, 7))
// );

export { maxCalc, repMax, rpeModifiedReps };
