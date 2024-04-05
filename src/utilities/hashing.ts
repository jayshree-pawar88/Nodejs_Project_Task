import bcrypt from "bcrypt";

 class Hashing{
    constructor(){
        
    }
    public async generateHash (password: string, saltRounds: number): Promise<any> {
        console.log('generateHash',password);
        return new Promise((resolve, reject) => {
            
            bcrypt.hash(password, saltRounds, (err: any, hash: any) => {
                //console.log("error in hashing password");
                if (!err) {
                    resolve(hash);
                }
                reject(err);
            });
        });
    }

    public async verifypassword (password: string, hashPassword: string): Promise<any> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hashPassword, (err: any, hash: any) => {
                if (!err) {
                    resolve(hash);
                }
                reject(err);
            });
        });
    }

}

export default new Hashing();