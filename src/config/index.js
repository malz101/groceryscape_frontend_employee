/* Backend Service Configuration File */

export default {
    api: process.env.GROCERYSCAPE_API_URL || 'http://localhost:5000',  
    strict: process.env.VUE_APP_STRICT === true,
  };
  