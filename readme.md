# Parts To Measurements

I was making dinner and the recipe called for a spice mixture I didn't have so I turned to a reference document that used 'proportions' rather than actual measurements for creating many spicy mixtures. Being who I am, with a little time on my hands, I took to javascript to solve the problem for me:

This was a fun, short side-project that is a little abstract but worked for my immediate purposes.

## Solution Approach

How to convert proportions to actual measurements based on a known final quantity of mixture?

Starting with a set of portions:

- 2 parts a
- 2 parts b
- 1 parts c
- 1 parts d
- 1 parts e
- 0.5 parts f
- 0.5 parts g

And a final known quantity of mixture:

- 16 Tablespoons (1 cup)

Find the amounts to each ingredient necessary to get the final measurable volume:

1. Sum the proportions.
1. Find the ratio of proportions to one whole.
1. Find the multiplier of one whole compared to the total mixture needed.
1. Multiply each proportion by the multiplier from the ratio.
1. Return an array of values with the ratios applied (now in terms of TBSPs).

## Notes

This is demonstration code and as-is does not provide much utility as inputs and results must be manually (by custom programming) set and received.

A viable solution would refactor the code into a Module that could then be called in a WebApp like using React, Vue, etc.

You must know what unit you are working with, and you must be able to convert from base-10 to common baking unit systems (e.g. 1/4 cup is 0.125 cups, and 0.125 teaspon is 1/8 of a teaspoon).

## Usage

You do not need to install any packages to use the proportion-converter.js module. Just import/require 'proportion-converter.js' in your project and call the exported functions.

To run the Jest tests: 'npm install --save-dev jest'.

If you DO use this code, my only asks are:

1. Please credit my [GitHub Repo](github.com/nojronatron).
1. You agree I will be held harmless in any case, for any reason, and in every situation, from anything and everything you do with this code, including import it, require it, copy it, run it in a browser or other js-capable environment, etc.

## Functions

convertTablespoonsToTeaspoons: Input numberOfTablespoons. Returns numberOfTablespoons times 3.

convertTeaspoonsToTablespoons: Input numberOfTeaspoons. Returns numberOfTeaspoons divided by 3.

convertCupsToTBSP: Input numberOfCups. Returns numberOfCups times 16.

convertTablespoonsToCups: Input numberOfTableSpoons. Returns numberOfTableSpoons divided by 16.

proportion: Inputs listOfProportions, and totalVolumeWanted. Returns list of proportions adjusted to the total desired in a normalized unit (up to the caller to know).

findSmallest: Input listOfNumbers. Returns the smallest value (ignoring duplicates, an O(n) operation).

## Future

Conversion utility functions return a fraction in a appropriate terms:

- 0.125 cups would be returned as a string like '1/8 cup'.
- 2.25 Tablespoons would be returned as a string like '2 1/4 TBSP'.
- etc.
