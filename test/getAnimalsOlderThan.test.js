const getAnimalsOlderThan = require('../src/getAnimalsOlderThan');

describe('getAnimalsOlderThan', () => {
  it('Testa se todos os animais dessa espécie possuem a idade mínima especificada', () => {
    {
      const actual = getAnimalsOlderThan('otters', 7);
      const expected = true;
      expect(actual).toEqual(expected);
    }
    {
      const actual = getAnimalsOlderThan('penguins', 10);
      const expected = false;
      expect(actual).toEqual(expected);
    }
  });
});
