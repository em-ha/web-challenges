import { add, subtract, multiply, divide } from "./index.js";

test("add() returns a value of 5", () => {
  const result1 = add(2, 3);
  expect(result1).toBe(5);
});

test("add() returns a value of -1", () => {
  const result2 = add(2, -3);
  expect(result2).toBeLessThan(0);
});

test("add() returns a value of 0.3", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtract() returns a value of 10", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("subtract() returns a negative value", () => {
  expect(subtract(-15, -5)).toBeLessThan(0);
});

test("multiply() returns a value of 8", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("multiply() returns a negative value", () => {
  expect(multiply(-2, 4)).toBeLessThan(0);
});

test("multiply() returns a negative value", () => {
  expect(multiply(2, -4)).toBeLessThan(0);
});

test("multiply() returns a positive value if called with two negative arguments", () => {
  expect(multiply(-2, -4)).toBeGreaterThan(0);
});

test("divide() returns a value of 3", () => {
  expect(divide(9, 3)).toBe(3);
});

test("divide() returns 'You should not do this!' if called with 0 as second argument", () => {
  expect(divide(9, 0)).toBe("You should not do this!");
});
