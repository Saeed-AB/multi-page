const sum = (a: number, b: number) => {
  return a + b;
};

it("calculate price", () => {
  expect(sum(5, 3)).toBe(8);
});
