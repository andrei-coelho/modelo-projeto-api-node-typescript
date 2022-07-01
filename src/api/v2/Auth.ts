/**
 * @url auth
 */
class AuthPublic {

    /**
     * @uri :email/:senha 
     */
    static login(){
        console.log("Email: , Senha:");
    }

    /**
     * @header :session
     */
    static logoff(){
        console.log("DESLOGOU!")
    }

    /**
     * @body :email
     */
    static forgot(){
        console.log("Email: ")
    }

    /**
     * @body :code
     */
    static validate(){
        console.log("Code: ")
    }

}

export default AuthPublic