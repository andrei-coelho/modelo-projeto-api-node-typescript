import { Express,  Request, Response } from 'express';
import file from '../utils/file';

export default (app:Express) => {

    app.use('/quem-somos', (req:Request, res:Response) => res.sendFile(file.get('/html_template/quem_somos.html')))
    app.use('/', (req:Request, res:Response) => res.sendFile(file.get('/html_template/home.html')))
    
}
