import RandomNumberGenerator from "./RandomNumberGenerator";

const ArrayShuffler = (arr) => {
  let index = arr.length;
  while (index !== 0) {
    const randomIndex = RandomNumberGenerator(index);
    index--;
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  }
  return arr;
};

export default ArrayShuffler;
