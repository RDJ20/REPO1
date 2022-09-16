const bcryptjs =  require("bcryptjs")

/**Contraseña sin encriptar: hola.12 */
const encrypt = async (passwordPlain)=>{
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash
};

/**pasar contraseña sin encriptar y encriptada*/
const compare = async(passswordPlain,hashPassword)=>{
    return await bcryptjs.compare(passswordPlain,hashPassword)
};

module.exports = {encrypt, compare};