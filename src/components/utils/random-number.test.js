import randomNumber from './random-number';

describe('randomNumber()', () => {
  it('Should generate a number between min and max', () => {
    const min = 0;
    const max = 10;
    const generatedNumber = randomNumber(min, max);

    expect(generatedNumber).toBeGreaterThanOrEqual(min);
    expect(generatedNumber).toBeLessThanOrEqual(max);
  });

  it('Should equal min when random number is 0', () => {
    const min = 0;
    const max = 10;
    const generatedNumber = randomNumber(min, max, () => 0);

    expect(generatedNumber).toEqual(min);
  });

  it('Should equal max when random number is almost 1', () => {
    const min = 0;
    const max = 57;
    const generatedNumber = randomNumber(min, max, () => 0.99999);

    expect(generatedNumber).toEqual(max);
  });

  it('Should throw an error if max is not greater than min', () => {
    const min = 10;
    const max = 0;

    expect(function() {
      randomNumber(min, max)
    }).toThrow();
  });
});
