import s from "./styles.scss";

export const Prose = ({children, className, style, ...rest}) => {
    return <div className={s.prose} {...rest}>
        {children}
    </div>
}
