import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'https://wrsrjec3xb.execute-api.us-east-1.amazonaws.com'
})