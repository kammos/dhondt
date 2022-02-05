import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import s from "./styles.scss";

export const Input = ({name, className, style, ...rest}) => {
    return <label className={s.label}>
        {startCase(camelCase(name))}:
        <input name={name} className={s.input} {...rest} />
    </label>
}