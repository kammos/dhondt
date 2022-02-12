import { getColorByIndex } from "../misc";
import s from "./styles.scss";
import common from "../common.scss";

export const Fieldset = ({color = 0, children, legend, className, style, ...rest}) => {
    return <fieldset className={s.fieldset} style={{borderColor: getColorByIndex(color)}} {...rest} >
        <legend className={common.srOnly}>
            {legend}
        </legend>
        {children}
    </fieldset>
}