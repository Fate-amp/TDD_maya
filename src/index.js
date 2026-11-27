import { ERROR_MESSAGES } from "../error.msg.js"

export const sayHello=(name)=>{
    if (typeof(name)!=="string"){
        throw new Error(ERROR_MESSAGES.stringErr)
    }
    return `Hello ${name}`
}