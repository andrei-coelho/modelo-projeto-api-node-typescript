import { Request, Response, Router } from 'express';
import authR from './routes/authR';
const router = Router()

export default ():Router => {
    router.use('/auth', authR())
    return router
}