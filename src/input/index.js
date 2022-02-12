import { cnb } from "cnbuilder";
import { titleCase, useId } from "../misc";
import s from "./styles.scss";

const normalizeForNumber = value => 
    Number.isInteger(value) ? value : '';

export const Input = ({name, type, value, error, className, style, ...rest}) => {
    const errorId = useId(`${name}-error`);
    const inputValue = type === "number" 
        ? normalizeForNumber(value)
        : value;

    return <div className={cnb(s.container, error && s.hasError)}>
        <label className={cnb(s.label, s[type])}>
            <div className={s.labelText}>{titleCase(name)}</div>
            <input 
                className={s.input} 
                name={name} 
                type={type} 
                value={inputValue} 
                aria-invalid={error ? "true" : "false"}
                aria-errormessage={error ? errorId : null}
                {...rest}
            />
        </label>
        <div className={s.error} id={errorId} hidden={!error} aria-live="polite">
            {error}
        </div>
    </div>
}