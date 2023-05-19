export function isPasswordValid(password) {
    console.log(password)

    if (password.trim().length>=10){
        return true
    } else{
        return false 
    }
    }
