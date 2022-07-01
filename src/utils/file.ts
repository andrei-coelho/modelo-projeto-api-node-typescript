import Config from "../config";

const is_in_production = Config.instance().json().type == 'production'

export default {
    get: (uri:string) => {
        return is_in_production 
        ? `${process.cwd()}/server${uri}` 
        : `${process.cwd()}/src${uri}`
    } 
}