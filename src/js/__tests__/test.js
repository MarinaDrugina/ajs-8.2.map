import ErrorRepository from '../app.js';

const errorRep = new ErrorRepository();

test('Correct error code', () => {
  const result = errorRep.translate(2);
  expect(result).toBe('Unauthorized');
});

test('Uncorrect error code', () => {
  const result = errorRep.translate(5);
  expect(result).toBe('Unknown error');
});
