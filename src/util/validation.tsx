// email Form
export const emailValidation = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// alphabat, number, special character, 8-16 
export const passwordValidation = (password: string) => {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/.test(password);
}