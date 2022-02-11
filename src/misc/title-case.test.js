import { titleCase } from "./title-case"

describe('title case helper', () => {
    it('should make kebab-case strings title-case', () => {
        expect(titleCase('pan-tadeusz')).toBe('Pan tadeusz');

        expect(titleCase('janko-muzykant')).toBe('Janko muzykant');
    });

    it('should work for single word as well', () => {
        expect(titleCase('krowa')).toBe('Krowa');
    });
});
