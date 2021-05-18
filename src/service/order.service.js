import axios from 'axios';
import config from '../config';
const HTTP_STATUS_OK = 200;

export default {
    async getOrders(token){
        return new Promise(async function(resolve, reject){
            const resp = await axios.get(`${config.api}/manage_order/get_orders`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            if (resp.status == HTTP_STATUS_OK){
                return resolve(resp.data);
            }
            else{
                return reject(resp.data);
            }
        });
    },
    async updateOrderStatus(token, payload){
        return new Promise(async function(resolve, reject){
            const resp = await axios.post(`${config.api}/manage_order/update_order_status`, payload,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            if (resp.status == HTTP_STATUS_OK){
                return resolve(resp.data);
            }
            else{
                return reject(resp.data);
            }
        });
    }
}