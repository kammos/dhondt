import { ValidationError } from "./validation-error";
import { validate } from ".";

describe('validate function', () => {
    const passing = jest.fn();
    const failing = jest.fn(() => { throw new ValidationError("test msg")});
    const failing2 = jest.fn(() => { throw new ValidationError("test msg2")});

    it('should return null if all validators pass', () => {
        const result = validate(null, () => {
            passing();
        });
        expect(result).toBe(null);
    });

    it('should return error text if a validator fails', () => {
        const result = validate(null, () => {
            failing();
        });

        expect(result).toBe("test msg");
    });

    it('should return error text even if a validator passes', () => {
        const result = validate(null, () => {
            passing();
            failing();
        });

        expect(result).toBe("test msg");
    });

    it('should return first error text even if multiple validators fail', () => {
        const result = validate(null, () => {
            failing();
            failing2();
        });

        expect(result).toBe("test msg");
    });
})