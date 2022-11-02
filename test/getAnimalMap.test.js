const getAnimalMap = require('../src/getAnimalMap');

describe('getAnimalMap', () => {
  it('sem parâmetros retorna animais categorizados por local', () => {
    const actual = getAnimalMap();
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };
    expect(actual).toEqual(expected);
  });

  it('sem `includeNames` somente com a opção `sex: female` retorna todos os animais por local', () => {
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };
    const options = { sex: 'female' };
    const actual = getAnimalMap(options);
    expect(actual).toEqual(expected);
  });

  it('sem `includeNames` e as opções `sex: female` e `sorted: true` retorna animais categorizados por local', () => {
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };
    const options = { sex: 'female', sorted: true };
    const actual = getAnimalMap(options);
    expect(actual).toEqual(expected);
  });

  it('com `includeNames: true` retorna nomes', () => {
    const options = { includeNames: true };
    const actual = getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] },
      ],
    };
    expect(actual).toEqual(expected);
  });

  it('com `includeNames: true` e `sorted: true` retorna nomes de animais ordenados', () => {
    const options = { includeNames: true, sorted: true };
    const actual = getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
        { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: ['Edwardo', 'Hiram', 'Milan'] },
        { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
      ],
      SE: [
        { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
        { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] },
      ],
    };
    expect(actual).toEqual(expected);
  });

  it('com `includeNames`, `sex` especificado retorna somente nomes de animais do sexo', () => {
    const options = { includeNames: true, sex: 'female' };
    const actual = getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Zena', 'Dee'] },
        { giraffes: ['Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: [] },
        { elephants: ['Ilana', 'Bea'] },
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Mercedes', 'Margherita'] },
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette'] },
      ],
    };
    expect(actual).toEqual(expected);
  });

  it('com `includeNames`, `sex` especificado e `sort: true` retorna animais do sexo ordenados por nome', () => {
    const options = { includeNames: true, sex: 'female', sorted: true };
    const actual = getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Dee', 'Zena'] },
        { giraffes: ['Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: [] },
        { elephants: ['Bea', 'Ilana'] },
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Margherita', 'Mercedes'] },
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] },
        { snakes: ['Paulette'] },
      ],
    };
    expect(actual).toEqual(expected);
  });
});