"use strict";

const convertTablespoonsToTeaspoons = (tableSpoons) => {
  const TBSP = Number.parseFloat(tableSpoons);
  return TBSP * 3;
};

const convertTeaspoonsToTablespoons = (teaspoons) => {
  const tsps = Number.parseFloat(teaspoons);
  return tsps / 3;
};

const convertCupsToTBSP = (cups) => {
  return Number.parseFloat(cups) * 16.0;
};

const convertTablespoonsToCups = (tableSpoons) => {
  return Number.parseFloat(tableSpoons) / 16;
};

const proportion = (arrayOfPortions, totalUnitsNeeded) => {
  // console.log('proportion function received', arrayOfPortions, totalUnitsNeeded);
  // sum arrayOfPortions values
  const initialvalue = 0;
  const sumOfProportions = arrayOfPortions.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialvalue
  );

  // find ratio of total units of mixture to sumOfProportions
  const multiplier = Number.parseFloat(totalUnitsNeeded / sumOfProportions);
  // console.log('multipler', multiplier);
  const proportionalAmounts = [];

  // apply multiplier to each proportion to convert to terms of portion of input units
  arrayOfPortions.forEach((portion) => {
    const currentItemPortion = Number.parseFloat(portion);
    const resizedProportion = Number.parseFloat(currentItemPortion * multiplier);
    proportionalAmounts.push(resizedProportion);
    // console.log('current portion:', currentItemPortion, 'proportional amount is now', resizedProportion);
  });

  return proportionalAmounts;
};

const findSmallest = (arr) => {
  let smallest = Number.MAX_VALUE;
  arr.forEach((item) => {
    const floatItem = Number.parseFloat(item);
    if (floatItem < smallest) {
      smallest = floatItem;
    }
  });
  return smallest;
};

module.exports = {
  convertTablespoonsToTeaspoons,
  convertTeaspoonsToTablespoons,
  convertTablespoonsToCups,
  convertCupsToTBSP,
  proportion,
  findSmallest,
};
