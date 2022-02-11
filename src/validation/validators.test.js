import { validate } from ".";
import { isInteger } from "./validators";


describe('isInteger validator', () => {
    it('should correctly recognize integers', () => {
        [5, '5', 0, '0'].forEach(value => {
            const result = validate(value, () => {
                isInteger();
            });

            expect(result).toBe(null);
        });

        [-1, 0.5, '-1', '0.5', '', '0x112', 'dog', '12dog'].forEach(value => {
            const result = validate(value, () => {
                isInteger();
            });

            expect(result).toBe("integers only");
        });
    });

    it('should allow to overwrite message', () => {
        const result = validate(-1, () => {
            isInteger("failed");
        });

        expect(result).toBe("failed");
    })
});