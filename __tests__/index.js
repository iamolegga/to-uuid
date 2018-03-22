const { toUUID } = require('../build/index');

const parts = ['01234567', '0123', '0123', '0123', '0123456789ab'];

test('should throw error when call with wrong args', () => {
  expect(() => toUUID(undefined)).toThrow();
  expect(() => toUUID(null)).toThrow();
  expect(() => toUUID(NaN)).toThrow();
  expect(() => toUUID({})).toThrow();
  expect(() => toUUID(new Date())).toThrow();
  expect(() => toUUID('')).toThrow();
  expect(() => toUUID(parts.join('').slice(0, -1))).toThrow();
});

test('should return formatted string when call with right args', () => {
  expect(toUUID(parts.join(''))).toBe(parts.join('-'));
});
