import { getColorByIndex } from "../misc";
import s from "./styles.scss";

export const Fieldset = ({color = 0, children, className, style, ...rest}) => {
    return <fieldset className={s.fieldset} style={{borderColor: getColorByIndex(color)}} {...rest} >
        {children}
    </fieldset>
}