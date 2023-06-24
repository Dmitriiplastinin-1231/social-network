// export const required = (value) => {
//     debugger
//     return value ? undefined : 'Required'
// }
export const required = value => {
    return value ? undefined : 'Required';
}

export const confirmPassword = (cPassword, valueAllInputs) => {
    const { password } = valueAllInputs;
    return (password && cPassword !== password) ? "passwords don't match" : undefined;
}

const maxLengthCreator = (length) => {
    return (value) => value.length <= length? undefined : `Max value = ${length}`
}

export const maxLength15 = maxLengthCreator(15);
export const maxLength30 = maxLengthCreator(30);
