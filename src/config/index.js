/* Backend Service Configuration File */

export default {
    api: process.env.GROCERYSCAPE_API_URL || 'https://infinite-beach-27814.herokuapp.com',  
    strict: process.env.VUE_APP_STRICT === true,
  };
  