// Defining initial state
initialState = {
  1: "#6F98A8",
  2: "#2B8EAD",
  3: "#2F454E",
  4: "#2B8EAD",
  5: "#2F454E",
  6: "#BFBFBF",
  7: "#BFBFBF",
  8: "#6F98A8",
  9: "#2F454E",
};
const initialStateNums = Object.keys(initialState);

// setting card position and background
const assignNumsAndBackground = (_nums) => {
  // working with nums array immutably
  const nums = _nums;
  const arrElements = document.querySelectorAll(".cardGrid div");
  nums.forEach((val, index) => {
    arrElements[index].innerHTML = val;
    arrElements[index].style.setProperty("--color", initialState[val]);
  });
};

// get shuffled order of nums
const getShuffledNum = (nums) => {
  // working with nums array immutably
  const orderedNums = nums;
  const shuffledNums = [];
  // Get unique array of card numbers
  while (shuffledNums.length !== orderedNums.length) {
    const random = parseInt(Math.random() * 10); // since Math.random returns floating point and we need single digit integer value
    if (random && !shuffledNums.includes(random)) {
      shuffledNums.push(random);
    }
  }
  console.log(shuffledNums);
  return shuffledNums;
};

/**
 * Sort click handler
 */
const sort = () => {
  // Reset to initial state
  assignNumsAndBackground(initialStateNums);
};

/**
 * Shuffle click handler
 */
const shuffle = () => {
  // Shuffle cards
  assignNumsAndBackground(getShuffledNum(initialStateNums));
};

window.onload = function () {
  const nums = document.querySelectorAll(".cardGrid div");
  assignNumsAndBackground(initialStateNums);
};
