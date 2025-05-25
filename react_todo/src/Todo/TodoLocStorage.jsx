const todokey = "reactTodo";

export const getLocalStorageData = () => {
  const rawtodos = localStorage.getItem(todokey);
  if (!rawtodos) return [];
  return JSON.parse(rawtodos); // Check if localStorage has any todos, if yes, parse them, otherwise return an empty array.
};

export const setLocalStorageData = (task) => {
  return localStorage.setItem(todokey, JSON.stringify(task)); // Store the task array in localStorage as a JSON string
};
