

 export const checkValidData=(email,password)=>{
const isEmailValid=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password )

    if(!isEmailValid)  return "Email iD is not Valid"
    if(!isPasswordValid) return "Password is not Valid"

    return null
}