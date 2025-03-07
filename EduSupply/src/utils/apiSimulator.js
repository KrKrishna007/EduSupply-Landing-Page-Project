export const fetchData = (data, delay = 1500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.05) {
        reject(new Error("Simulated API failure"));
      } else {
        resolve(data);
      }
    }, delay);
  });
};
