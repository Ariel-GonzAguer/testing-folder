// Define an object
const CatOfTime = {};

// Return a morning call
CatOfTime.announceDawn = () => {
  return 'Miauuuu!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
CatOfTime.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = CatOfTime;