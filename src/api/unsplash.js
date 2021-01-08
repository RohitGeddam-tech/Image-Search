//goal is to put some amount of code that contains related to axios

//this is the best method and should be used when needed in other apps

//import React from 'react';
import axios from 'axios';

//we can sharten the code by using const searchimg=(term)=>{ contain the respective code}

//create methode is going to create a instance of axios client with acouple defaulted properties 
//like params, await, header, etc

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID nl3HFoKOggBkv1vwoBPp0fjf8NqrZq7K1TKdn3c86vk'
    }
})