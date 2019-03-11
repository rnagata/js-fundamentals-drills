/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray;
function doubleArray(arrParam){
  // check to make sure parameter is array.
  if (Array.isArray(arrParam) === false)
  {
    return null;
  }
  // if so continue and intialize doubleArray.
  doubleArray = [];
  // for each element in the parameter array, invoke unamed function immediately.
  // push the value of the current element multiplied by two to doubleArray.
  arrParam.forEach(
    function(element){
      doubleArray.push(element * 2);
    }
  );
  // return doubleArray's value.
  return doubleArray;
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays;
function sumArrays(arrParam1, arrParam2){
  if (Array.isArray(arrParam1) === false ||
      Array.isArray(arrParam2) === false)
  {
    return null;
  }
  sumArrays = 0;
  arrParam1.forEach(
    function(element){
      sumArrays += element;
    }
  )
  arrParam2.forEach(
    function(element){
      sumArrays += element;
    }
  )
  return sumArrays;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount;
function stringCount(strParam){
  if (typeof strParam !== 'string'){
    return console.log("Parameter not a string");
  }
  stringCount = strParam.length;
  return stringCount;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength;
function arrayLength(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  arrayLength = arrParam.length;
  return arrayLength;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll;
function countAll(arrParam){
  if(Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  countAll = 0;
  arrParam.forEach(
    function(element){
      countAll += element;
    }
  )
  return countAll;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings;
function countStrings(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  countStrings = [];
  arrParam.forEach(
    function(element){
      countStrings.push(element.length);
    }
  )
  return countStrings;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings;
function countAllStrings(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  countAllStrings = 0;
  arrParam.forEach(
    function(element){
      countAllStrings += element.length;
    }
  )
  return countAllStrings;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray;
function convertToArray(objParam){
  // get names of the properties that the parameter has.
  var propertyNames = Object.getOwnPropertyNames(objParam);
  // intialize another array to contain a reference to the property on the parameter.
  var propertyRef = [];
  // intialize convertToArray, which will contain the values of the parameter
  // properties.
  convertToArray = [];
  // for each element in propertyNames, invoke unamed function immediately. In that
  // function the getOwnPropertyDescriptor method is given the parameter object and
  // the string stored in the current propertyNames element and returns a reference
  // to the property on the parameter that has that name if it is found.
  propertyNames.forEach(
    function(element){
      propertyRef.push(Object.getOwnPropertyDescriptor(objParam, element));
    }
  )
  // for each element in propertyRef, invoke unamed function immediately. In that
  // function the element's referenced property value is added to convertToArray.
  propertyRef.forEach(
    function(element){
      convertToArray.push(element.value);
    }
  )
  // return convertToArray
  return convertToArray;
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize;
function objectSize(objParam){
  var propertyNames = Object.getOwnPropertyNames(objParam);
  if (propertyNames.length > 0){
    objectSize = propertyNames.length;
  }
  return objectSize;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray;
function createZeroFilledArray(numParam){
  if (typeof numParam !== 'number'){
    return console.log("Parameter not a number");
  }
  createZeroFilledArray = [];
  for (count = 0; count < numParam; count++){
    createZeroFilledArray.push(0);
  }
  return createZeroFilledArray;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray;
function poppedArray(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  poppedArray = arrParam;
  poppedArray.pop();
  return poppedArray;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString;
function splitString(strParam){
  if (typeof strParam !== 'string'){
    return console.log("Parameter not a string");
  }
  splitString = [];
  for (count = 0; count < strParam.length; count++){
    splitString.push(strParam.charAt(count));
  }
  return splitString;
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast;
function lengthOfLast(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  var lastIndex = arrParam.length - 1;
  lengthOfLast = arrParam[lastIndex].length;
  return lengthOfLast;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen;
function sumBelowTen(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  sumBelowTen = 0;
  arrParam.forEach(
    // invoked unamed function checks if the current element of the parameter
    // contains a number value less than 10. If so, it's value is added to sumBelowTen
    // element.value is not used here as doing so returns undefined. A number type 
    // can be checked by just using the element.
    function(element)
    {
      if (element < 10){
        sumBelowTen += element;
      }
    }
  )
  return sumBelowTen;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters;
function moreThanTenLetters(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  moreThanTenLetters = 0;
  arrParam.forEach(
    function(element){
      if (element.length > 10){
        moreThanTenLetters++;
      }
    }
  )
  return moreThanTenLetters;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll;
function multiplyAll(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  // initalize multiplyAll variable as a number with value of 1 so that when the
  // first element of the parameter array is addressed, the product of all elements
  // starts at the first element's value.
  multiplyAll = 1;
  arrParam.forEach(
    function(element){
      multiplyAll *= element;
    }
  )
  return multiplyAll;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;
function sumAllPositive(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  sumAllPositive = 0;
  arrParam.forEach(
    function(element){
      if (element >= 0){
        sumAllPositive += element;
      }
    }
  )
  return sumAllPositive;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;
function stringCountBelowThree(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  stringCountBelowThree = 0;
  arrParam.forEach(
    function(element){
      if (element.length <= 3){
        stringCountBelowThree++;
      }
    }
  )
  return stringCountBelowThree;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;
function countObjects(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  countObjects = 0;
  arrParam.forEach(
    function(element){
      // works, but isn't bug-proofed as null values return object as well.
      if (typeof element === 'object'){
        countObjects++;
      }
    }
  )
  return countObjects;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;
function getObjectKeys(objParam){
  if (typeof objParam !== 'object'){
    return console.log("Parameter not an Object");
  }
  getObjectKeys = Object.getOwnPropertyNames(objParam);
  return getObjectKeys;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;
function getObjectValues(objParam){
  if (typeof objParam !== 'object'){
    return console.log("Parameter not an Object");
  }
  var paramKeyNames = Object.getOwnPropertyNames(objParam);
  var paramKeyRef = [];
  paramKeyNames.forEach(
    function (element){
      paramKeyRef.push(Object.getOwnPropertyDescriptor(objParam, element));
    }
  )
  getObjectValues = [];
  paramKeyRef.forEach(
    function (element){
      getObjectValues.push(element.value);
    }
  )
  return getObjectValues;
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;
function makeObject(keyParam, valParam){
  // instructions say second parameter is string but its really a number.
  if (typeof keyParam !== 'string' || typeof valParam !== 'number'){
    return console.log("Parameter 1 not String, Parameter 2 not Number");
  }
  makeObject = {};
  // Adding a property with given value requires writable, configurable, and enumerable
  // attributes to be true
  Object.defineProperty(makeObject, keyParam, 
    {value:valParam, writable: true, configurable : true, enumerable : true});
  return makeObject;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;
function makeObjectReverse(valParam, keyParam){
  if (typeof valParam !== 'number' || typeof keyParam !== 'string'){
    return console.log("Parameter 1 not Number, Parameter 1 not String");
  }
  makeObjectReverse = {};
  Object.defineProperty(makeObjectReverse, keyParam,
    {value: valParam, writable : true, configurable : true, enumerable : true});
  return makeObjectReverse;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;
function tupleToObject(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  tupleToObject = {};
  var keyName;
  var keyValue;
  arrParam.forEach(
    function(element){
      if (typeof element === 'string'){
        keyName = element;
      } else if (typeof element === 'number'){
        keyValue = element;
      }
    }
  )
  Object.defineProperty(tupleToObject, keyName, 
    { value : keyValue, writable : true, configurable : true, enumerable : true});
  return tupleToObject;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;
function tupleToObjectReverse(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  tupleToObjectReverse = {};
  var keyName;
  var keyValue;
  arrParam.forEach(
    function(element){
      if (typeof element === 'string'){
        keyName = element;
      } else if (typeof element === 'number'){
        keyValue = element;
      }
    }
  )
  Object.defineProperty(tupleToObjectReverse, keyName, 
    { value : keyValue, writable : true, configurable : true, enumerable : true});
  return tupleToObjectReverse;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;
function strToKeys(arrParam){
  if (Array.isArray(arrParam) !== true){
    console.log("Parameter not an Array");
  }
  strToKeys = {};
  arrParam.forEach(
    function(element){
      if (typeof element === 'string'){
        Object.defineProperty(strToKeys, element, 
          { value : 0, writable : true, configurable : true, enumerable : true});
      }
    }
  )
  return strToKeys;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;
function getValues(objParam){
  if (typeof objParam !== 'object'){
    return console.log("Parameter not an Object");
  }
  var paramKeyNames = Object.getOwnPropertyNames(objParam);
  var paramKeyRef = [];
  paramKeyNames.forEach(
    function (element){
      paramKeyRef.push(Object.getOwnPropertyDescriptor(objParam, element));
    }
  )
  getValues = [];
  paramKeyRef.forEach(
    function (element){
      getValues.push(element.value);
    }
  )
  return getValues;

}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;
function getKeys(objParam){
  if (typeof objParam !== 'object'){
    console.log("Parameter not an Object")
  }
  getKeys = Object.getOwnPropertyNames(objParam);
  return getKeys;
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;
function objectToArray(objParam){
  if (typeof objParam !== 'object'){
    console.log("Parameter not an Object");
  }
  // Object.entries checks the properties of the given object and returns each
  // key-value pair as seperate tupples, where the first element is the property
  // name and the second is the property value.
  objectToArray = Object.entries(objParam);
  return objectToArray;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;
function arrayToObject(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  arrayToObject = {};
  arrParam.forEach(
    function (element) {
      Object.defineProperty(arrayToObject, element, {
        value : false, writable : true, configurable : true, enumerable : true
      })
    }
  )
  return arrayToObject;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;
function arraysToObject(arrParam1, arrParam2){
  if (Array.isArray(arrParam1) !== true || Array.isArray(arrParam2) !== true)
  {
    return console.log("Parameters not all Arrays");
  }
  arraysToObject = {};
  for (count = 0; count < arrParam1.length; count++)
  {
    Object.defineProperty(arraysToObject, arrParam1[count], 
      {value : arrParam2[count], writable : true, configurable : true, enumerable : true})
  }
  return arraysToObject;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;
function objectsToTuples(objParam1, objParam2){
  if (typeof objParam1 !== 'object' || typeof objParam2 !== 'object'){
    return console.log("Parameters are not Objects");
  }
  objectsToTuples = Object.entries(objParam1).concat(Object.entries(objParam2));
  return objectsToTuples;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;
function mapArrayValues(arrParam){
  if (Array.isArray(arrParam) !== true){
    console.log("Parameter not an Array");
  }
  mapArrayValues = {};
  arrParam.forEach(
    function(element){
      Object.defineProperty(mapArrayValues, element, 
        { value : true, writable : true, configurable : true, enumerable : true});
    }
  )
  return mapArrayValues;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;
function mapStringCounts(arrParam){
  if (Array.isArray(arrParam) !== true) {
    return console.log("Parameter not an Array");
  }
  mapStringCounts = {};
  arrParam.forEach(
    function(element)
    {
      if (element.length >= 5){
        Object.defineProperty(mapStringCounts, element, {
          value : true, writable : true, configurable : true, enumerable : true
        });
      } else {
        Object.defineProperty(mapStringCounts, element, {
          value : false, writable : true, enumerable : true, configurable : true
        });
      }
    }
  );
  return mapStringCounts;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;
function arrayToObjectNums(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  arrayToObjectNums = {};
  arrParam.forEach(
    function (element) {
      Object.defineProperty(arrayToObjectNums, element.toString(), {
        value: true, writable : true, configurable : true, enumerable : true
      });
    }
  );
  return arrayToObjectNums;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;
function stringToKeys(strParam){
  if (typeof strParam !== 'string'){
    return console.log("Parameter not a String");
  }
  stringToKeys = {};
  for (count = 0; count < strParam.length; count++){
    Object.defineProperty(stringToKeys, strParam.charAt(count), {
      value : true, writable : true, configurable : true, enumerable : true
    });
  }
  return stringToKeys;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;
function charCountMap(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  charCountMap = {};
  arrParam.forEach(
    function (element) {
      Object.defineProperty(charCountMap, element, {
        value : element.length, writable : true, configurable : true, enumerable : true
      });
    }
  );
  return charCountMap;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;
function frequencyMap(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  frequencyMap = {};
  arrParam.forEach(
    function (element) {
      // if there isn't a property named for the string value in the current element
      if (frequencyMap.hasOwnProperty(element) === false){
        // then define that property and give it a starting value of one
        Object.defineProperty(frequencyMap, element, {
          value : 1, writable : true, configurable : true, enumerable : true
        });
        // If the property does exist then we increase that property's value by one
        // to account for the occurance of an additional character
      } else if (frequencyMap.hasOwnProperty(element) === true){
        frequencyMap[element]++;
      }
    }
  )
  return frequencyMap;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;
function tupleConvertToObject(arrParam){
  if (Array.isArray(arrParam) !== true){
    return console.log("Parameter not an Array");
  }
  tupleConvertToObject = {};
  arrParam.forEach(
    function (element) {
      // element[0] refers to the first element of the tuple, 
      // element[1] refers to the second element of the tuple.
      // the first element of a tuple is the equivalent of 
      // arrParam [0][0], and the second element of the tuple 
      // equivalent to arrParam [0][1].
      Object.defineProperty(tupleConvertToObject, element[0], {
        value : element[1], writable : true, configurable : true, enumerable : true
      });
    }
  );
  return tupleConvertToObject;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
