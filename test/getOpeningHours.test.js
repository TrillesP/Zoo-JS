const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
    test('Verifica erros da função OpeningHours', () => {
        expect(() => getOpeningHours('Tuesday','XM:10-AM')).toThrow(new Error(`The hour should represent a number`));
        expect(() => getOpeningHours('Tuesday','12:EU-PM')).toThrow(new Error(`The minutes should represent a number`));
        expect(() => getOpeningHours('Tuesday','12:10-XU')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
        expect(() => getOpeningHours('Tuesday','30:10-AM')).toThrow(new Error('The hour must be between 0 and 12'));
        expect(() => getOpeningHours('Tuesday','12:90-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
        expect(() => getOpeningHours('Abacate','12:90-AM')).toThrow('The day must be valid. Example: Monday');
    })
    test('Verifica retornos da função OpeningHours', () => {
        expect(getOpeningHours('Monday', '10:12-AM')).toBe('The zoo is closed');
        expect(getOpeningHours('Friday', '05:35-PM')).toBe('The zoo is open');
        expect(getOpeningHours('Tuesday', '07:30-AM')).toBe('The zoo is closed');
        expect(getOpeningHours('Tuesday', '12:30-PM')).toBe('The zoo is open');
        expect(getOpeningHours()).toMatchObject({
            Tuesday: { open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thursday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: { open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 0, close: 0 },
          });
        hours.Thursday.open = 12;
        expect(getOpeningHours('Thursday', '4:30-AM')).toBe('The zoo is open');
        hours.Wednesday.close = 12;
        expect(getOpeningHours('Wednesday', '01:25-PM')).toBe('The zoo is closed');
    })
})
