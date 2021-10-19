import { ListParams } from './../models/common';
import { City } from './../models/city';
import { ListResponse } from "models";
import axiosClient from "./axiosClient";

const cityApi = {

    getAll(params?: ListParams): Promise<ListResponse<City>>{
        const url = '/cities'
        return axiosClient.get(url, {params})
    }

}

export default cityApi