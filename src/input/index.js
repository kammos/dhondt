import { cnb } from "cnbuilder";
import { titleCase } from "../misc";
import s from "./styles.scss";

const normalizeForNumber = value => 
    Number.isInteger(value) ? value : '';

export const Input = ({name, type, value, error, className, style, ...rest}) => {
    const inputValue = type === "number" 
        ? normalizeForNumber(value)
        : value;

    return <label className={cnb(s.label, s[type], error && s.hasError)}>
        <div className={s.labelText}>
            <div>{titleCase(name)}</div>
            {error && <div className={s.error}>{error}</div>}
        </div> 
        <input name={name} type={type} className={s.input} value={inputValue} {...rest} />
    </label>
}