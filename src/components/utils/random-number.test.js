import randomNumber from './random-number';

describe('randomNumber()', () => {
  it('Should generate a number between min and max', () => {
    const min = 0
    const max = 10
    const generatedNumber = randomNumber(min, max)

    expect(generatedNumber).toBeGreaterThanOrEqual(min);
    expect(generatedNumber).toBeLessThanOrEqual(max);
  });

  it('Should throw an error if max is not greater than min', () => {
    const min = 10
    const max = 0

    expect(function() {
      randomNumber(min, max)
    }).toThrow();
  });
});
