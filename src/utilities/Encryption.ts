const jwt = require('jsonwebtoken');
require('dotenv').config()
// const secretKey = 'createjsonwebtoken#';
// const expiry = '30d';
 export default class Encryption{
    constructor(){

    }

    public static async generateJwtToken(data: any) {
        console.log("before token", data)
         return await jwt.sign(data, process.env.JWT_TOKEN_SECRET_KEY, {expiresIn: process.env.JWT_TOKEN_EXPIRY});
        
    }

    public async verifyJwtToken(token: string | string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(token,process.env.JWT_TOKEN_SECRET_KEY);
            if(token.toString().startsWith('Bearer')) token = token.toString().split(' ')[1];
            jwt.verify(
                token,
                process.env.JWT_TOKEN_SECRET_KEY,
                (err: Error, decoded: any) => {
                   // console.log("decoded",decoded);
                    if (err) {
                        console.log(err)
                       resolve(null)
                    } else {
                        resolve(decoded);
                    }
                },
            );
        });
    }


}