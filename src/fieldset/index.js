import { useState } from "react";
import s from "./styles.scss";

let nextColor = 0;

export const Fieldset = ({children, className, style, ...rest}) => {
    const [color] = useState(() => nextColor++);
    
    const hueAngle = (color * 110) % 360;
    const borderColor = `hsl(${hueAngle}, 800%, 40%)`;

    return <fieldset className={s.fieldset} style={{borderColor}} {...rest} >
        {children}
    </fieldset>
}