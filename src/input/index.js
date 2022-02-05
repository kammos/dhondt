import { cnb } from "cnbuilder";
import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import s from "./styles.scss";

const normalizeForNumber = value => 
    Number.isInteger(value) ? value : '';

export const Input = ({name, type, value, className, style, ...rest}) => {
    const inputValue = type === "number" 
        ? normalizeForNumber(value)
        : value;

    return <label className={cnb(s.label, s[type])}>
        <span className={s.labelText}>{startCase(camelCase(name))}:</span>
        <input name={name} type={type} className={s.input} value={inputValue} {...rest} />
    </label>
}