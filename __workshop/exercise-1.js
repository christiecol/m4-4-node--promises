// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (array.every((item) => typeof item === "string")) {
      resolve(array.map((word) => word.toUpperCase()));
    } else {
      reject("Error, all items must be a string");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  // write some code
  return array.sort();
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
