
export const usernameValidator=username=>{
    const emailRegex= /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    return emailRegex.test(username);
}

export const passValidator=password=>{
    const passRegex=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return passRegex.test(password);
}
export const emailValidator=email=>{
    const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}