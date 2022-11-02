const getSchedule = require('../src/getSchedule');

describe('getSchedule', () => {
  it('passado um animal retorna um array com os dias', () => {
    {
      const actual = getSchedule('lions');
      const expected = [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
      expect(actual).toEqual(expected);
    }
    {
      const actual = getSchedule('penguins');
      const expected = [ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ];
      expect(actual).toEqual(expected);
    }
  });

  it('sem parâmetros', () => {
    const actual = getSchedule();
    const expected = {
      'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      },
      'Wednesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
      },
      'Thursday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
      },
      'Friday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
      },
      'Saturday': {
        'officeHour': 'Open from 8am until 10pm',
        'exhibition': [
          'lions',  'tigers',
          'bears',  'penguins',
          'otters', 'frogs',
          'snakes', 'elephants',
        ],
      },
      'Sunday': {
        'officeHour': 'Open from 8am until 8pm',
        'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
      },
      'Monday': { 'officeHour': 'Closed', 'exhibition': 'No exhibitions this day' },
    };
    expect(actual).toEqual(expected);
  });
  
  it('parâmetro errado retorna um objeto com os horários e os animais', () => {
    const actual = getSchedule('qualquercoisa');
    const expected = {
      'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      },
      'Wednesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
      },
      'Thursday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
      },
      'Friday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
      },
      'Saturday': {
        'officeHour': 'Open from 8am until 10pm',
        'exhibition': [
          'lions',  'tigers',
          'bears',  'penguins',
          'otters', 'frogs',
          'snakes', 'elephants',
        ],
      },
      'Sunday': {
        'officeHour': 'Open from 8am until 8pm',
        'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
      },
      'Monday': { 'officeHour': 'Closed', 'exhibition': 'No exhibitions this day' },
    };
  
    expect(actual).toEqual(expected);
  });

  it('se "Monday" for passado informa que o zoo está fechado', () => {
    const actual = getSchedule('Monday');
    const expected = `Monday: ${{ 'officeHour': 'Closed', 'exhibition': 'No exhibitions this day' }}`;
    expect(actual).toEqual(expected);
  });

  it('retorna somente o horário do dia e os animais em exibição', () => {
  {
    const actual = getSchedule('Tuesday');
    const expected = `Tuesday: ${{ 'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ]}}`;
    expect(actual).toEqual(expected);
  }

  {
    const actual = getSchedule('Wednesday');
    const expected = `Wednesday: ${{
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ]}}`;
    expect(actual).toEqual(expected);
  }
  });
});
