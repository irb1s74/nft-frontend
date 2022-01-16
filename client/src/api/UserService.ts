import axios, {AxiosResponse} from "axios";
import {ROOT_URL} from "../config/url";
import {IUser} from "../models/IUser";

export default class UserService {
    static async Auth(walletAddress: string): Promise<AxiosResponse> {
        return axios.post('/users/auth',
            {
                walletAddress: walletAddress,
            },
            {
                withCredentials: false,
                baseURL: ROOT_URL,
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
            }
        ).then((response) => {
            return response
        }).catch((error) => {
            return error.response
        })
    }
}