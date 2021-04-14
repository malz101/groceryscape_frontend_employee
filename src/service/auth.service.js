import axios from 'axios';
import config from '../config';

export default {
    async login(body){
        return new Promise(async(resolve, reject)=>{
            const resp = await axios.post(`${config.api}/manage_customer_account/login`, body);

            if(resp.status==200){
                return resolve(resp.data);
            }
            return reject(resp.data);
        })
    }
}