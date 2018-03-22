"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HYPHENS_POSITIONS = [8, 12, 16, 20];
var VALUE_REGEXP = /^[0-9A-Fa-f]{32}$/;
/**
 * Insert value to a source array at position
 * @param {Array} source array to insert
 * @param {number} position position to insert
 * @param {*} value value to insert
 * @returns {Array}
 */
function insert(source, position, value) {
    return source.slice(0, position).concat([value], source.slice(position));
}
/**
 * Format string to UUID format
 * @param {string} value string of 32 hexadecimal numbers
 * @returns {string} formatted toUUID string
 */
function toUUID(value) {
    if (typeof value !== 'string') {
        throw new Error("Value must be string");
    }
    if (!VALUE_REGEXP.test(value)) {
        throw new Error("Value must be string of 32 hexadecimal numbers");
    }
    var array = value.split('');
    var offset = 0;
    for (var _i = 0, HYPHENS_POSITIONS_1 = HYPHENS_POSITIONS; _i < HYPHENS_POSITIONS_1.length; _i++) {
        var num = HYPHENS_POSITIONS_1[_i];
        var position = num + offset++;
        array = insert(array, position, '-');
    }
    return array.join('');
}
exports.toUUID = toUUID;
