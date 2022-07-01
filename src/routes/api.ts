import { Express } from "express";
import v1_route from '../api/v1/routes'

export default (app:Express) => {
    
    app.use(`/api/v1`, v1_route())
    // app.use(`/api/v2`, v1_route)

}
