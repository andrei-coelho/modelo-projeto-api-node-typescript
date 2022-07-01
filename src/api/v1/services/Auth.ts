import { Request, Response } from "express";

/**
 * @url auth
 */
class AuthPublic {

    /**
     * @uri :email/:senha 
     */
    static login(req:Request, res:Response){
        console.log("Email: , Senha:");
        res.send("TENTOU LOGAR")
    }

    /**
     * @header :session
     */
    static logoff(req:Request, res:Response){
        res.send("DESLOGOU")
        console.log("DESLOGOU!")
    }

    /**
     * @body :email
     */
    static forgot(req:Request, res:Response){
        res.send("forgot")
        console.log("forgot")
    }

    /**
     * @body :link
     */
     static validate(req:Request, res:Response){
        res.send("validate")
        console.log("validate")
    }
}

export default AuthPublic