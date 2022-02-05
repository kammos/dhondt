import { cnb } from "cnbuilder";
import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import s from "./styles.scss";

export const Input = ({name, type, className, style, ...rest}) => {
    return <label className={cnb(s.label, s[type])}>
        {startCase(camelCase(name))}:
        <input name={name} type={type} className={s.input} {...rest} />
    </label>
}