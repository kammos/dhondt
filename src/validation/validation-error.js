export class ValidationError extends Error {
    constructor(message, defaultMessage) {
        super(message ?? defaultMessage);
        this.name = "ValidationError";
    }
}