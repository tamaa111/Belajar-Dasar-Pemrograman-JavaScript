import { strict as assert } from "node:assert";
import test from "node:test";
import sum from "./index.js";

test("Testing sum function with positive number", () => {
  assert.equal(sum(5, 3), 8, "Expected 5 + 3 to equal 8");
});

test("Testing sum function with zero", () => {
  assert.equal(sum(0, 5), 5, "Expected 0 + 5 to equal 5");
  assert.equal(sum(5, 0), 5, "Expected 5 + 0 to equal 5");
});

test("Testing sum function with non-numeric inputs", () => {
  assert.equal(sum("5", 3), 0, 'Expected sum of string "5" and 3 to return 0');
  assert.equal(sum(5, "3"), 0, 'Expected sum of 5 and string "3" to return 0');
  assert.equal(
    sum("5", "3"),
    0,
    'Expected sum of strings "5" and "3" to return 0'
  );
});

test("Testing sum function with negative numbers", () => {
  assert.equal(sum(-5, 3), 0, "Expected sum of -5 and 3 to return 0");
  assert.equal(sum(5, -3), 0, "Expected sum of 5 and -3 to return 0");
  assert.equal(sum(-5, -3), 0, "Expected sum of -5 and -3 to return 0");
});
