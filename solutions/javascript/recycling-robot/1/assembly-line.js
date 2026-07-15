// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  if (typeof(value) === "boolean") {
    return true
  }
  return false;
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
    if ((typeof(value) === "number" && Number.isFinite(value))|| typeof(value) === "bigint" ) {
      return true
    }
  return false
  
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  if (typeof(value) === 'object' && value !== null) {
    return true
  }
  return false
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  const reg = /^-?\d+$/;
  if (typeof(value) === 'string' && reg.test(value) === true) {
    return true
  }
  return false
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  if (object instanceof ElectronicDevice){
    return true
  }
  return false
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
return Array.isArray(value) && value.length > 0;
}
/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  return Array.isArray(value) && value.length == 0;
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) { 
 return object !== null && typeof(object) == 'object' && 'type' in object
  
}
/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
  if (object !== null && typeof(object) == 'object' && 'id' in object) {
    return true
  }
  else {
    throw new Error (`Object is missing the 'id' property`)
    }
 
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {
if (object !== null && typeof(object) == 'object' && Object.hasOwn(object, 'id')) {
  return true
}
  return false
  
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  return (
    object !== null && 
    typeof(object) === 'object' &&
    Object.hasOwn(object, 'type') &&
    object.type !== undefined  
    )
  }
   

