export const addUp = (a: number, b: number): number => {
  return a + b;
};

export const zero = (a: number): number => {
  return a - a;
};

export const name = (n: string): string => {
  return n;
};

export const dataFN = (a: number): number => {
  return parseInt(a.toString().split("").reverse().join(""));
};
