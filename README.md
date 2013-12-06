# README

## jsFactory

This library offers a set of functions which extent the functionality of various JavaScripts objects such as Array. Below you may find a brief description for each one of them.

## Array Object Functions

> ### unique() 
> Returns the distinct elements of the array. Example: 

```javascript
[1,2,2,3,3,2,1,1,2,3,4,3,3,3,4,3,3,2,2,1].unique() === [1,2,3,4]
```
---
> ### freq() 
> Returns a JSON object with keys the distinct elements of the array and values their frequencies in the array. Example:

```javascript
[1,2,3,4,2,3,4,3,4,4].freq() === {1:1, 2:2, 3:3, 4:4}
```
---
> ### shuffle()
> Returns the array shuffled. Example:

```javascript
[1,2,3,4,5].shuffle() === [2,4,3,1,5]
```
---
> ### zip(array)
> Zips itself with the array given as argument. Example:

```javascript
[1,3,5,7,9].zip([2,4,6,8]) === [1,2,3,4,5,6,7,8,9]
```
---
> ### set(start, end, value)
> Replaces the elements of array from [start] to [end] with the [value]. Example:

```javascript
[1,2,3,4,5,6,7,8].set(2,4,'a') === [1,2,'a','a','a',6,7,8]
```
---
> ### setAll(value)
Replaces all the elements of the array with the [value]. Example:

```javascript
[1,2,3,4,5].setAll('a') === ['a', 'a', 'a', 'a', 'a']
```
---
> ### rotate(offset)
> Rotates the elements of the array [offset] positions leftwise of rightwise depending on the sign of the [offset]. Example:

```javascript
[1,2,3,4,5,6].rotate(3) === [4,5,6,1,2,3]

[1,2,3,4,5,6].rotate(-2) === [3,4,5,6,1,2]

[1,2,3,4,5,6].rotate(9) === [4,5,6,1,2,3]
```
---  
