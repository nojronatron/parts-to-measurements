"use strict";

const {
  convertTeaspoonsToTablespoons,
  convertTablespoonsToTeaspoons,
  convertTablespoonsToCups,
  proportion,
  findSmallest,
  convertCupsToTBSP,
} = require("./proportion-converter");

const portions = [2, 2, 1, 1, 1, 0.5, 0.5];
const ttlTBSPNeeded = 16;
const ttlCupsNeeded = 5;

test("can convert tsp to TBSP", () => {
  expect(convertTeaspoonsToTablespoons(3)).toStrictEqual(1);
  expect(convertTeaspoonsToTablespoons(6)).toStrictEqual(2);
  expect(convertTeaspoonsToTablespoons(1)).toBeCloseTo(0.333);
});

test("can convert TBSP to tsp", () => {
  expect(convertTablespoonsToTeaspoons(3)).toStrictEqual(9);
  expect(convertTablespoonsToTeaspoons(1)).toStrictEqual(3);
  expect(convertTablespoonsToTeaspoons(0.333)).toBeCloseTo(1);
});

test("can find the smallest number", () => {
  expect(findSmallest(portions)).toStrictEqual(0.5);
  expect(findSmallest([0, 1, 2, 3, 4, 5, 6, -7, 8, 9])).toStrictEqual(-7);
});

test("can convert cups to Tablespoons", () => {
  expect(convertCupsToTBSP(1)).toStrictEqual(16);
  expect(convertCupsToTBSP(0.0625)).toStrictEqual(1);
  expect(convertCupsToTBSP(0.666)).toBeCloseTo(10.656);
});

test('can convert Tablespoons to cups', () => {
  expect(convertTablespoonsToCups(16)).toStrictEqual(1);
  expect(convertTablespoonsToCups(1)).toBeCloseTo(0.0625);
});

test("returns correct proportions for one whole mixture", () => {
  const proportionsArray = proportion(portions, ttlTBSPNeeded);
  expect(proportionsArray.length).toStrictEqual(portions.length);
  expect(proportionsArray).toStrictEqual([4, 4, 2, 2, 2, 1, 1]);
});

test("returns correct proportions for a proportionally small mixture", () => {
  const proportionsArray = proportion(portions, 4);
  expect(proportionsArray.length).toStrictEqual(portions.length);
  expect(proportionsArray).toStrictEqual([1, 1, 0.5, 0.5, 0.5, 0.25, 0.25]);
});

test("returns correct measurements in cups given the recipe proportions", () => {
  const proportionsArray = proportion(portions, ttlCupsNeeded);
  expect(proportionsArray.length).toStrictEqual(portions.length);
  expect(proportionsArray).toStrictEqual([
    1.25, 1.25, 0.625, 0.625, 0.625, 0.3125, 0.3125,
  ]);
});
