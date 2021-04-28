import axios from 'axios';
import config from '../config';

export default {
    async getGroceries(){
        return new Promise(async function(resolve, reject){
            const resp = await axios.get(`${config.api}/manage_groceries/get_groceries`);

            if (resp.status == 200){
                return resolve(resp.data);
            }
            else{
                reject(resp.data);
            }
        });
    },
    async rateGrocery(token, body){
        return new Promise(async function(resolve, reject){
            const resp = await axios.post(`${config.api}/manage_rating/rate_grocery`,body,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });

            if (resp.status == 200){
                return resolve(resp.data);
            }
            else{
                reject(resp.data);
            }
        });
    }
}