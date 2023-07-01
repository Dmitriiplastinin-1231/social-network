export const FormInput = ({input, meta: {touched, error}, ...props}) => {
    const errControl = touched && error;
    return (
        <>
            <input className={`${props.className} ${errControl && 'error'}`} {...input} type="text" />
            {errControl && <span className="error">{error}</span>}
        </>
    )
}
