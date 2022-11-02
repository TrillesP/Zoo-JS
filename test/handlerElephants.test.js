const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    test('Verifica função de elefantes', () => {
        expect(handlerElephants()).toBeUndefined();
        expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
        expect(handlerElephants('count')).toBe(4);
        expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]);
        expect(handlerElephants('averageAge')).toBe(10.5);
        expect(handlerElephants('location')).toBe('NW');
        expect(handlerElephants('popularity')).toBe(5);
        expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
        expect(handlerElephants('abacate')).toBeNull();
    })
});
    