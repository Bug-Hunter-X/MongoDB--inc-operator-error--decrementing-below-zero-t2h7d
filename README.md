# MongoDB $inc Operator Error: Decrementing Below Zero

This repository demonstrates a common error when using the `$inc` operator in MongoDB to decrement a counter.  The problem occurs when attempting to decrement a counter below zero, which can lead to unexpected behavior or data corruption.

## Bug Description
The provided `bug.js` file shows an example where `$inc` is used to decrement the 'count' field.  If the 'count' field is already zero or negative, the operation will still execute and result in a negative value, which is often not desired.

## Solution
The `bugSolution.js` file demonstrates how to safely decrement a counter using `$inc` by first checking if the current value is greater than zero using a conditional update.