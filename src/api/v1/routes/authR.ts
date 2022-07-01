import { Router } from 'express';
import AuthPublic from '../services/Auth';
const router =  Router()

export default ():Router => {

    router.get('/login', AuthPublic.login)

    return router
}