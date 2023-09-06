import { useState } from "react";

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

export const InputPhoto = ({ input, meta: { error }, ...props }) => {

    let [inputBg, setInputBg] = useState('');
    let [url, setUrl] = useState('');
    let reader = new FileReader();
    reader.onload = () => {
        if (url !== reader.result) {
            setUrl(reader.result);
        }
        console.log(url)
    }
    if (inputBg) {
        reader.readAsDataURL(inputBg);
    }

    let changeInput = (e) => {
        if (e.target.files.length && e.target.value) {

            // reader.readAsDataURL(e.target.files[0]);
            // inputBg = 1
            setInputBg(e.target.files[0])
            const formData = new FormData();
            formData.append('bg', e.target.files[0]);
            input.onChange(formData);
        }
    }

    return (
        <label className={props.classNameLabel}>
            {inputBg ?<img className={props.classNameImg} src={url} alt={props.alt} /> : <></>}
            <input className={props.className} type="file" onChange={(e) => { inputBg = 2; changeInput(e) }} name='bg' />
            <div className={props.classNameSvg}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
            </div>
        </label>
    )

}