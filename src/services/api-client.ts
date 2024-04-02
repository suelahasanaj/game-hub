import axios from "axios";

export interface FetchResponse<T>{
    count:number;
    results:T[];
}

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '7c5ba00748d84d4aae85d8c65947adce'
    }
});