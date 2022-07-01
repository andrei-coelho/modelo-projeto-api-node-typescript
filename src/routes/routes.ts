import { Express } from "express";
// import routes
import api_routes from "./api";
import web_routes from "./web";

export default (app:Express) => {

    api_routes(app)
    web_routes(app)

}
