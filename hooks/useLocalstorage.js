import WINDOW from "@/utils/window";

const useLocalStorage = (key) => {
  // returns value related to initial key.
  const item = WINDOW.localStorage.getItem(key);
  // return a function that will save given value to initial key
  const setItem = (value) => WINDOW.localStorage.setItem(key, value);
  return [item, setItem];
};

export default useLocalStorage;
