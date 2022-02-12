import { ValidationError } from "./validation-error";
import { validated } from "./validated";

const isWhitespace = value => typeof value === "string" && value.replace(/\s/g, '').length === 0;

export const notEmpty = 
    validator(value => value != null && !isWhitespace(value) && !Number.isNaN(value), "can not be empty");

export const moreThan = 
    parametrizedValidator((value, target) => value > target, target => `more than ${target}`);

export const lessThan = 
    parametrizedValidator((value, target) => value < target, target => `less than ${target}`);

export const atLeast = 
    parametrizedValidator((value, target) => value >= target, target => `at least ${target}`);

export const atMost = 
    parametrizedValidator((value, target) => value <= target, target => `at most ${target}`);

export const isInteger = 
    validator(value => Number.isInteger(value) || (typeof value == "string" && value.match(/^[-\d]+$/)), "integers only");






/***************************************************************************************************************************/
function parametrizedValidator(condition, defaultMessage) {
    return (target, msg) => {
        if (!condition(validated.current, target)) {
            throw new ValidationError(msg, typeof defaultMessage === 'function' ? defaultMessage(target) : defaultMessage)
        }
    }
}

function validator(condition, defaultMessage) {
    return (msg) => {
        if (!condition(validated.current)) {
            throw new ValidationError(msg, typeof defaultMessage === 'function' ? defaultMessage() : defaultMessage)
        }
    }
} 