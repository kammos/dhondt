import { validate } from ".";
import { isInteger, notEmpty } from "./validators";

describe('notEmpty validator', () => {
    it('should accept non-empty strings and numbers', () => {
        [5, '5', 0, '0', '-1', -1].forEach(value => {
            const result = validate(value, () => {
                notEmpty();
            });

            expect(result).toBe(null);
        });
    });

    it('should reject null', () => {
        const result = validate(null, () => {
            notEmpty();
        });

        expect(result).toBe("can not be empty");
    });

    it('should reject empty string', () => {
        const result = validate("", () => {
            notEmpty();
        });

        expect(result).toBe("can not be empty");
    });

    it('should reject whitspace', () => {
        const result = validate(" \t\n", () => {
            notEmpty();
        });

        expect(result).toBe("can not be empty");
    });

    it('should reject NaN', () => {
        const result = validate(NaN, () => {
            notEmpty();
        });

        expect(result).toBe("can not be empty");
    });
});

describe('isInteger validator', () => {
    it('should correctly recognize integers', () => {
        [5, '5', 0, '0', '-1', -1].forEach(value => {
            const result = validate(value, () => {
                isInteger();
            });

            expect(result).toBe(null);
        });

        [0.5, '0.5', '', '0x112', 'dog', '12dog'].forEach(value => {
            const result = validate(value, () => {
                isInteger();
            });

            expect(result).toBe("integers only");
        });
    });

    it('should allow to overwrite message', () => {
        const result = validate('owca', () => {
            isInteger("failed");
        });

        expect(result).toBe("failed");
    });
});