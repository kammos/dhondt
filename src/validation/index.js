import { validated } from "./validated";
import { ValidationError } from "./validation-error";

export const validate = (value, block) => {
    try {
        validated.current = value;
        block();
        return null;
    } catch (ex) {
        if (ex instanceof ValidationError) {
            return ex.message;
        } else {
            throw ex;
        }
    }
};

export * from './validators';