import axios from 'axios';
import config from '../config';

export default{
    async getCart(token){
        return new Promise(async (resolve, reject)=>{
            const resp = await axios.get(`${config.api}/manage_cart/get_cart_items`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            if(resp.status==200){
                return resolve(resp.data);
            }
            else{
                return reject(resp.data);
            }
        })
    },
    async addToCart(token, body){
        return new Promise(async(resolve, reject)=>{
            const resp = await axios.post(`${config.api}/manage_cart/addToCart`, body, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            if(resp.status==200){
                return resolve(resp.data);
            }
            else{
                return reject(resp.data);
            }
        })
    },
    async emptyCart(token){
        return new Promise(async(resolve, reject)=>{
            const resp = await axios.get(`${config.api}/manage_cart/empty_cart`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            if(resp.status==200){
                return resolve(resp.data);
            }
            else{
                return reject(resp.data);
            }
        });
    },
    async removeItemFromCart(token, body){
        return new Promise(async(resolve, reject)=>{
            const resp = await axios.post(`${config.api}/manage_cart/removeFromCart`, body, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            if(resp.status==200){
                return resolve(resp.data);
            }
            else{
                return reject(resp.data);
            }
        });
    },
    async checkoutCart(token){
        return new Promise(async(resolve, reject)=>{
            const resp = await axios.get(`${config.api}/manage_cart/CheckOutCart`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            if(resp.status==200){
                return resolve(resp.data);
            }
            else{
                return reject(resp.data);
            }
        });
    }
}