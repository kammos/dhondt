import s from "./styles.scss";

export const Fieldset = ({color = 0, children, className, style, ...rest}) => {
    const hueAngle = (color * 110) % 360;
    const borderColor = `hsl(${hueAngle}, 80%, 40%)`;

    return <fieldset className={s.fieldset} style={{borderColor}} {...rest} >
        {children}
    </fieldset>
}