export const FormInput = ({input, meta: {touched, error}, ...props}) => {
    const errControl = touched && error;
    return (
        <>
            <input className={`${props.className} ${errControl && 'error'}`} {...input} type="text" />
            {errControl && <span className="error">{error}</span>}
        </>
    )
}

export const ProfileFormSelect = ({ input, meta: {error}, ...props }) => {
    return (
        <>
            <select className={`${props.className}`} type={props.type}{...input}>
                <option value={null}>*не указано*</option>
                <option value='man'>Парень</option>
                <option value='women'>Девушка</option>
                <option value='Другое'>Другое</option>
            </select>
            {error && <span className="error">{error}</span>}
        </>
    )
}