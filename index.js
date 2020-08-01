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

sort = () => {
  let nums = document.querySelectorAll(".cardGrid div");
  assignNums(initialState, nums);
};

shuffle = () => {
  alert("shuffle");
};

window.onload = function () {
  let nums = document.querySelectorAll(".cardGrid div");
  assignNums(initialState, nums);
};

assignNums = (_numObj, arrElements) => {
  let numObj = Object.keys(initialState);
  arrElements.forEach((element, index) => {
    element.innerHTML = numObj[index];
    element.style.backgroundColor = _numObj[index + 1];
  });
};
